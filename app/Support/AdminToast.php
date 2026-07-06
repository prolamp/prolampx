<?php

namespace App\Support;

use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class AdminToast
{
    public static function success(string $message): void
    {
        Inertia::flash('toast', ['type' => 'success', 'message' => $message]);
    }

    public static function error(string $message): void
    {
        Inertia::flash('toast', ['type' => 'error', 'message' => $message]);
    }

    public static function back(string $message, string $type = 'success'): RedirectResponse
    {
        Inertia::flash('toast', ['type' => $type, 'message' => $message]);

        return back();
    }

    /**
     * @param  array<string, mixed>  $parameters
     */
    public static function route(string $name, string $message, array $parameters = []): RedirectResponse
    {
        self::success($message);

        return redirect()->route($name, $parameters);
    }
}
