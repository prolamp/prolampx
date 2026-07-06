<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PortfolioSection;
use App\Support\AdminListing;
use App\Support\AdminToast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function index(Request $request): Response
    {
        $sections = AdminListing::paginate(
            PortfolioSection::query()->orderBy('sort_order'),
            $request,
            ['title', 'type'],
        );

        return Inertia::render('admin/portfolio/index', [
            'sections' => $sections,
            'sectionTypes' => PortfolioSection::TYPES,
            'filters' => AdminListing::filters($request),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/portfolio/create', [
            'sectionTypes' => PortfolioSection::TYPES,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        PortfolioSection::query()->create($this->validated($request));

        return AdminToast::route('admin.portfolio.index', 'Section created.');
    }

    public function show(PortfolioSection $portfolio): Response
    {
        return Inertia::render('admin/portfolio/show', [
            'section' => $portfolio,
        ]);
    }

    public function edit(PortfolioSection $portfolio): Response
    {
        return Inertia::render('admin/portfolio/edit', [
            'section' => $portfolio,
            'sectionTypes' => PortfolioSection::TYPES,
        ]);
    }

    public function update(Request $request, PortfolioSection $portfolio): RedirectResponse
    {
        $portfolio->update($this->validated($request));

        return AdminToast::route('admin.portfolio.index', 'Section updated.');
    }

    public function destroy(PortfolioSection $portfolio): RedirectResponse
    {
        $portfolio->delete();

        return AdminToast::back('Section deleted.');
    }

    public function toggleActive(PortfolioSection $portfolio): RedirectResponse
    {
        $portfolio->update(['is_active' => ! $portfolio->is_active]);

        return AdminToast::back('Section status updated.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        $data = $request->validate([
            'type' => ['required', 'string', 'in:'.implode(',', PortfolioSection::TYPES)],
            'title' => ['nullable', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'body' => ['nullable', 'string'],
            'image' => ['nullable', 'string'],
            'settings' => ['nullable', 'array'],
            'sort_order' => ['integer'],
            'is_active' => ['boolean'],
        ]);

        if (isset($data['settings']['items']) && is_string($data['settings']['items'])) {
            $data['settings']['items'] = json_decode($data['settings']['items'], true) ?? [];
        }

        return $data;
    }
}
