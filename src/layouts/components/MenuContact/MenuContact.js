import classNames from 'classnames/bind';
import styles from './MenuContact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faEnvelope, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
// import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);

function MenuContact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-contact')}>
                <Link to={config.routes.contactListFriend}>
                    <div className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faUserFriends} className={cx('icon')} />
                        <button>Danh sách bạn bè</button>
                    </div>
                </Link>

                <Link to={config.routes.contactListGroup}>
                    <div className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faPeopleGroup} className={cx('icon')} />
                        <button>Danh sách nhóm</button>
                    </div>
                </Link>

                <Link to={config.routes.contactRequest}>
                    <div className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                        <button>Lời mời kết bạn</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MenuContact;
