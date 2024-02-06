import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import Image from '~/components/Image';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Message() {
    const [isClicked, setIsClicked] = useState(false);
    const [count, setCount] = useState(1);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setCount(count + 1);
    };

    useEffect(() => {}, [count]);
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('container')}
                onClick={handleClick}
                style={{ backgroundColor: isClicked ? 'gray' : 'transparent' }}
            >
                <Image
                    className={cx('user-avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/04f0d024d93a761067ebe578283a79c8.jpeg?lk3s=a5d48078&x-expires=1707116400&x-signature=PgcnqHL5ZAOxrV32xH60JpnQJ8A%3D"
                    alt="Cao Trùng Dương"
                />
                <div className={cx('info')}>
                    <h3 className={cx('info-item')}>
                        <span className={cx('name')}>Bùi Ngọc Tùng</span>
                        <span className={cx('time')}>5 giờ</span>
                    </h3>
                    <h3 className={cx('content')}>
                        Bạn:<span className={cx('message')}>Alo</span>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Message;
