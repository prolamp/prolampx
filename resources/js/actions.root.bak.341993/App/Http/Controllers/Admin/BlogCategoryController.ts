import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::index
* @see app/Http/Controllers/Admin/BlogCategoryController.php:16
* @route '/admin/blog-categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/blog-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::index
* @see app/Http/Controllers/Admin/BlogCategoryController.php:16
* @route '/admin/blog-categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::index
* @see app/Http/Controllers/Admin/BlogCategoryController.php:16
* @route '/admin/blog-categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::index
* @see app/Http/Controllers/Admin/BlogCategoryController.php:16
* @route '/admin/blog-categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::index
* @see app/Http/Controllers/Admin/BlogCategoryController.php:16
* @route '/admin/blog-categories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::index
* @see app/Http/Controllers/Admin/BlogCategoryController.php:16
* @route '/admin/blog-categories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::index
* @see app/Http/Controllers/Admin/BlogCategoryController.php:16
* @route '/admin/blog-categories'
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
* @see \App\Http\Controllers\Admin\BlogCategoryController::create
* @see app/Http/Controllers/Admin/BlogCategoryController.php:30
* @route '/admin/blog-categories/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/blog-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::create
* @see app/Http/Controllers/Admin/BlogCategoryController.php:30
* @route '/admin/blog-categories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::create
* @see app/Http/Controllers/Admin/BlogCategoryController.php:30
* @route '/admin/blog-categories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::create
* @see app/Http/Controllers/Admin/BlogCategoryController.php:30
* @route '/admin/blog-categories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::create
* @see app/Http/Controllers/Admin/BlogCategoryController.php:30
* @route '/admin/blog-categories/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::create
* @see app/Http/Controllers/Admin/BlogCategoryController.php:30
* @route '/admin/blog-categories/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::create
* @see app/Http/Controllers/Admin/BlogCategoryController.php:30
* @route '/admin/blog-categories/create'
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
* @see \App\Http\Controllers\Admin\BlogCategoryController::store
* @see app/Http/Controllers/Admin/BlogCategoryController.php:35
* @route '/admin/blog-categories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/blog-categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::store
* @see app/Http/Controllers/Admin/BlogCategoryController.php:35
* @route '/admin/blog-categories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::store
* @see app/Http/Controllers/Admin/BlogCategoryController.php:35
* @route '/admin/blog-categories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::store
* @see app/Http/Controllers/Admin/BlogCategoryController.php:35
* @route '/admin/blog-categories'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::store
* @see app/Http/Controllers/Admin/BlogCategoryController.php:35
* @route '/admin/blog-categories'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::show
* @see app/Http/Controllers/Admin/BlogCategoryController.php:42
* @route '/admin/blog-categories/{blogCategory}'
*/
export const show = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/blog-categories/{blogCategory}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::show
* @see app/Http/Controllers/Admin/BlogCategoryController.php:42
* @route '/admin/blog-categories/{blogCategory}'
*/
show.url = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blogCategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { blogCategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            blogCategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blogCategory: typeof args.blogCategory === 'object'
        ? args.blogCategory.id
        : args.blogCategory,
    }

    return show.definition.url
            .replace('{blogCategory}', parsedArgs.blogCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::show
* @see app/Http/Controllers/Admin/BlogCategoryController.php:42
* @route '/admin/blog-categories/{blogCategory}'
*/
show.get = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::show
* @see app/Http/Controllers/Admin/BlogCategoryController.php:42
* @route '/admin/blog-categories/{blogCategory}'
*/
show.head = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::show
* @see app/Http/Controllers/Admin/BlogCategoryController.php:42
* @route '/admin/blog-categories/{blogCategory}'
*/
const showForm = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::show
* @see app/Http/Controllers/Admin/BlogCategoryController.php:42
* @route '/admin/blog-categories/{blogCategory}'
*/
showForm.get = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::show
* @see app/Http/Controllers/Admin/BlogCategoryController.php:42
* @route '/admin/blog-categories/{blogCategory}'
*/
showForm.head = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\BlogCategoryController::edit
* @see app/Http/Controllers/Admin/BlogCategoryController.php:51
* @route '/admin/blog-categories/{blogCategory}/edit'
*/
export const edit = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/blog-categories/{blogCategory}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::edit
* @see app/Http/Controllers/Admin/BlogCategoryController.php:51
* @route '/admin/blog-categories/{blogCategory}/edit'
*/
edit.url = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blogCategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { blogCategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            blogCategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blogCategory: typeof args.blogCategory === 'object'
        ? args.blogCategory.id
        : args.blogCategory,
    }

    return edit.definition.url
            .replace('{blogCategory}', parsedArgs.blogCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::edit
* @see app/Http/Controllers/Admin/BlogCategoryController.php:51
* @route '/admin/blog-categories/{blogCategory}/edit'
*/
edit.get = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::edit
* @see app/Http/Controllers/Admin/BlogCategoryController.php:51
* @route '/admin/blog-categories/{blogCategory}/edit'
*/
edit.head = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::edit
* @see app/Http/Controllers/Admin/BlogCategoryController.php:51
* @route '/admin/blog-categories/{blogCategory}/edit'
*/
const editForm = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::edit
* @see app/Http/Controllers/Admin/BlogCategoryController.php:51
* @route '/admin/blog-categories/{blogCategory}/edit'
*/
editForm.get = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::edit
* @see app/Http/Controllers/Admin/BlogCategoryController.php:51
* @route '/admin/blog-categories/{blogCategory}/edit'
*/
editForm.head = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\BlogCategoryController::update
* @see app/Http/Controllers/Admin/BlogCategoryController.php:58
* @route '/admin/blog-categories/{blogCategory}'
*/
export const update = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/blog-categories/{blogCategory}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::update
* @see app/Http/Controllers/Admin/BlogCategoryController.php:58
* @route '/admin/blog-categories/{blogCategory}'
*/
update.url = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blogCategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { blogCategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            blogCategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blogCategory: typeof args.blogCategory === 'object'
        ? args.blogCategory.id
        : args.blogCategory,
    }

    return update.definition.url
            .replace('{blogCategory}', parsedArgs.blogCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::update
* @see app/Http/Controllers/Admin/BlogCategoryController.php:58
* @route '/admin/blog-categories/{blogCategory}'
*/
update.put = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::update
* @see app/Http/Controllers/Admin/BlogCategoryController.php:58
* @route '/admin/blog-categories/{blogCategory}'
*/
const updateForm = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::update
* @see app/Http/Controllers/Admin/BlogCategoryController.php:58
* @route '/admin/blog-categories/{blogCategory}'
*/
updateForm.put = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\BlogCategoryController::destroy
* @see app/Http/Controllers/Admin/BlogCategoryController.php:65
* @route '/admin/blog-categories/{blogCategory}'
*/
export const destroy = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/blog-categories/{blogCategory}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::destroy
* @see app/Http/Controllers/Admin/BlogCategoryController.php:65
* @route '/admin/blog-categories/{blogCategory}'
*/
destroy.url = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blogCategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { blogCategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            blogCategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blogCategory: typeof args.blogCategory === 'object'
        ? args.blogCategory.id
        : args.blogCategory,
    }

    return destroy.definition.url
            .replace('{blogCategory}', parsedArgs.blogCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::destroy
* @see app/Http/Controllers/Admin/BlogCategoryController.php:65
* @route '/admin/blog-categories/{blogCategory}'
*/
destroy.delete = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::destroy
* @see app/Http/Controllers/Admin/BlogCategoryController.php:65
* @route '/admin/blog-categories/{blogCategory}'
*/
const destroyForm = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::destroy
* @see app/Http/Controllers/Admin/BlogCategoryController.php:65
* @route '/admin/blog-categories/{blogCategory}'
*/
destroyForm.delete = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\BlogCategoryController::toggleActive
* @see app/Http/Controllers/Admin/BlogCategoryController.php:72
* @route '/admin/blog-categories/{blogCategory}/toggle-active'
*/
export const toggleActive = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

toggleActive.definition = {
    methods: ["patch"],
    url: '/admin/blog-categories/{blogCategory}/toggle-active',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::toggleActive
* @see app/Http/Controllers/Admin/BlogCategoryController.php:72
* @route '/admin/blog-categories/{blogCategory}/toggle-active'
*/
toggleActive.url = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blogCategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { blogCategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            blogCategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blogCategory: typeof args.blogCategory === 'object'
        ? args.blogCategory.id
        : args.blogCategory,
    }

    return toggleActive.definition.url
            .replace('{blogCategory}', parsedArgs.blogCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::toggleActive
* @see app/Http/Controllers/Admin/BlogCategoryController.php:72
* @route '/admin/blog-categories/{blogCategory}/toggle-active'
*/
toggleActive.patch = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::toggleActive
* @see app/Http/Controllers/Admin/BlogCategoryController.php:72
* @route '/admin/blog-categories/{blogCategory}/toggle-active'
*/
const toggleActiveForm = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BlogCategoryController::toggleActive
* @see app/Http/Controllers/Admin/BlogCategoryController.php:72
* @route '/admin/blog-categories/{blogCategory}/toggle-active'
*/
toggleActiveForm.patch = (args: { blogCategory: number | { id: number } } | [blogCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleActive.form = toggleActiveForm

const BlogCategoryController = { index, create, store, show, edit, update, destroy, toggleActive }

export default BlogCategoryController