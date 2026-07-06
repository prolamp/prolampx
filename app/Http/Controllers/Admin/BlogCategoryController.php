<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogCategory;
use App\Support\AdminListing;
use App\Support\AdminToast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogCategoryController extends Controller
{
    public function index(Request $request): Response
    {
        $categories = AdminListing::paginate(
            BlogCategory::query()->withCount('posts')->orderBy('sort_order'),
            $request,
            ['name', 'slug'],
        );

        return Inertia::render('admin/blog-categories/index', [
            'categories' => $categories,
            'filters' => AdminListing::filters($request),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/blog-categories/create');
    }

    public function store(Request $request): RedirectResponse
    {
        BlogCategory::query()->create($this->validated($request));

        return AdminToast::route('admin.blog-categories.index', 'Blog category created.');
    }

    public function show(BlogCategory $blogCategory): Response
    {
        $blogCategory->loadCount('posts');

        return Inertia::render('admin/blog-categories/show', [
            'category' => $blogCategory,
        ]);
    }

    public function edit(BlogCategory $blogCategory): Response
    {
        return Inertia::render('admin/blog-categories/edit', [
            'category' => $blogCategory,
        ]);
    }

    public function update(Request $request, BlogCategory $blogCategory): RedirectResponse
    {
        $blogCategory->update($this->validated($request));

        return AdminToast::route('admin.blog-categories.index', 'Blog category updated.');
    }

    public function destroy(BlogCategory $blogCategory): RedirectResponse
    {
        $blogCategory->delete();

        return AdminToast::back('Blog category deleted.');
    }

    public function toggleActive(BlogCategory $blogCategory): RedirectResponse
    {
        $blogCategory->update(['is_active' => ! $blogCategory->is_active]);

        return AdminToast::back('Blog category status updated.');
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
            'sort_order' => ['integer'],
            'is_active' => ['boolean'],
        ]);
    }
}
