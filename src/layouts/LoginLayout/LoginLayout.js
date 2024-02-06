import Header from '../LoginLayout/Header';
import './LoginLayout.scss';
function LoginLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default LoginLayout;
