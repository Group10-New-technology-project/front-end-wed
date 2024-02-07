//Layouts
import { LoginLayout } from '~/layouts';
// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Login from '~/pages/Login';
import SignIn from '~/pages/SignIn';
import config from '~/config';
import OtpSignIn from '~/pages/OtpSignIn';
import ForgotPassword from '~/pages/ForgotPassword';
import OtpForgotPassword from '~/pages/OtpForgotPassword';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.login, component: Login, layout: LoginLayout },
    { path: config.routes.signIn, component: SignIn, layout: LoginLayout },
    { path: config.routes.otpSignIn, component: OtpSignIn, layout: LoginLayout },
    { path: config.routes.forgotPassword, component: ForgotPassword, layout: LoginLayout },
    { path: config.routes.otpForgotPassword, component: OtpForgotPassword, layout: LoginLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
