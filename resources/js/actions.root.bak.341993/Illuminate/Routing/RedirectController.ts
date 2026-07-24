import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
const RedirectController2d4ca18360b2bcf78eaf4815fa03bc90 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'get',
})

RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/setup',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url = (options?: RouteQueryOptions) => {
    return RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
const RedirectController2d4ca18360b2bcf78eaf4815fa03bc90Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/setup'
*/
RedirectController2d4ca18360b2bcf78eaf4815fa03bc90Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController2d4ca18360b2bcf78eaf4815fa03bc90.form = RedirectController2d4ca18360b2bcf78eaf4815fa03bc90Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
const RedirectControllera2c058616aeb0c9393ca03a98bc05c02 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'get',
})

RedirectControllera2c058616aeb0c9393ca03a98bc05c02.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/privacy',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url = (options?: RouteQueryOptions) => {
    return RedirectControllera2c058616aeb0c9393ca03a98bc05c02.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
const RedirectControllera2c058616aeb0c9393ca03a98bc05c02Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/privacy'
*/
RedirectControllera2c058616aeb0c9393ca03a98bc05c02Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllera2c058616aeb0c9393ca03a98bc05c02.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectControllera2c058616aeb0c9393ca03a98bc05c02.form = RedirectControllera2c058616aeb0c9393ca03a98bc05c02Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
const RedirectController619dc3a99425f668ea9cab64e6648cb4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'get',
})

RedirectController619dc3a99425f668ea9cab64e6648cb4.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/terms',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4.url = (options?: RouteQueryOptions) => {
    return RedirectController619dc3a99425f668ea9cab64e6648cb4.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
const RedirectController619dc3a99425f668ea9cab64e6648cb4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController619dc3a99425f668ea9cab64e6648cb4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController619dc3a99425f668ea9cab64e6648cb4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController619dc3a99425f668ea9cab64e6648cb4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController619dc3a99425f668ea9cab64e6648cb4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/terms'
*/
RedirectController619dc3a99425f668ea9cab64e6648cb4Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController619dc3a99425f668ea9cab64e6648cb4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController619dc3a99425f668ea9cab64e6648cb4.form = RedirectController619dc3a99425f668ea9cab64e6648cb4Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
const RedirectControllera2054ddf4ed5c656396a4f4d9d64c843 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'get',
})

RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/cookies',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url = (options?: RouteQueryOptions) => {
    return RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
const RedirectControllera2054ddf4ed5c656396a4f4d9d64c843Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/cookies'
*/
RedirectControllera2054ddf4ed5c656396a4f4d9d64c843Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectControllera2054ddf4ed5c656396a4f4d9d64c843.form = RedirectControllera2054ddf4ed5c656396a4f4d9d64c843Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
const RedirectController35f58437d9250c39f332f5e8e70440b7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

RedirectController35f58437d9250c39f332f5e8e70440b7.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admin',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7.url = (options?: RouteQueryOptions) => {
    return RedirectController35f58437d9250c39f332f5e8e70440b7.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
const RedirectController35f58437d9250c39f332f5e8e70440b7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController35f58437d9250c39f332f5e8e70440b7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController35f58437d9250c39f332f5e8e70440b7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController35f58437d9250c39f332f5e8e70440b7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController35f58437d9250c39f332f5e8e70440b7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/admin'
*/
RedirectController35f58437d9250c39f332f5e8e70440b7Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController35f58437d9250c39f332f5e8e70440b7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController35f58437d9250c39f332f5e8e70440b7.form = RedirectController35f58437d9250c39f332f5e8e70440b7Form
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
const RedirectController4b87d2df7e3aa853f6720faea796e36c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'get',
})

RedirectController4b87d2df7e3aa853f6720faea796e36c.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/settings',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.url = (options?: RouteQueryOptions) => {
    return RedirectController4b87d2df7e3aa853f6720faea796e36c.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36c.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
const RedirectController4b87d2df7e3aa853f6720faea796e36cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/settings'
*/
RedirectController4b87d2df7e3aa853f6720faea796e36cForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController4b87d2df7e3aa853f6720faea796e36c.form = RedirectController4b87d2df7e3aa853f6720faea796e36cForm

/**
* Multiple routes resolve to \Illuminate\Routing\RedirectController::RedirectController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `RedirectController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const RedirectController = {
    '/setup': RedirectController2d4ca18360b2bcf78eaf4815fa03bc90,
    '/privacy': RedirectControllera2c058616aeb0c9393ca03a98bc05c02,
    '/terms': RedirectController619dc3a99425f668ea9cab64e6648cb4,
    '/cookies': RedirectControllera2054ddf4ed5c656396a4f4d9d64c843,
    '/admin': RedirectController35f58437d9250c39f332f5e8e70440b7,
    '/settings': RedirectController4b87d2df7e3aa853f6720faea796e36c,
}

export default RedirectController