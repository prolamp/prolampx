import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SoftwarePageController::index
* @see app/Http/Controllers/SoftwarePageController.php:15
* @route '/software'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/software',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SoftwarePageController::index
* @see app/Http/Controllers/SoftwarePageController.php:15
* @route '/software'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SoftwarePageController::index
* @see app/Http/Controllers/SoftwarePageController.php:15
* @route '/software'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SoftwarePageController::index
* @see app/Http/Controllers/SoftwarePageController.php:15
* @route '/software'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SoftwarePageController::index
* @see app/Http/Controllers/SoftwarePageController.php:15
* @route '/software'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SoftwarePageController::index
* @see app/Http/Controllers/SoftwarePageController.php:15
* @route '/software'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SoftwarePageController::index
* @see app/Http/Controllers/SoftwarePageController.php:15
* @route '/software'
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
* @see \App\Http\Controllers\SoftwarePageController::show
* @see app/Http/Controllers/SoftwarePageController.php:45
* @route '/software/{software}'
*/
export const show = (args: { software: string | { slug: string } } | [software: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/software/{software}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SoftwarePageController::show
* @see app/Http/Controllers/SoftwarePageController.php:45
* @route '/software/{software}'
*/
show.url = (args: { software: string | { slug: string } } | [software: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { software: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { software: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            software: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        software: typeof args.software === 'object'
        ? args.software.slug
        : args.software,
    }

    return show.definition.url
            .replace('{software}', parsedArgs.software.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SoftwarePageController::show
* @see app/Http/Controllers/SoftwarePageController.php:45
* @route '/software/{software}'
*/
show.get = (args: { software: string | { slug: string } } | [software: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SoftwarePageController::show
* @see app/Http/Controllers/SoftwarePageController.php:45
* @route '/software/{software}'
*/
show.head = (args: { software: string | { slug: string } } | [software: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SoftwarePageController::show
* @see app/Http/Controllers/SoftwarePageController.php:45
* @route '/software/{software}'
*/
const showForm = (args: { software: string | { slug: string } } | [software: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SoftwarePageController::show
* @see app/Http/Controllers/SoftwarePageController.php:45
* @route '/software/{software}'
*/
showForm.get = (args: { software: string | { slug: string } } | [software: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SoftwarePageController::show
* @see app/Http/Controllers/SoftwarePageController.php:45
* @route '/software/{software}'
*/
showForm.head = (args: { software: string | { slug: string } } | [software: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const SoftwarePageController = { index, show }

export default SoftwarePageController