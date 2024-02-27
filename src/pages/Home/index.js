import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faCamera,
    faClock,
    faExclamation,
    faFaceSmile,
    faFont,
    faMagnifyingGlass,
    faPaperclip,
    faSquareCheck,
    faTableColumns,
    faUser,
    faUsers,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';

const cx = classNames.bind(styles);

const buttonsData = [
    { icon: faFaceSmile, content: 'Gửi Sticker' },
    { icon: faImage, content: 'Gửi hình ảnh' },
    { icon: faPaperclip, content: 'Đính kèm file' },
    { icon: faCamera, content: 'Chụp màn hình (Windows + Shift + S)' },
    { icon: faAddressCard, content: 'Gửi danh thiếp' },
    { icon: faClock, content: 'Tạo hẹn giờ' },
    { icon: faSquareCheck, content: 'Giao việc' },
    { icon: faFont, content: 'Đinh dạng tin nhắn (Ctrl + Shift + X)' },
    { icon: faExclamation, content: 'Tin nhắn ưu tiên' },
];

const buttonsData1 = [
    { icon: faUsers, content: 'Thêm bạn vào nhóm' },
    { icon: faMagnifyingGlass, content: 'Tìm kiếm tin nhắn' },
    { icon: faVideo, content: 'Cuộc gọi video' },
    { icon: faTableColumns, content: 'Thông tin hội thoại' },
];

