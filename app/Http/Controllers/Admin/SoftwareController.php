<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Software;
use App\Support\AdminToast;
use App\Support\AdminListing;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SoftwareController extends Controller
{
    public function index(Request $request): Response
    {
        $software = AdminListing::paginate(
            Software::query()
                ->with(['categoryRelation:id,name,slug'])
                ->orderBy('name'),
            $request,
            ['name', 'slug', 'category'],
        );

        return Inertia::render('admin/software/index', [
            'software' => $software,
            'filters' => AdminListing::filters($request),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/software/create', [
            'categories' => Category::query()->orderBy('sort_order')->get(['id', 'name', 'slug']),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $software = Software::query()->create($data['software']);
        $this->syncCommands($software, $data['install_commands'] ?? []);

        return AdminToast::route('admin.software.index', 'Software created.');
    }

    public function show(Software $software): Response
    {
        $software->load(['installCommands', 'categoryRelation']);

        return Inertia::render('admin/software/show', [
            'software' => $software,
        ]);
    }

    public function edit(Software $software): Response
    {
        $software->load('installCommands', 'categoryRelation');

        return Inertia::render('admin/software/edit', [
            'software' => $software,
            'categories' => Category::query()->orderBy('sort_order')->get(['id', 'name', 'slug']),
        ]);
    }

    public function update(Request $request, Software $software): RedirectResponse
    {
        $data = $this->validated($request);
        $software->update($data['software']);
        $this->syncCommands($software, $data['install_commands'] ?? []);

        return AdminToast::route('admin.software.index', 'Software updated.');
    }

    public function destroy(Software $software): RedirectResponse
    {
        $software->delete();

        return AdminToast::back('Software deleted.');
    }

    public function toggleActive(Software $software): RedirectResponse
    {
        $software->update(['is_active' => ! $software->is_active]);

        return AdminToast::back('Software status updated.');
    }

    /**
     * @return array{software: array<string, mixed>, install_commands: array<int, array<string, mixed>>}
     */
    private function validated(Request $request): array
    {
        $validated = $request->validate([
            'software.name' => ['required', 'string', 'max:255'],
            'software.slug' => ['required', 'string', 'max:255'],
            'software.category_id' => ['required', 'exists:categories,id'],
            'software.license_type' => ['required', 'in:free,freeware'],
            'software.access_tier' => ['nullable', 'in:public,subscription'],
            'software.latest_version' => ['nullable', 'string', 'max:50'],
            'software.icon' => ['nullable', 'string', 'max:500'],
            'software.description' => ['nullable', 'string'],
            'software.meta_title' => ['nullable', 'string', 'max:255'],
            'software.meta_description' => ['nullable', 'string'],
            'software.meta_keywords' => ['nullable', 'string', 'max:255'],
            'software.is_featured' => ['boolean'],
            'software.is_active' => ['boolean'],
            'install_commands' => ['array'],
            'install_commands.*.os' => ['required_with:install_commands', 'in:windows,macos,ubuntu'],
            'install_commands.*.package_manager' => ['required_with:install_commands', 'string'],
            'install_commands.*.command' => ['required_with:install_commands', 'string'],
        ]);

        $category = Category::query()->find($validated['software']['category_id']);
        $validated['software']['category'] = $category?->slug;

        return $validated;
    }

    /**
     * @param  array<int, array<string, mixed>>  $commands
     */
    private function syncCommands(Software $software, array $commands): void
    {
        $software->installCommands()->delete();

        foreach ($commands as $command) {
            if (filled($command['command'] ?? null)) {
                $software->installCommands()->create($command);
            }
        }
    }
}
