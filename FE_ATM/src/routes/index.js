import MainPage from '../components/pages/MainPage'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
const publicRoutes = [
    {path: '/mainpage', component: MainPage},
    {path: '/', component: Login},
    {path: '/register', component: Register},

]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}