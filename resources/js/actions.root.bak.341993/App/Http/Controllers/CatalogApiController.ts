import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CatalogApiController::version
* @see app/Http/Controllers/CatalogApiController.php:11
* @route '/api/catalog/version'
*/
export const version = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: version.url(options),
    method: 'get',
})

version.definition = {
    methods: ["get","head"],
    url: '/api/catalog/version',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CatalogApiController::version
* @see app/Http/Controllers/CatalogApiController.php:11
* @route '/api/catalog/version'
*/
version.url = (options?: RouteQueryOptions) => {
    return version.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CatalogApiController::version
* @see app/Http/Controllers/CatalogApiController.php:11
* @route '/api/catalog/version'
*/
version.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: version.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CatalogApiController::version
* @see app/Http/Controllers/CatalogApiController.php:11
* @route '/api/catalog/version'
*/
version.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: version.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CatalogApiController::version
* @see app/Http/Controllers/CatalogApiController.php:11
* @route '/api/catalog/version'
*/
const versionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: version.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CatalogApiController::version
* @see app/Http/Controllers/CatalogApiController.php:11
* @route '/api/catalog/version'
*/
versionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: version.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CatalogApiController::version
* @see app/Http/Controllers/CatalogApiController.php:11
* @route '/api/catalog/version'
*/
versionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: version.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

version.form = versionForm

/**
* @see \App\Http\Controllers\CatalogApiController::show
* @see app/Http/Controllers/CatalogApiController.php:16
* @route '/api/catalog/{os}'
*/
export const show = (args: { os: string | number } | [os: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/catalog/{os}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CatalogApiController::show
* @see app/Http/Controllers/CatalogApiController.php:16
* @route '/api/catalog/{os}'
*/
show.url = (args: { os: string | number } | [os: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { os: args }
    }

    if (Array.isArray(args)) {
        args = {
            os: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        os: args.os,
    }

    return show.definition.url
            .replace('{os}', parsedArgs.os.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CatalogApiController::show
* @see app/Http/Controllers/CatalogApiController.php:16
* @route '/api/catalog/{os}'
*/
show.get = (args: { os: string | number } | [os: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CatalogApiController::show
* @see app/Http/Controllers/CatalogApiController.php:16
* @route '/api/catalog/{os}'
*/
show.head = (args: { os: string | number } | [os: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CatalogApiController::show
* @see app/Http/Controllers/CatalogApiController.php:16
* @route '/api/catalog/{os}'
*/
const showForm = (args: { os: string | number } | [os: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CatalogApiController::show
* @see app/Http/Controllers/CatalogApiController.php:16
* @route '/api/catalog/{os}'
*/
showForm.get = (args: { os: string | number } | [os: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CatalogApiController::show
* @see app/Http/Controllers/CatalogApiController.php:16
* @route '/api/catalog/{os}'
*/
showForm.head = (args: { os: string | number } | [os: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const CatalogApiController = { version, show }

export default CatalogApiController