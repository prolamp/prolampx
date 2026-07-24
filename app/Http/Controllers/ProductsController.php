<?php

namespace App\Http\Controllers;

use App\Support\SeoMeta;
use Inertia\Inertia;
use Inertia\Response;

class ProductsController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('products/index', [
            'seo' => SeoMeta::page('products', ['path' => '/products']),
        ]);
    }
}
