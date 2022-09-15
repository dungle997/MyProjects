import MainPage from '../pages/MainPage'
import Login from '../pages/Login'
import Register from '../pages/Register'
const publicRoutes = [
    {path: '/mainpage', component: MainPage},
    {path: '/', component: Login},
    {path: '/register', component: Register},

]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}