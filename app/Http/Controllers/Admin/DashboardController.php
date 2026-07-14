<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\Bundle;
use App\Models\Category;
use App\Models\Software;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'software' => Software::count(),
                'categories' => Category::count(),
                'bundles' => Bundle::count(),
                'posts' => BlogPost::count(),
                'users' => User::count(),
            ],
        ]);
    }
}