function Home() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: {
                name: 'John',
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
            },
            content: 'Chiều rảnh không',
            timestamp: '10:30 AM',
        },
        {
            id: 2,
            sender: {
                name: 'John',
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
            },
            content: 'Đi đánh bida',
            timestamp: '10:30 AM',
        },
        {
            id: 3,
            sender: {
                name: 'Mary',
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
            },
            content: 'Oke',
            timestamp: '10:31 AM',
        },
        {
            id: 4,
            sender: {
                name: 'Mary',
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
            },
            content:
                'Đánh ở đâu, qua chở chứ tao không có xe,Đánh ở đâu, qua chở chứ tao không có xe,Đánh ở đâu, qua chở chứ tao không có xe,',
            timestamp: '10:31 AM',
        },
        {
            id: 5,
            sender: {
                name: 'Tony',
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
            },
            content: 'Oke',
            timestamp: '10:31 AM',
        },
        {
            id: 6,
            sender: {
                name: 'Tony',
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
            },
            content: 'Oke',
            timestamp: '10:31 AM',
        },
        {
            id: 7,
            sender: {
                name: 'Tony',
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
            },
            content: 'Oke',
            timestamp: '10:31 AM',
        },
        {
            id: 8,
            sender: {
                name: 'Tony',
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
            },
            content: 'Oke',
            timestamp: '10:31 AM',
        },
        {
            id: 9,
            sender: {
                name: 'Hany',
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
            },
            content: 'Oke',
            timestamp: '10:31 AM',
        },
        {
            id: 10,
            sender: {
                name: 'Hany',
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
            },
            content: 'Oke',
            timestamp: '10:31 AM',
        },
    ]);

    const thresholdMinutes = 1; // Ngưỡng thời gian giữa các tin nhắn
    let currentSender = null;
    let lastMessageTimestamp = null;

    const formatMessages = () => {
        let shouldDisplayAvatar = false;

        const formattedMessages = messages.map((message, index) => {
            shouldDisplayAvatar =
                message.sender.name !== currentSender ||
                !lastMessageTimestamp ||
                new Date(message.timestamp) - new Date(lastMessageTimestamp) > thresholdMinutes * 60 * 1000;

            currentSender = message.sender.name;
            lastMessageTimestamp = message.timestamp;

            return {
                ...message,
                shouldDisplayAvatar: shouldDisplayAvatar && message.sender.name !== 'John', // Hiển thị avatar cho người nhận
            };
        });

        return formattedMessages;
    };

    const formattedMessages = formatMessages();

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <div className={cx('header-left')}>
                    <img
                        src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A"
                        alt="Cao Trùng Dương"
                        className={cx('img-header')}
                    />
                    <div className={cx('content-header')}>
                        <h2 className={cx('content-top-h2')}>Nhóm 10 Công Nghệ Mới</h2>
                        <div className={cx('content-bottom')}>
                            <Tippy delay={[700, 0]} content="6 thành viên" placement="bottom" className={cx('tippy')}>
                                <div className={cx('nav1')}>
                                    <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                                    <h3 className={cx('content-bottom-h3')}>6 thành viên</h3>
                                </div>
                            </Tippy>
                            <div className={cx('divider')}></div>
                            <div className={cx('nav2')}>
                                <FontAwesomeIcon icon={faUser} className={cx('icon1')} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('header-right')}>
                    {buttonsData1.map((button, index) => (
                        <Tippy
                            key={index}
                            delay={[700, 0]}
                            content={button.content}
                            offset={[-70, 19]}
                            placement="bottom"
                            className={cx('tippy')}
                        >
                            <button className={cx('icon3')}>
                                <FontAwesomeIcon icon={button.icon}></FontAwesomeIcon>
                            </button>
                        </Tippy>
                    ))}
                </div>
            </div>

            <div className={cx('content')}>
                <div className={cx('chat-container')}>
                    <div className={cx('chat-messages')}>
                        {formattedMessages.map((message, index) => (
                            <div
                                key={message.id}
                                className={cx('message', {
                                    sender: message.sender.name === 'John',
                                    receiver: message.sender.name !== 'John',
                                    'align-right': message.sender.name !== 'John',
                                    'second-message-receiver': index === 1 && message.sender.name !== 'John',
                                })}
                            >
                                <div className={cx('message-header')}>
                                    {message.shouldDisplayAvatar && (
                                        <div className={cx('avatar')}>
                                            <img
                                                className={cx('img-content')}
                                                src={message.sender.avatar}
                                                alt={`Avatar of ${message.sender.name}`}
                                            />
                                        </div>
                                    )}
                                    {index === 0 && message.sender.name !== 'John' && (
                                        <div className={cx('sender-info')}>
                                            <span className={cx('sender-name')}>{message.sender.name}</span>
                                        </div>
                                    )}
                                    <div
                                        className={cx('message-content', {
                                            'long-message': message.content.length > 50,
                                            'no-avatar': !message.shouldDisplayAvatar,
                                        })}
                                        style={{
                                            backgroundColor: message.sender.name !== 'John' ? 'white' : 'lightblue',
                                            color: message.sender.name !== 'John' ? 'black' : 'black',
                                            padding: '10px',
                                            marginTop: '-20px',
                                            borderRadius: '10px',
                                            height: 'fit-content',
                                            width: 'fit-content',
                                            border: message.sender.name !== 'John' ? '1px solid blue' : 'white',
                                        }}
                                    >
                                        <p>{message.content}</p>
                                        <span
                                            className={cx('timestamp', {
                                                lastMessage: index === formattedMessages.length - 1,
                                            })}
                                        >
                                            {index === formattedMessages.length - 1 ? message.timestamp : ''}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cx('footer')}>
                <div className={cx('footer-icon')}>
                    {buttonsData.map((button, index) => (
                        <Tippy
                            key={index}
                            delay={[700, 0]}
                            content={button.content}
                            placement="bottom"
                            className={cx('tippy')}
                        >
                            <button className={cx('button')}>
                                <FontAwesomeIcon icon={button.icon}></FontAwesomeIcon>
                            </button>
                        </Tippy>
                    ))}
                </div>

                <div className={cx('footer-chat')}>
                    <input type="text" className={cx('input')} placeholder="Nhập @, tin nhắn mới"></input>
                </div>
            </div>
        </div>
    );
}

export default Home;
