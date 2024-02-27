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
                    src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A"
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
