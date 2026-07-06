<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bundle;
use App\Models\Software;
use App\Services\SoftwareCatalogService;
use App\Support\AdminListing;
use App\Support\AdminToast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BundleController extends Controller
{
    public function index(Request $request): Response
    {
        $bundles = AdminListing::paginate(
            Bundle::query()->with('software:id,name'),
            $request,
            ['name', 'slug'],
        );

        return Inertia::render('admin/bundles/index', [
            'bundles' => $bundles,
            'filters' => AdminListing::filters($request),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/bundles/create', [
            'allSoftware' => Software::query()->where('is_active', true)->orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function store(Request $request, SoftwareCatalogService $catalog): RedirectResponse
    {
        $data = $this->validated($request);
        $bundle = Bundle::query()->create(collect($data)->except('software_ids')->all());
        $bundle->software()->sync($data['software_ids'] ?? []);
        $catalog->flushAll();

        return AdminToast::route('admin.bundles.index', 'Bundle created.');
    }

    public function show(Bundle $bundle): Response
    {
        $bundle->load('software:id,name,slug');

        return Inertia::render('admin/bundles/show', [
            'bundle' => $bundle,
        ]);
    }

    public function edit(Bundle $bundle): Response
    {
        $bundle->load('software:id');

        return Inertia::render('admin/bundles/edit', [
            'bundle' => $bundle,
            'allSoftware' => Software::query()->orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function update(Request $request, Bundle $bundle, SoftwareCatalogService $catalog): RedirectResponse
    {
        $data = $this->validated($request);
        $bundle->update(collect($data)->except('software_ids')->all());
        $bundle->software()->sync($data['software_ids'] ?? []);
        $catalog->flushAll();

        return AdminToast::route('admin.bundles.index', 'Bundle updated.');
    }

    public function destroy(Bundle $bundle, SoftwareCatalogService $catalog): RedirectResponse
    {
        $bundle->delete();
        $catalog->flushAll();

        return AdminToast::back('Bundle deleted.');
    }

    public function toggleActive(Bundle $bundle, SoftwareCatalogService $catalog): RedirectResponse
    {
        $bundle->update(['is_active' => ! $bundle->is_active]);
        $catalog->flushAll();

        return AdminToast::back('Bundle status updated.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'meta_title' => ['nullable', 'string'],
            'meta_description' => ['nullable', 'string'],
            'is_featured' => ['boolean'],
            'is_active' => ['boolean'],
            'software_ids' => ['array'],
            'software_ids.*' => ['integer', 'exists:software,id'],
        ]);
    }
}
