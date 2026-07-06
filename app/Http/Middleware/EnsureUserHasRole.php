<?php

namespace App\Http\Middleware;

use App\Enums\UserRole;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserHasRole
{
    /**
     * @param  Closure(Request): Response  $next
     */
    public function handle(Request $request, Closure $next, string ...$roles): Response
    {
        $user = $request->user();

        $allowedRoles = collect($roles)
            ->flatMap(fn (string $role) => str_contains($role, ',') ? explode(',', $role) : [$role])
            ->all();

        if (! $user || ! in_array($user->role->value, $allowedRoles, true)) {
            abort(403);
        }

        return $next($request);
    }
}
