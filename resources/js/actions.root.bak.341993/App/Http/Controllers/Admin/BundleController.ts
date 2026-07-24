import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BundleController::index
* @see app/Http/Controllers/Admin/BundleController.php:18
* @route '/admin/bundles'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/bundles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BundleController::index
* @see app/Http/Controllers/Admin/BundleController.php:18
* @route '/admin/bundles'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BundleController::index
* @see app/Http/Controllers/Admin/BundleController.php:18
* @route '/admin/bundles'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::index
* @see app/Http/Controllers/Admin/BundleController.php:18
* @route '/admin/bundles'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::index
* @see app/Http/Controllers/Admin/BundleController.php:18
* @route '/admin/bundles'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::index
* @see app/Http/Controllers/Admin/BundleController.php:18
* @route '/admin/bundles'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::index
* @see app/Http/Controllers/Admin/BundleController.php:18
* @route '/admin/bundles'
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
* @see \App\Http\Controllers\Admin\BundleController::create
* @see app/Http/Controllers/Admin/BundleController.php:32
* @route '/admin/bundles/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/bundles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BundleController::create
* @see app/Http/Controllers/Admin/BundleController.php:32
* @route '/admin/bundles/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BundleController::create
* @see app/Http/Controllers/Admin/BundleController.php:32
* @route '/admin/bundles/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::create
* @see app/Http/Controllers/Admin/BundleController.php:32
* @route '/admin/bundles/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::create
* @see app/Http/Controllers/Admin/BundleController.php:32
* @route '/admin/bundles/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::create
* @see app/Http/Controllers/Admin/BundleController.php:32
* @route '/admin/bundles/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::create
* @see app/Http/Controllers/Admin/BundleController.php:32
* @route '/admin/bundles/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Admin\BundleController::store
* @see app/Http/Controllers/Admin/BundleController.php:39
* @route '/admin/bundles'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/bundles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BundleController::store
* @see app/Http/Controllers/Admin/BundleController.php:39
* @route '/admin/bundles'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BundleController::store
* @see app/Http/Controllers/Admin/BundleController.php:39
* @route '/admin/bundles'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::store
* @see app/Http/Controllers/Admin/BundleController.php:39
* @route '/admin/bundles'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::store
* @see app/Http/Controllers/Admin/BundleController.php:39
* @route '/admin/bundles'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\BundleController::show
* @see app/Http/Controllers/Admin/BundleController.php:49
* @route '/admin/bundles/{bundle}'
*/
export const show = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/bundles/{bundle}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BundleController::show
* @see app/Http/Controllers/Admin/BundleController.php:49
* @route '/admin/bundles/{bundle}'
*/
show.url = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bundle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { bundle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            bundle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        bundle: typeof args.bundle === 'object'
        ? args.bundle.id
        : args.bundle,
    }

    return show.definition.url
            .replace('{bundle}', parsedArgs.bundle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BundleController::show
* @see app/Http/Controllers/Admin/BundleController.php:49
* @route '/admin/bundles/{bundle}'
*/
show.get = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::show
* @see app/Http/Controllers/Admin/BundleController.php:49
* @route '/admin/bundles/{bundle}'
*/
show.head = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::show
* @see app/Http/Controllers/Admin/BundleController.php:49
* @route '/admin/bundles/{bundle}'
*/
const showForm = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::show
* @see app/Http/Controllers/Admin/BundleController.php:49
* @route '/admin/bundles/{bundle}'
*/
showForm.get = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::show
* @see app/Http/Controllers/Admin/BundleController.php:49
* @route '/admin/bundles/{bundle}'
*/
showForm.head = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Admin\BundleController::edit
* @see app/Http/Controllers/Admin/BundleController.php:58
* @route '/admin/bundles/{bundle}/edit'
*/
export const edit = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/bundles/{bundle}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BundleController::edit
* @see app/Http/Controllers/Admin/BundleController.php:58
* @route '/admin/bundles/{bundle}/edit'
*/
edit.url = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bundle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { bundle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            bundle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        bundle: typeof args.bundle === 'object'
        ? args.bundle.id
        : args.bundle,
    }

    return edit.definition.url
            .replace('{bundle}', parsedArgs.bundle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BundleController::edit
* @see app/Http/Controllers/Admin/BundleController.php:58
* @route '/admin/bundles/{bundle}/edit'
*/
edit.get = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::edit
* @see app/Http/Controllers/Admin/BundleController.php:58
* @route '/admin/bundles/{bundle}/edit'
*/
edit.head = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::edit
* @see app/Http/Controllers/Admin/BundleController.php:58
* @route '/admin/bundles/{bundle}/edit'
*/
const editForm = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::edit
* @see app/Http/Controllers/Admin/BundleController.php:58
* @route '/admin/bundles/{bundle}/edit'
*/
editForm.get = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::edit
* @see app/Http/Controllers/Admin/BundleController.php:58
* @route '/admin/bundles/{bundle}/edit'
*/
editForm.head = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Admin\BundleController::update
* @see app/Http/Controllers/Admin/BundleController.php:68
* @route '/admin/bundles/{bundle}'
*/
export const update = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/bundles/{bundle}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\BundleController::update
* @see app/Http/Controllers/Admin/BundleController.php:68
* @route '/admin/bundles/{bundle}'
*/
update.url = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bundle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { bundle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            bundle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        bundle: typeof args.bundle === 'object'
        ? args.bundle.id
        : args.bundle,
    }

    return update.definition.url
            .replace('{bundle}', parsedArgs.bundle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BundleController::update
* @see app/Http/Controllers/Admin/BundleController.php:68
* @route '/admin/bundles/{bundle}'
*/
update.put = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::update
* @see app/Http/Controllers/Admin/BundleController.php:68
* @route '/admin/bundles/{bundle}'
*/
const updateForm = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::update
* @see app/Http/Controllers/Admin/BundleController.php:68
* @route '/admin/bundles/{bundle}'
*/
updateForm.put = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\BundleController::destroy
* @see app/Http/Controllers/Admin/BundleController.php:78
* @route '/admin/bundles/{bundle}'
*/
export const destroy = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/bundles/{bundle}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\BundleController::destroy
* @see app/Http/Controllers/Admin/BundleController.php:78
* @route '/admin/bundles/{bundle}'
*/
destroy.url = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bundle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { bundle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            bundle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        bundle: typeof args.bundle === 'object'
        ? args.bundle.id
        : args.bundle,
    }

    return destroy.definition.url
            .replace('{bundle}', parsedArgs.bundle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BundleController::destroy
* @see app/Http/Controllers/Admin/BundleController.php:78
* @route '/admin/bundles/{bundle}'
*/
destroy.delete = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::destroy
* @see app/Http/Controllers/Admin/BundleController.php:78
* @route '/admin/bundles/{bundle}'
*/
const destroyForm = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::destroy
* @see app/Http/Controllers/Admin/BundleController.php:78
* @route '/admin/bundles/{bundle}'
*/
destroyForm.delete = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Admin\BundleController::toggleActive
* @see app/Http/Controllers/Admin/BundleController.php:86
* @route '/admin/bundles/{bundle}/toggle-active'
*/
export const toggleActive = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

toggleActive.definition = {
    methods: ["patch"],
    url: '/admin/bundles/{bundle}/toggle-active',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Admin\BundleController::toggleActive
* @see app/Http/Controllers/Admin/BundleController.php:86
* @route '/admin/bundles/{bundle}/toggle-active'
*/
toggleActive.url = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bundle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { bundle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            bundle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        bundle: typeof args.bundle === 'object'
        ? args.bundle.id
        : args.bundle,
    }

    return toggleActive.definition.url
            .replace('{bundle}', parsedArgs.bundle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BundleController::toggleActive
* @see app/Http/Controllers/Admin/BundleController.php:86
* @route '/admin/bundles/{bundle}/toggle-active'
*/
toggleActive.patch = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::toggleActive
* @see app/Http/Controllers/Admin/BundleController.php:86
* @route '/admin/bundles/{bundle}/toggle-active'
*/
const toggleActiveForm = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BundleController::toggleActive
* @see app/Http/Controllers/Admin/BundleController.php:86
* @route '/admin/bundles/{bundle}/toggle-active'
*/
toggleActiveForm.patch = (args: { bundle: number | { id: number } } | [bundle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleActive.form = toggleActiveForm

const BundleController = { index, create, store, show, edit, update, destroy, toggleActive }

export default BundleController