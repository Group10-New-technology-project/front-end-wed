import classNames from 'classnames/bind';
import styles from './Friend.module.scss';
import Image from '~/components/Image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Friend() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <Image
                        className={cx('user-avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/8076eece19f81787001fc9eccdc1931d~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1707465600&x-signature=xAgWAi9yLxu6j3YzDOdl9HaxtWw%3D"
                        alt="Cao Trùng Dương"
                    />
                    <h3 className={cx('info-item')}>
                        <span className={cx('name')}>Bùi Ngọc Tùng</span>
                    </h3>
                </div>

                <button className={cx('btn-more')}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </button>
            </div>
        </div>
    );
}

export default Friend;
