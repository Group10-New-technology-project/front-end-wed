import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import React from 'react';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('image')}
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                alt="Sample"
            />
        </div>
    );
}

export default Header;
