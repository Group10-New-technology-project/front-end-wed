import classNames from 'classnames/bind';
import styles from './ContactListGroup.module.scss';
import SidebarGroup from '~/layouts/components/SidebarGroup';
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                {/* Bắt đầu của sidebar */}
                <SidebarGroup />
                {/* Kết thúc của sidebar */}
            </div>
        </div>
    );
}

export default Contact;
