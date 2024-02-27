import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faCloud, faGear, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <Image
                className={cx('user-avatar')}
                src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A"
                alt="Cao Trùng Dương"
            />

            <div className={cx('top')}>
                <button className={cx('icon-top')}>
                    <FontAwesomeIcon icon={faFacebookMessenger} size="2x" style={{ color: 'white' }} />
                </button>

                <button className={cx('icon-top')}>
                    <FontAwesomeIcon icon={faIdBadge} size="2x" style={{ color: 'white' }} />
                </button>

                <button className={cx('icon-top')}>
                    <FontAwesomeIcon icon={faSquareCheck} size="2x" style={{ color: 'white' }} />
                </button>
            </div>

            <div className={cx('bottom')}>
                <button className={cx('icon-bottom')}>
                    <FontAwesomeIcon icon={faCloud} size="2x" style={{ color: 'white' }} />
                </button>

                <button className={cx('icon-bottom')}>
                    <FontAwesomeIcon icon={faBriefcase} size="2x" style={{ color: 'white' }} />
                </button>

                <button className={cx('icon-bottom')}>
                    <FontAwesomeIcon icon={faGear} size="2x" style={{ color: 'white' }} />
                </button>
            </div>
        </header>
    );
}

export default Header;
