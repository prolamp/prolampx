<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Services\SoftwareCatalogService;
use App\Support\AdminListing;
use App\Support\AdminToast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(Request $request): Response
    {
        $categories = AdminListing::paginate(
            Category::query()->orderBy('sort_order')->withCount('software'),
            $request,
            ['name', 'slug'],
        );

        return Inertia::render('admin/categories/index', [
            'categories' => $categories,
            'filters' => AdminListing::filters($request),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/categories/create');
    }

    public function store(Request $request): RedirectResponse
    {
        Category::query()->create($this->validated($request));

        return AdminToast::route('admin.categories.index', 'Category created.');
    }

    public function show(Category $category): Response
    {
        $category->loadCount('software');

        return Inertia::render('admin/categories/show', [
            'category' => $category,
        ]);
    }

    public function edit(Category $category): Response
    {
        return Inertia::render('admin/categories/edit', [
            'category' => $category,
        ]);
    }

    public function update(Request $request, Category $category): RedirectResponse
    {
        $category->update($this->validated($request));

        app(SoftwareCatalogService::class)->flushAll();

        return AdminToast::route('admin.categories.index', 'Category updated.');
    }

    public function destroy(Category $category): RedirectResponse
    {
        $category->delete();
        app(SoftwareCatalogService::class)->flushAll();

        return AdminToast::route('admin.categories.index', 'Category deleted.');
    }

    public function toggleActive(Category $category): RedirectResponse
    {
        $category->update(['is_active' => ! $category->is_active]);
        app(SoftwareCatalogService::class)->flushAll();

        return AdminToast::back('Category status updated.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'sort_order' => ['integer', 'min:0'],
            'is_active' => ['boolean'],
        ]);
    }
}
