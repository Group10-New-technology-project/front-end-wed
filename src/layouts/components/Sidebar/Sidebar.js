import classNames from 'classnames/bind';
import 'react-chat-elements/dist/main.css';
import { ChatItem } from 'react-chat-elements';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Sidebar() {
    const messages = [
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Bùi Ngọc Tùng',
            subtitle: 'Đi chơi không fhff hffhfh fhfhffh fhfhffh aaaa?',
            date: new Date(),
            unread: 22,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Phan Nguyễn Trung Chánh',
            subtitle: 'Alo',
            date: new Date(),
            unread: 3,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Nguyễn Nhất An',
            subtitle: 'Đang làm gì đó đi chơi?',
            date: new Date(),
            unread: 1,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Bùi Ngọc Tùng',
            subtitle: 'Đi chơi không?',
            date: new Date(),
            unread: 7,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Phan Nguyễn Trung Chánh',
            subtitle: 'Alo',
            date: new Date(),
            unread: 0,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Nguyễn Nhất An',
            subtitle: 'Đang làm gì đó?',
            date: new Date(),
            unread: 1,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Bùi Ngọc Tùng',
            subtitle: 'Đi chơi không?',
            date: new Date(),
            unread: 0,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Phan Nguyễn Trung Chánh',
            subtitle: 'Alo',
            date: new Date(),
            unread: 3,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Nguyễn Nhất An',
            subtitle: 'Đang làm gì đó?',
            date: new Date(),
            unread: 1,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Bùi Ngọc Tùng',
            subtitle: 'Đi chơi không?',
            date: new Date(),
            unread: 7,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Phan Nguyễn Trung Chánh',
            subtitle: 'Alo',
            date: new Date(),
            unread: 3,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Nguyễn Nhất An',
            subtitle: 'Đang làm gì đó?',
            date: new Date(),
            unread: 1,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Bùi Ngọc Tùng',
            subtitle: 'Đi chơi không?',
            date: new Date(),
            unread: 7,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Phan Nguyễn Trung Chánh',
            subtitle: 'Alo',
            date: new Date(),
            unread: 3,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Nguyễn Nhất An',
            subtitle: 'Đang làm gì đó?',
            date: new Date(),
            unread: 1,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Bùi Ngọc Tùng',
            subtitle: 'Đi chơi không?',
            date: new Date(),
            unread: 7,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Phan Nguyễn Trung Chánh',
            subtitle: 'Alo',
            date: new Date(),
            unread: 3,
        },
        {
            avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            alt: 'Reactjs',
            title: 'Nguyễn Nhất An',
            subtitle: 'Đang làm gì đó?',
            date: new Date(),
            unread: 1,
        },
    ];

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
                {messages.map((message, index) => (
                    <ChatItem
                        className={cx('message-item')}
                        key={index}
                        avatar={message.avatar}
                        alt={message.alt}
                        title={<div className={cx('title')}>{message.title}</div>}
                        subtitle={
                            <div className={cx('sub')}>
                                <div className={cx('sub-title')}>
                                    <div className={cx('sub-title1')}>
                                        {message.title}
                                        <span style={{ marginRight: '3px' }}>:</span>
                                    </div>
                                    <div className={cx('subtitle')}>{message.subtitle}</div>
                                </div>
                                <div className={cx('unread', { hidden: message.unread === 0 })}>{message.unread}</div>
                            </div>
                        }
                        date={message.date}
                        unread={message.unread}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
