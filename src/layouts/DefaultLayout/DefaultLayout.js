import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import Search from '~/layouts/components/Search';
import CenterLayout from '../CenterLayout';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header className={cx('header')} />

            <div className={cx('container')}>
                <Search className={cx('header')} />

                <CenterLayout className={cx('sidebar')}>{children}</CenterLayout>
            </div>

            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
