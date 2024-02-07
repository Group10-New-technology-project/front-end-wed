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
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/04f0d024d93a761067ebe578283a79c8.jpeg?lk3s=a5d48078&x-expires=1707116400&x-signature=PgcnqHL5ZAOxrV32xH60JpnQJ8A%3D"
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
