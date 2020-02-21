//路由组件懒加载： es10---核心技术还是es6---import()函数
const Msite = ()=> import('../pages/Msite/Msite');
const CateList = ()=> import('../pages/CateList/CateList');
const WorthBuy = ()=> import('../pages/WorthBuy/WorthBuy');
const Cart = ()=> import('../pages/Cart/Cart');
const Profile = ()=> import('../pages/Profile/Profile');
const Search = ()=> import('../pages/Search/Search');

export default [
    {
        path: '/msite',
        component: Msite,
    },
    {
        path: '/cateList',
        component: CateList,
    },
    {
        path: '/topic',
        component: WorthBuy,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '',
        redirect: '/msite'
    }
]