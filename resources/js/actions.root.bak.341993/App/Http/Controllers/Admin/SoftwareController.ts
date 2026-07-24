import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SoftwareController::index
* @see app/Http/Controllers/Admin/SoftwareController.php:17
* @route '/admin/software'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/software',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SoftwareController::index
* @see app/Http/Controllers/Admin/SoftwareController.php:17
* @route '/admin/software'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SoftwareController::index
* @see app/Http/Controllers/Admin/SoftwareController.php:17
* @route '/admin/software'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::index
* @see app/Http/Controllers/Admin/SoftwareController.php:17
* @route '/admin/software'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::index
* @see app/Http/Controllers/Admin/SoftwareController.php:17
* @route '/admin/software'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::index
* @see app/Http/Controllers/Admin/SoftwareController.php:17
* @route '/admin/software'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::index
* @see app/Http/Controllers/Admin/SoftwareController.php:17
* @route '/admin/software'
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
* @see \App\Http\Controllers\Admin\SoftwareController::create
* @see app/Http/Controllers/Admin/SoftwareController.php:33
* @route '/admin/software/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/software/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SoftwareController::create
* @see app/Http/Controllers/Admin/SoftwareController.php:33
* @route '/admin/software/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SoftwareController::create
* @see app/Http/Controllers/Admin/SoftwareController.php:33
* @route '/admin/software/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::create
* @see app/Http/Controllers/Admin/SoftwareController.php:33
* @route '/admin/software/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::create
* @see app/Http/Controllers/Admin/SoftwareController.php:33
* @route '/admin/software/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::create
* @see app/Http/Controllers/Admin/SoftwareController.php:33
* @route '/admin/software/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::create
* @see app/Http/Controllers/Admin/SoftwareController.php:33
* @route '/admin/software/create'
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
* @see \App\Http\Controllers\Admin\SoftwareController::store
* @see app/Http/Controllers/Admin/SoftwareController.php:40
* @route '/admin/software'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/software',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SoftwareController::store
* @see app/Http/Controllers/Admin/SoftwareController.php:40
* @route '/admin/software'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SoftwareController::store
* @see app/Http/Controllers/Admin/SoftwareController.php:40
* @route '/admin/software'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::store
* @see app/Http/Controllers/Admin/SoftwareController.php:40
* @route '/admin/software'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::store
* @see app/Http/Controllers/Admin/SoftwareController.php:40
* @route '/admin/software'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\SoftwareController::show
* @see app/Http/Controllers/Admin/SoftwareController.php:49
* @route '/admin/software/{software}'
*/
export const show = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/software/{software}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SoftwareController::show
* @see app/Http/Controllers/Admin/SoftwareController.php:49
* @route '/admin/software/{software}'
*/
show.url = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { software: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { software: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            software: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        software: typeof args.software === 'object'
        ? args.software.id
        : args.software,
    }

    return show.definition.url
            .replace('{software}', parsedArgs.software.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SoftwareController::show
* @see app/Http/Controllers/Admin/SoftwareController.php:49
* @route '/admin/software/{software}'
*/
show.get = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::show
* @see app/Http/Controllers/Admin/SoftwareController.php:49
* @route '/admin/software/{software}'
*/
show.head = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::show
* @see app/Http/Controllers/Admin/SoftwareController.php:49
* @route '/admin/software/{software}'
*/
const showForm = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::show
* @see app/Http/Controllers/Admin/SoftwareController.php:49
* @route '/admin/software/{software}'
*/
showForm.get = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::show
* @see app/Http/Controllers/Admin/SoftwareController.php:49
* @route '/admin/software/{software}'
*/
showForm.head = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\SoftwareController::edit
* @see app/Http/Controllers/Admin/SoftwareController.php:58
* @route '/admin/software/{software}/edit'
*/
export const edit = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/software/{software}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SoftwareController::edit
* @see app/Http/Controllers/Admin/SoftwareController.php:58
* @route '/admin/software/{software}/edit'
*/
edit.url = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { software: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { software: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            software: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        software: typeof args.software === 'object'
        ? args.software.id
        : args.software,
    }

    return edit.definition.url
            .replace('{software}', parsedArgs.software.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SoftwareController::edit
* @see app/Http/Controllers/Admin/SoftwareController.php:58
* @route '/admin/software/{software}/edit'
*/
edit.get = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::edit
* @see app/Http/Controllers/Admin/SoftwareController.php:58
* @route '/admin/software/{software}/edit'
*/
edit.head = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::edit
* @see app/Http/Controllers/Admin/SoftwareController.php:58
* @route '/admin/software/{software}/edit'
*/
const editForm = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::edit
* @see app/Http/Controllers/Admin/SoftwareController.php:58
* @route '/admin/software/{software}/edit'
*/
editForm.get = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::edit
* @see app/Http/Controllers/Admin/SoftwareController.php:58
* @route '/admin/software/{software}/edit'
*/
editForm.head = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\SoftwareController::update
* @see app/Http/Controllers/Admin/SoftwareController.php:68
* @route '/admin/software/{software}'
*/
export const update = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/software/{software}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\SoftwareController::update
* @see app/Http/Controllers/Admin/SoftwareController.php:68
* @route '/admin/software/{software}'
*/
update.url = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { software: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { software: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            software: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        software: typeof args.software === 'object'
        ? args.software.id
        : args.software,
    }

    return update.definition.url
            .replace('{software}', parsedArgs.software.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SoftwareController::update
* @see app/Http/Controllers/Admin/SoftwareController.php:68
* @route '/admin/software/{software}'
*/
update.put = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::update
* @see app/Http/Controllers/Admin/SoftwareController.php:68
* @route '/admin/software/{software}'
*/
const updateForm = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::update
* @see app/Http/Controllers/Admin/SoftwareController.php:68
* @route '/admin/software/{software}'
*/
updateForm.put = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\SoftwareController::destroy
* @see app/Http/Controllers/Admin/SoftwareController.php:77
* @route '/admin/software/{software}'
*/
export const destroy = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/software/{software}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\SoftwareController::destroy
* @see app/Http/Controllers/Admin/SoftwareController.php:77
* @route '/admin/software/{software}'
*/
destroy.url = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { software: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { software: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            software: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        software: typeof args.software === 'object'
        ? args.software.id
        : args.software,
    }

    return destroy.definition.url
            .replace('{software}', parsedArgs.software.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SoftwareController::destroy
* @see app/Http/Controllers/Admin/SoftwareController.php:77
* @route '/admin/software/{software}'
*/
destroy.delete = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::destroy
* @see app/Http/Controllers/Admin/SoftwareController.php:77
* @route '/admin/software/{software}'
*/
const destroyForm = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::destroy
* @see app/Http/Controllers/Admin/SoftwareController.php:77
* @route '/admin/software/{software}'
*/
destroyForm.delete = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\SoftwareController::toggleActive
* @see app/Http/Controllers/Admin/SoftwareController.php:84
* @route '/admin/software/{software}/toggle-active'
*/
export const toggleActive = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

toggleActive.definition = {
    methods: ["patch"],
    url: '/admin/software/{software}/toggle-active',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Admin\SoftwareController::toggleActive
* @see app/Http/Controllers/Admin/SoftwareController.php:84
* @route '/admin/software/{software}/toggle-active'
*/
toggleActive.url = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { software: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { software: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            software: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        software: typeof args.software === 'object'
        ? args.software.id
        : args.software,
    }

    return toggleActive.definition.url
            .replace('{software}', parsedArgs.software.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SoftwareController::toggleActive
* @see app/Http/Controllers/Admin/SoftwareController.php:84
* @route '/admin/software/{software}/toggle-active'
*/
toggleActive.patch = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::toggleActive
* @see app/Http/Controllers/Admin/SoftwareController.php:84
* @route '/admin/software/{software}/toggle-active'
*/
const toggleActiveForm = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SoftwareController::toggleActive
* @see app/Http/Controllers/Admin/SoftwareController.php:84
* @route '/admin/software/{software}/toggle-active'
*/
toggleActiveForm.patch = (args: { software: number | { id: number } } | [software: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleActive.form = toggleActiveForm

const SoftwareController = { index, create, store, show, edit, update, destroy, toggleActive }

export default SoftwareController