<?php

namespace App\Http\Requests;

use App\Enums\OperatingSystem;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class GenerateSetupRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'os' => ['required', Rule::enum(OperatingSystem::class)],
            'software_ids' => ['required', 'array', 'min:1'],
            'software_ids.*' => [
                'integer',
                Rule::exists('software', 'id')->where(fn ($query) => $query->where('is_active', true)),
            ],
        ];
    }
}
