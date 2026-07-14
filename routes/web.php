<?php

use App\Http\Controllers\Admin\BlogCategoryController as AdminBlogCategoryController;
use App\Http\Controllers\Admin\BlogController as AdminBlogController;
use App\Http\Controllers\Admin\BundleController as AdminBundleController;
use App\Http\Controllers\Admin\CategoryController as AdminCategoryController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\MediaController as AdminMediaController;
use App\Http\Controllers\Admin\PageController as AdminPageController;
use App\Http\Controllers\Admin\SoftwareController as AdminSoftwareController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\BundlePageController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InstallerController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\SoftwarePageController;
use App\Http\Middleware\DetectOperatingSystem;
use App\Http\Middleware\EnsureUserHasRole;
use Illuminate\Support\Facades\Route;

Route::middleware([DetectOperatingSystem::class])->group(function () {
    Route::get('/', HomeController::class)->name('home');
    Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
    Route::get('/blog/{post:slug}', [BlogController::class, 'show'])->name('blog.show');
    Route::get('/software', [SoftwarePageController::class, 'index'])->name('software.index');
    Route::get('/software/{software:slug}', [SoftwarePageController::class, 'show'])->name('software.show');
    Route::get('/bundles', [BundlePageController::class, 'index'])->name('bundles.index');
    Route::get('/bundles/{bundle:slug}', [BundlePageController::class, 'show'])->name('bundles.show');
    Route::get('/installer', [InstallerController::class, 'index'])->name('installer.index');
    Route::post('/installer/generate', [InstallerController::class, 'generate'])->name('installer.generate');
    Route::redirect('/setup', '/installer');
    Route::post('/setup/generate', [InstallerController::class, 'generate']);
    Route::redirect('/privacy', '/page/privacy-policy');
    Route::redirect('/terms', '/page/terms-of-service');
    Route::redirect('/cookies', '/page/cookie-policy');
    Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
    Route::post('/contact', [ContactController::class, 'store'])->middleware('throttle:6,1')->name('contact.store');
    Route::get('/page/{slug}', [PageController::class, 'show'])->name('page.show');

    Route::get('/api/catalog/version', [CatalogApiController::class, 'version'])->name('api.catalog.version');
    Route::get('/api/catalog/{os}', [CatalogApiController::class, 'show'])->name('api.catalog.show');
});

Route::get('/s/{token}/prolampx-setup.{extension}', [InstallerController::class, 'download'])
    ->whereIn('extension', ['bat', 'command', 'sh'])
    ->name('installer.download');

Route::get('/sitemap.xml', SitemapController::class)->name('sitemap');
Route::get('/robots.txt', fn () => response("User-agent: *\nAllow: /\nSitemap: ".url('/sitemap.xml'), 200, ['Content-Type' => 'text/plain']));
Route::get('/ads.txt', fn () => response(env('ADSENSE_PUBLISHER_ID', ''), 200, ['Content-Type' => 'text/plain']));

