import DashboardController from './DashboardController'
import CategoryController from './CategoryController'
import SoftwareController from './SoftwareController'
import BlogController from './BlogController'
import BlogCategoryController from './BlogCategoryController'
import MediaController from './MediaController'
import PageController from './PageController'
import BundleController from './BundleController'
import UserController from './UserController'

const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    CategoryController: Object.assign(CategoryController, CategoryController),
    SoftwareController: Object.assign(SoftwareController, SoftwareController),
    BlogController: Object.assign(BlogController, BlogController),
    BlogCategoryController: Object.assign(BlogCategoryController, BlogCategoryController),
    MediaController: Object.assign(MediaController, MediaController),
    PageController: Object.assign(PageController, PageController),
    BundleController: Object.assign(BundleController, BundleController),
    UserController: Object.assign(UserController, UserController),
}

export default Admin