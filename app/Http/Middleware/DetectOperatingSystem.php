<?php

namespace App\Http\Middleware;

use App\Support\OperatingSystemDetector;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DetectOperatingSystem
{
    /**
     * @param  Closure(Request): Response  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $request->attributes->set('detected_os', OperatingSystemDetector::detectFromUserAgent($request->userAgent() ?? ''));

        return $next($request);
    }
}
