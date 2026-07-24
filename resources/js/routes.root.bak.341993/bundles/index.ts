import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\BundlePageController::index
* @see app/Http/Controllers/BundlePageController.php:14
* @route '/bundles'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/bundles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BundlePageController::index
* @see app/Http/Controllers/BundlePageController.php:14
* @route '/bundles'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BundlePageController::index
* @see app/Http/Controllers/BundlePageController.php:14
* @route '/bundles'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BundlePageController::index
* @see app/Http/Controllers/BundlePageController.php:14
* @route '/bundles'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BundlePageController::index
* @see app/Http/Controllers/BundlePageController.php:14
* @route '/bundles'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BundlePageController::index
* @see app/Http/Controllers/BundlePageController.php:14
* @route '/bundles'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BundlePageController::index
* @see app/Http/Controllers/BundlePageController.php:14
* @route '/bundles'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\BundlePageController::show
* @see app/Http/Controllers/BundlePageController.php:30
* @route '/bundles/{bundle}'
*/
export const show = (args: { bundle: string | { slug: string } } | [bundle: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/bundles/{bundle}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BundlePageController::show
* @see app/Http/Controllers/BundlePageController.php:30
* @route '/bundles/{bundle}'
*/
show.url = (args: { bundle: string | { slug: string } } | [bundle: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bundle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { bundle: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            bundle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        bundle: typeof args.bundle === 'object'
        ? args.bundle.slug
        : args.bundle,
    }

    return show.definition.url
            .replace('{bundle}', parsedArgs.bundle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BundlePageController::show
* @see app/Http/Controllers/BundlePageController.php:30
* @route '/bundles/{bundle}'
*/
show.get = (args: { bundle: string | { slug: string } } | [bundle: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BundlePageController::show
* @see app/Http/Controllers/BundlePageController.php:30
* @route '/bundles/{bundle}'
*/
show.head = (args: { bundle: string | { slug: string } } | [bundle: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BundlePageController::show
* @see app/Http/Controllers/BundlePageController.php:30
* @route '/bundles/{bundle}'
*/
const showForm = (args: { bundle: string | { slug: string } } | [bundle: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BundlePageController::show
* @see app/Http/Controllers/BundlePageController.php:30
* @route '/bundles/{bundle}'
*/
showForm.get = (args: { bundle: string | { slug: string } } | [bundle: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BundlePageController::show
* @see app/Http/Controllers/BundlePageController.php:30
* @route '/bundles/{bundle}'
*/
showForm.head = (args: { bundle: string | { slug: string } } | [bundle: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const bundles = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default bundles