<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Media;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'file' => ['required', 'file', 'max:10240', 'mimes:jpeg,png,jpg,gif,webp,svg'],
            'alt' => ['nullable', 'string', 'max:255'],
        ]);

        $file = $validated['file'];
        $path = $file->store('media/'.now()->format('Y/m'), 'public');

        $media = Media::query()->create([
            'filename' => $file->getClientOriginalName(),
            'path' => $path,
            'disk' => 'public',
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'alt' => $validated['alt'] ?? null,
            'uploaded_by' => $request->user()?->id,
        ]);

        return response()->json([
            'id' => $media->id,
            'url' => $media->url(),
            'filename' => $media->filename,
        ]);
    }
}
