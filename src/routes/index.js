//Layouts
import { LoginLayout } from '~/layouts';
// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Login from '~/pages/Login';
import SignIn from '~/pages/SignIn';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/login', component: Login, layout: LoginLayout },
    { path: '/signin', component: SignIn, layout: LoginLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
