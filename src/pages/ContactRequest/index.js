import classNames from 'classnames/bind';
import styles from './ContactRequest.module.scss';
import SidebarRequest from '~/layouts/components/SidebarRequest';
const cx = classNames.bind(styles);

function ContactRequest() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <SidebarRequest />
            </div>
        </div>
    );
}

export default ContactRequest;
