import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProductsController::__invoke
* @see app/Http/Controllers/ProductsController.php:11
* @route '/products'
*/
const ProductsController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ProductsController.url(options),
    method: 'get',
})

ProductsController.definition = {
    methods: ["get","head"],
    url: '/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductsController::__invoke
* @see app/Http/Controllers/ProductsController.php:11
* @route '/products'
*/
ProductsController.url = (options?: RouteQueryOptions) => {
    return ProductsController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductsController::__invoke
* @see app/Http/Controllers/ProductsController.php:11
* @route '/products'
*/
ProductsController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ProductsController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductsController::__invoke
* @see app/Http/Controllers/ProductsController.php:11
* @route '/products'
*/
ProductsController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ProductsController.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProductsController::__invoke
* @see app/Http/Controllers/ProductsController.php:11
* @route '/products'
*/
const ProductsControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProductsController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductsController::__invoke
* @see app/Http/Controllers/ProductsController.php:11
* @route '/products'
*/
ProductsControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProductsController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductsController::__invoke
* @see app/Http/Controllers/ProductsController.php:11
* @route '/products'
*/
ProductsControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ProductsController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ProductsController.form = ProductsControllerForm

export default ProductsController