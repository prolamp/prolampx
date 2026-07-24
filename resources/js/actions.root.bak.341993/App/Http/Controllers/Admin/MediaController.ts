import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\MediaController::store
* @see app/Http/Controllers/Admin/MediaController.php:13
* @route '/admin/media'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MediaController::store
* @see app/Http/Controllers/Admin/MediaController.php:13
* @route '/admin/media'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MediaController::store
* @see app/Http/Controllers/Admin/MediaController.php:13
* @route '/admin/media'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MediaController::store
* @see app/Http/Controllers/Admin/MediaController.php:13
* @route '/admin/media'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MediaController::store
* @see app/Http/Controllers/Admin/MediaController.php:13
* @route '/admin/media'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const MediaController = { store }

export default MediaController