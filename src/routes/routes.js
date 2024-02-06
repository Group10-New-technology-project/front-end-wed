//Layouts
import { LoginLayout } from '~/layouts';
// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Login from '~/pages/Login';
import SignIn from '~/pages/SignIn';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.login, component: Login, layout: LoginLayout },
    { path: config.routes.signIn, component: SignIn, layout: LoginLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
