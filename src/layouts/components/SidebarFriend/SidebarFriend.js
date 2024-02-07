import classNames from 'classnames/bind';
// import styles from './ContactListFiend.module.scss';
import SearchContact from '~/layouts/components/SearchContact';
import Friend from '~/layouts/components/SidebarFriend/Friend';

// const cx = classNames.bind(styles);
function SidebarFriend() {
    return (
        <div>
            <h3>Bạn bè (211)</h3>
            <br />
            <div>
                <SearchContact /> <br />
                <Friend />
                <Friend />
                <Friend />
            </div>
        </div>
    );
}

export default SidebarFriend;
