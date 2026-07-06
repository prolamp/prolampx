<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogCategory;
use App\Models\BlogPost;
use App\Support\AdminListing;
use App\Support\AdminToast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(Request $request): Response
    {
        $posts = AdminListing::paginate(
            BlogPost::query()->with('category:id,name')->latest(),
            $request,
            ['title', 'slug'],
        );

        return Inertia::render('admin/blog/index', [
            'posts' => $posts,
            'filters' => AdminListing::filters($request),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/blog/create', [
            'categories' => BlogCategory::query()->where('is_active', true)->orderBy('sort_order')->get(['id', 'name']),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        BlogPost::query()->create($this->validated($request));

        return AdminToast::route('admin.blog.index', 'Post created.');
    }

    public function show(BlogPost $post): Response
    {
        $post->load('category:id,name');

        return Inertia::render('admin/blog/show', [
            'post' => $post,
        ]);
    }

    public function edit(BlogPost $post): Response
    {
        return Inertia::render('admin/blog/edit', [
            'post' => $post,
            'categories' => BlogCategory::query()->orderBy('sort_order')->get(['id', 'name']),
        ]);
    }

    public function update(Request $request, BlogPost $post): RedirectResponse
    {
        $post->update($this->validated($request));

        return AdminToast::route('admin.blog.index', 'Post updated.');
    }

    public function destroy(BlogPost $post): RedirectResponse
    {
        $post->delete();

        return AdminToast::back('Post deleted.');
    }

    public function toggleActive(BlogPost $post): RedirectResponse
    {
        $post->update([
            'published_at' => $post->published_at ? null : now(),
        ]);

        return AdminToast::back('Post status updated.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'blog_category_id' => ['nullable', 'exists:blog_categories,id'],
            'body' => ['required', 'string'],
            'cover_image' => ['nullable', 'string'],
            'meta_title' => ['nullable', 'string'],
            'meta_description' => ['nullable', 'string'],
            'meta_keywords' => ['nullable', 'string'],
            'published_at' => ['nullable', 'date'],
        ]);
    }
}
