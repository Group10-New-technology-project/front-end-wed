import classNames from 'classnames/bind';
import styles from './CenterLayout.module.scss';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';
import MenuContact from '../components/MenuContact';
const cx = classNames.bind(styles);
const components = {
    '/': Sidebar,
    '/profile': Search,
    '/contactListFriend': MenuContact,
    '/contactListGroup': MenuContact,
    '/contactRequest': MenuContact,
};

function CenterLayout({ children }) {
    const location = useLocation();
    const HeaderComponent = components[location.pathname] || Sidebar;

    return (
        <div className={cx('wrapper')}>
            <HeaderComponent />
        </div>
    );
}

export default CenterLayout;
