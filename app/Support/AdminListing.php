<?php

namespace App\Support;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class AdminListing
{
    /**
     * @param  Builder<\Illuminate\Database\Eloquent\Model>  $query
     * @param  list<string>  $searchColumns
     * @return LengthAwarePaginator<int, \Illuminate\Database\Eloquent\Model>
     */
    public static function paginate(Builder $query, Request $request, array $searchColumns = ['name'], int $perPage = 15): LengthAwarePaginator
    {
        $search = $request->string('search')->trim()->toString();

        if ($search !== '') {
            $query->where(function (Builder $builder) use ($search, $searchColumns): void {
                foreach ($searchColumns as $column) {
                    $builder->orWhere($column, 'like', "%{$search}%");
                }
            });
        }

        return $query->paginate($perPage)->withQueryString();
    }

    /**
     * @return array{search: string}
     */
    public static function filters(Request $request): array
    {
        return [
            'search' => $request->string('search')->trim()->toString(),
        ];
    }
}
