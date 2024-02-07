import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Message from '../Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <button className={cx('btn-all')}>Tất cả</button>
                <button className={cx('btn-readNo')}>Chưa đọc</button>
                <button className={cx('btn-more')}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </button>
            </div>

            <div className={cx('message')}>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />

                <Message />
                <Message />
                <Message />

                <Message />
                <Message />
                <Message />
            </div>
        </div>
    );
}

export default Sidebar;
