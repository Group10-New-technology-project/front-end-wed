import classNames from 'classnames/bind';
import styles from './ContactListFiend.module.scss';
import SidebarFriend from '~/layouts/components/SidebarFriend';
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                {/* Bắt đầu của sidebar */}
                <SidebarFriend />
                {/* Kết thúc của sidebar */}
            </div>
        </div>
    );
}

export default Contact;
