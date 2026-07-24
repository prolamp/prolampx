import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\InstallerController::index
* @see app/Http/Controllers/InstallerController.php:21
* @route '/installer'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/installer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstallerController::index
* @see app/Http/Controllers/InstallerController.php:21
* @route '/installer'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstallerController::index
* @see app/Http/Controllers/InstallerController.php:21
* @route '/installer'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallerController::index
* @see app/Http/Controllers/InstallerController.php:21
* @route '/installer'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InstallerController::index
* @see app/Http/Controllers/InstallerController.php:21
* @route '/installer'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallerController::index
* @see app/Http/Controllers/InstallerController.php:21
* @route '/installer'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallerController::index
* @see app/Http/Controllers/InstallerController.php:21
* @route '/installer'
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
* @see \App\Http\Controllers\InstallerController::generate
* @see app/Http/Controllers/InstallerController.php:100
* @route '/installer/generate'
*/
export const generate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(options),
    method: 'post',
})

generate.definition = {
    methods: ["post"],
    url: '/installer/generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InstallerController::generate
* @see app/Http/Controllers/InstallerController.php:100
* @route '/installer/generate'
*/
generate.url = (options?: RouteQueryOptions) => {
    return generate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstallerController::generate
* @see app/Http/Controllers/InstallerController.php:100
* @route '/installer/generate'
*/
generate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InstallerController::generate
* @see app/Http/Controllers/InstallerController.php:100
* @route '/installer/generate'
*/
const generateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InstallerController::generate
* @see app/Http/Controllers/InstallerController.php:100
* @route '/installer/generate'
*/
generateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate.url(options),
    method: 'post',
})

generate.form = generateForm

/**
* @see \App\Http\Controllers\InstallerController::download
* @see app/Http/Controllers/InstallerController.php:122
* @route '/s/{token}/prolampx-setup.{extension}'
*/
export const download = (args: { token: string | number, extension: string | number } | [token: string | number, extension: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/s/{token}/prolampx-setup.{extension}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstallerController::download
* @see app/Http/Controllers/InstallerController.php:122
* @route '/s/{token}/prolampx-setup.{extension}'
*/
download.url = (args: { token: string | number, extension: string | number } | [token: string | number, extension: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            token: args[0],
            extension: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
        extension: args.extension,
    }

    return download.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace('{extension}', parsedArgs.extension.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstallerController::download
* @see app/Http/Controllers/InstallerController.php:122
* @route '/s/{token}/prolampx-setup.{extension}'
*/
download.get = (args: { token: string | number, extension: string | number } | [token: string | number, extension: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallerController::download
* @see app/Http/Controllers/InstallerController.php:122
* @route '/s/{token}/prolampx-setup.{extension}'
*/
download.head = (args: { token: string | number, extension: string | number } | [token: string | number, extension: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InstallerController::download
* @see app/Http/Controllers/InstallerController.php:122
* @route '/s/{token}/prolampx-setup.{extension}'
*/
const downloadForm = (args: { token: string | number, extension: string | number } | [token: string | number, extension: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallerController::download
* @see app/Http/Controllers/InstallerController.php:122
* @route '/s/{token}/prolampx-setup.{extension}'
*/
downloadForm.get = (args: { token: string | number, extension: string | number } | [token: string | number, extension: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallerController::download
* @see app/Http/Controllers/InstallerController.php:122
* @route '/s/{token}/prolampx-setup.{extension}'
*/
downloadForm.head = (args: { token: string | number, extension: string | number } | [token: string | number, extension: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

const installer = {
    index: Object.assign(index, index),
    generate: Object.assign(generate, generate),
    download: Object.assign(download, download),
}

export default installer