Route::middleware(['auth', 'verified', EnsureUserHasRole::class.':super_admin,admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/dashboard', AdminDashboardController::class)->name('dashboard');
        Route::redirect('/', '/admin/dashboard');

        Route::get('/categories', [AdminCategoryController::class, 'index'])->name('categories.index');
        Route::get('/categories/create', [AdminCategoryController::class, 'create'])->name('categories.create');
        Route::post('/categories', [AdminCategoryController::class, 'store'])->name('categories.store');
        Route::get('/categories/{category:id}', [AdminCategoryController::class, 'show'])->name('categories.show');
        Route::get('/categories/{category:id}/edit', [AdminCategoryController::class, 'edit'])->name('categories.edit');
        Route::put('/categories/{category:id}', [AdminCategoryController::class, 'update'])->name('categories.update');
        Route::delete('/categories/{category:id}', [AdminCategoryController::class, 'destroy'])->name('categories.destroy');
        Route::patch('/categories/{category:id}/toggle-active', [AdminCategoryController::class, 'toggleActive'])->name('categories.toggle-active');

        Route::get('/software', [AdminSoftwareController::class, 'index'])->name('software.index');
        Route::get('/software/create', [AdminSoftwareController::class, 'create'])->name('software.create');
        Route::post('/software', [AdminSoftwareController::class, 'store'])->name('software.store');
        Route::get('/software/{software:id}', [AdminSoftwareController::class, 'show'])->name('software.show');
        Route::get('/software/{software:id}/edit', [AdminSoftwareController::class, 'edit'])->name('software.edit');
        Route::put('/software/{software:id}', [AdminSoftwareController::class, 'update'])->name('software.update');
        Route::delete('/software/{software:id}', [AdminSoftwareController::class, 'destroy'])->name('software.destroy');
        Route::patch('/software/{software:id}/toggle-active', [AdminSoftwareController::class, 'toggleActive'])->name('software.toggle-active');

        Route::get('/blog', [AdminBlogController::class, 'index'])->name('blog.index');
        Route::get('/blog/create', [AdminBlogController::class, 'create'])->name('blog.create');
        Route::post('/blog', [AdminBlogController::class, 'store'])->name('blog.store');
        Route::get('/blog/{post:id}', [AdminBlogController::class, 'show'])->name('blog.show');
        Route::get('/blog/{post:id}/edit', [AdminBlogController::class, 'edit'])->name('blog.edit');
        Route::put('/blog/{post:id}', [AdminBlogController::class, 'update'])->name('blog.update');
        Route::delete('/blog/{post:id}', [AdminBlogController::class, 'destroy'])->name('blog.destroy');
        Route::patch('/blog/{post:id}/toggle-active', [AdminBlogController::class, 'toggleActive'])->name('blog.toggle-active');

        Route::get('/blog-categories', [AdminBlogCategoryController::class, 'index'])->name('blog-categories.index');
        Route::get('/blog-categories/create', [AdminBlogCategoryController::class, 'create'])->name('blog-categories.create');
        Route::post('/blog-categories', [AdminBlogCategoryController::class, 'store'])->name('blog-categories.store');
        Route::get('/blog-categories/{blogCategory:id}', [AdminBlogCategoryController::class, 'show'])->name('blog-categories.show');
        Route::get('/blog-categories/{blogCategory:id}/edit', [AdminBlogCategoryController::class, 'edit'])->name('blog-categories.edit');
        Route::put('/blog-categories/{blogCategory:id}', [AdminBlogCategoryController::class, 'update'])->name('blog-categories.update');
        Route::delete('/blog-categories/{blogCategory:id}', [AdminBlogCategoryController::class, 'destroy'])->name('blog-categories.destroy');
        Route::patch('/blog-categories/{blogCategory:id}/toggle-active', [AdminBlogCategoryController::class, 'toggleActive'])->name('blog-categories.toggle-active');

        Route::post('/media', [AdminMediaController::class, 'store'])->name('media.store');

        Route::get('/pages', [AdminPageController::class, 'index'])->name('pages.index');
        Route::get('/pages/create', [AdminPageController::class, 'create'])->name('pages.create');
        Route::post('/pages', [AdminPageController::class, 'store'])->name('pages.store');
        Route::get('/pages/{page:id}', [AdminPageController::class, 'show'])->name('pages.show');
        Route::get('/pages/{page:id}/edit', [AdminPageController::class, 'edit'])->name('pages.edit');
        Route::put('/pages/{page:id}', [AdminPageController::class, 'update'])->name('pages.update');
        Route::delete('/pages/{page:id}', [AdminPageController::class, 'destroy'])->name('pages.destroy');
        Route::patch('/pages/{page:id}/toggle-published', [AdminPageController::class, 'togglePublished'])->name('pages.toggle-published');

        Route::get('/bundles', [AdminBundleController::class, 'index'])->name('bundles.index');
        Route::get('/bundles/create', [AdminBundleController::class, 'create'])->name('bundles.create');
        Route::post('/bundles', [AdminBundleController::class, 'store'])->name('bundles.store');
        Route::get('/bundles/{bundle:id}', [AdminBundleController::class, 'show'])->name('bundles.show');
        Route::get('/bundles/{bundle:id}/edit', [AdminBundleController::class, 'edit'])->name('bundles.edit');
        Route::put('/bundles/{bundle:id}', [AdminBundleController::class, 'update'])->name('bundles.update');
        Route::delete('/bundles/{bundle:id}', [AdminBundleController::class, 'destroy'])->name('bundles.destroy');
        Route::patch('/bundles/{bundle:id}/toggle-active', [AdminBundleController::class, 'toggleActive'])->name('bundles.toggle-active');

        Route::middleware(EnsureUserHasRole::class.':super_admin')->group(function () {
            Route::get('/users', [AdminUserController::class, 'index'])->name('users.index');
            Route::get('/users/create', [AdminUserController::class, 'create'])->name('users.create');
            Route::post('/users', [AdminUserController::class, 'store'])->name('users.store');
            Route::get('/users/{user}', [AdminUserController::class, 'show'])->name('users.show');
            Route::delete('/users/{user}', [AdminUserController::class, 'destroy'])->name('users.destroy');
        });
    });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
