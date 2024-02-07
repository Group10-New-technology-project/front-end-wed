import Request from '~/layouts/components/SidebarRequest/Request';
import RequestSent from './RequestSent';
import classNames from 'classnames/bind';
import styles from './SidebarRequest.module.scss';
const cx = classNames.bind(styles);
function SidebarRequest() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('request')}>
                    <h3>Lời mời kết bạn (3)</h3>
                    <div className={cx('info')}>
                        <Request />
                        <Request />
                        <Request />
                        <Request />
                        <Request />
                    </div>
                </div>

                <div className={cx('sent')}>
                    <h3>Đã gửi yêu cầu kết bạn (3)</h3>
                    <div className={cx('info')}>
                        <RequestSent />
                        <RequestSent />
                        <RequestSent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarRequest;
