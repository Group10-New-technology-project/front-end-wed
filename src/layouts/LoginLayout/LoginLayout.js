import classNames from 'classnames/bind';
import styles from './LoginLayout.module.scss';

import Header from './Header';
import './LoginLayout.module.scss';

const cx = classNames.bind(styles);

function LoginLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default LoginLayout;
