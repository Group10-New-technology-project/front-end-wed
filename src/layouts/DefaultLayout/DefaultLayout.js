import Header from '../components/Header';
import Search from '~/layouts/components/Search';
import CenterLayout from '../CenterLayout';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
