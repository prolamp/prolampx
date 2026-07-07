<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Support\AdminListing;
use App\Support\AdminToast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function index(Request $request): Response
    {
        $pages = AdminListing::paginate(
            Page::query()->latest(),
            $request,
            ['title', 'slug', 'meta_title'],
        );

        return Inertia::render('admin/pages/index', [
            'pages' => $pages,
            'filters' => AdminListing::filters($request),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/pages/create');
    }

    public function store(Request $request): RedirectResponse
    {
        Page::query()->create($this->validated($request));

        return AdminToast::route('admin.pages.index', 'Page created.');
    }

    public function show(Page $page): Response
    {
        return Inertia::render('admin/pages/show', [
            'page' => $page,
        ]);
    }

    public function edit(Page $page): Response
    {
        return Inertia::render('admin/pages/edit', [
            'page' => $page,
        ]);
    }

    public function update(Request $request, Page $page): RedirectResponse
    {
        $page->update($this->validated($request, $page));

        return AdminToast::route('admin.pages.index', 'Page updated.');
    }

    public function destroy(Page $page): RedirectResponse
    {
        $page->delete();

        return AdminToast::route('admin.pages.index', 'Page deleted.');
    }

    public function togglePublished(Page $page): RedirectResponse
    {
        $page->update(['is_published' => ! $page->is_published]);

        return AdminToast::back('Page publication status updated.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request, ?Page $page = null): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                Rule::unique('pages', 'slug')->ignore($page?->id),
            ],
            'body' => ['required', 'string'],
            'meta_title' => ['nullable', 'string', 'max:255'],
            'meta_description' => ['nullable', 'string', 'max:1000'],
            'og_image' => ['nullable', 'string', 'max:500'],
            'is_published' => ['boolean'],
        ]);
    }
}
