import HomeController from './HomeController'
import BlogController from './BlogController'
import SoftwarePageController from './SoftwarePageController'
import BundlePageController from './BundlePageController'
import InstallerController from './InstallerController'
import AboutController from './AboutController'
import ServicesController from './ServicesController'
import ProductsController from './ProductsController'
import ContactController from './ContactController'
import PageController from './PageController'
import CatalogApiController from './CatalogApiController'
import SitemapController from './SitemapController'
import Admin from './Admin'
import Settings from './Settings'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    BlogController: Object.assign(BlogController, BlogController),
    SoftwarePageController: Object.assign(SoftwarePageController, SoftwarePageController),
    BundlePageController: Object.assign(BundlePageController, BundlePageController),
    InstallerController: Object.assign(InstallerController, InstallerController),
    AboutController: Object.assign(AboutController, AboutController),
    ServicesController: Object.assign(ServicesController, ServicesController),
    ProductsController: Object.assign(ProductsController, ProductsController),
    ContactController: Object.assign(ContactController, ContactController),
    PageController: Object.assign(PageController, PageController),
    CatalogApiController: Object.assign(CatalogApiController, CatalogApiController),
    SitemapController: Object.assign(SitemapController, SitemapController),
    Admin: Object.assign(Admin, Admin),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers