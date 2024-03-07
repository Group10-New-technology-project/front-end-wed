import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faBell,
    faCamera,
    faCaretDown,
    faClock,
    faExclamation,
    faFaceSmile,
    faFont,
    faGear,
    faLink,
    faMagnifyingGlass,
    faPaperclip,
    faPencil,
    faShare,
    faSquareCheck,
    faTableColumns,
    faThumbTack,
    faThumbsUp,
    faUser,
    faUsers,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { faCopy, faImage, faMessage, faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import { MessageBox } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import { faAmilia } from '@fortawesome/free-brands-svg-icons';

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

const images = [
    {
        src: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
        alt: 'Cao Trùng Dương',
    },
    {
        src: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
        alt: 'Cao Trùng Dương',
    },
    {
        src: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
        alt: 'Cao Trùng Dương',
    },
    {
        src: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
        alt: 'Cao Trùng Dương',
    },
    {
        src: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
        alt: 'Cao Trùng Dương',
    },
    {
        src: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
        alt: 'Cao Trùng Dương',
    },
    {
        src: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
        alt: 'Cao Trùng Dương',
    },
    {
        src: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A',
        alt: 'Cao Trùng Dương',
    },
];
function Home() {
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [ws, setWs] = useState(null);

    const [openTitles, setOpenTitles] = useState({
        1: true,
        2: true,
        3: true,
        4: true,
    });

    const toggleTitle = (titleIndex) => {
        setOpenTitles((prevOpenTitles) => ({
            ...prevOpenTitles,
            [titleIndex]: !prevOpenTitles[titleIndex],
        }));
    };

    const getTitleHeight = (titleIndex) => {
        return openTitles[titleIndex] ? 'auto' : '40px';
    };

    //Đóng mở thông tin hội thoại

    const [infoVisible, setInfoVisible] = useState(false);
    useEffect(() => {
        document.documentElement.style.setProperty(
            '--container-width',
            infoVisible ? 'var(--min-width-home)' : 'var(--max-width-home)',
        );
        document.documentElement.style.setProperty(
            '--header-width',
            infoVisible ? 'var(--min-width-home)' : 'var(--max-width-home)',
        );
    }, [infoVisible]);

    const toggleInfoVisibility = () => {
        setInfoVisible((prevInfoVisible) => !prevInfoVisible);
    };

    // const [visibleImages, setVisibleImages] = useState(8);
    // const showMoreImages = () => {
    //     // Hiển thị thêm 8 ảnh khi bấm vào "Xem thêm"
    //     setVisibleImages((prev) => prev + 8);
    // };

    useEffect(() => {
        const newWs = new WebSocket('ws://localhost:8080/chat');
        console.log('Connecting to WebSocket server');

        newWs.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        setWs(newWs);

        return () => {
            newWs.close();
        };
    }, []);

    // Hàm gửi tin nhắn
    const sendMessageToServer = () => {
        if (!ws) {
            console.log('WebSocket connection not established');
            return;
        }

        console.log('Sending message');
        if (newMessage.trim() !== '') {
            const newMessageObj = {
                position: 'right', // Đổi thành 'left' nếu tin nhắn từ người khác
                type: 'text',
                text: newMessage,
                date: new Date(),
                avatar: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/357450221_3669947993328510_7894582681288080827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cKjhz97kpaUAX-Y7AtH&_nc_oc=AQkaUVQEykDQ9U-pBzSdc6xsGKB1e_JVHBYmhbRwambGmtItoYo6HEqxu_TmjY07PzpOTObMIUyxJP8Gu3kYrAzl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDLRBO9CaDYFgZbIymxH-5cVD1leN9GVHF3Y5P4flB3Wg&oe=65E3FF63',
            };

            // Cập nhật tin nhắn mới vào mảng
            setMessages([...messages, newMessageObj]);

            // Xóa nội dung tin nhắn mới
            setNewMessage('');
            ws.send(JSON.stringify(newMessageObj)); // Gửi tin nhắn tới server
        }
    };

    // Hàm nhận tin nhắn
    useEffect(() => {
        if (!ws) return;

        ws.onmessage = (e) => {
            console.log('Received message', e.data);
            const newMessage = JSON.parse(e.data);
            // Thay đổi position thành 'left' để hiển thị tin nhắn nhận được bên trái
            newMessage.position = 'left';
            setMessages((previousMessages) => [...previousMessages, newMessage]);
        };

        return () => {
            ws.onmessage = null;
        };
    }, [ws]);

    return (
        <div className={cx('body')}>
            <div className={cx('container')} style={{ width: 'var(--container-width)' }}>
                <div className={cx('header')} style={{ width: 'var(--header-width)' }}>
                    <div className={cx('header-left')}>
                        <img
                            src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A"
                            alt="Cao Trùng Dương"
                            className={cx('img-header')}
                        />
                        <div className={cx('content-header')}>
                            <h2 className={cx('content-top-h2')}>Nhóm 10 Công Nghệ Mới</h2>
                            <div className={cx('content-bottom')}>
                                <Tippy
                                    delay={[700, 0]}
                                    content="6 thành viên"
                                    placement="bottom"
                                    className={cx('tippy')}
                                >
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
                                <button
                                    className={cx('icon3')}
                                    onClick={() => {
                                        if (button.icon === faTableColumns) {
                                            toggleInfoVisibility();
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={button.icon}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        ))}
                    </div>
                </div>

                <div className={cx('content')}>
                    {messages.map((message, index) => (
                        <div key={index} className={cx('message-container', message.position)}>
                            {message.position === 'left'}
                            <MessageBox key={index} {...message} />
                            {message.position === 'right'}
                        </div>
                    ))}
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
                        <input
                            type="text"
                            className={cx('input')}
                            placeholder="Nhập @, tin nhắn mới"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <div className={cx('footer-chat-icon')}>
                            <button>
                                <FontAwesomeIcon icon={faThumbsUp} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faFaceSmile} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faAmilia} />
                            </button>
                            <button onClick={sendMessageToServer} className={cx('btn-send')}>
                                GỬI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {infoVisible && (
                <div className={cx('info')}>
                    <div className={cx('header')}>
                        <h2 className={cx('h2-header')}>Thông tin nhóm</h2>
                    </div>

                    <div className={cx('control')}>
                        <div className={cx('nav')}>
                            <div className={cx('nav-top')}>
                                <div className={cx('img')}>
                                    <img
                                        src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A"
                                        alt="Cao Trùng Dương"
                                        className={cx('img-nav')}
                                    />
                                </div>
                                <div className={cx('nav-top-footer')}>
                                    <h2 className={cx('h2-nav')}>Nhóm 10 Công nghệ mới</h2>
                                    <button className={cx('nav-top-button')}>
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>
                                </div>
                            </div>

                            <div className={cx('nav-footer')}>
                                <div className={cx('nav-footer-nav')}>
                                    <button>
                                        <FontAwesomeIcon icon={faBell} />
                                    </button>
                                    <h4>Bật thông báo</h4>
                                </div>
                                <div className={cx('nav-footer-nav')}>
                                    <button>
                                        <FontAwesomeIcon icon={faThumbTack} />
                                    </button>
                                    <h4>Ghim hội thoại</h4>
                                </div>
                                <div className={cx('nav-footer-nav')}>
                                    <button>
                                        <FontAwesomeIcon icon={faUsers} />
                                    </button>
                                    <h4>Thêm thành viên</h4>
                                </div>
                                <div className={cx('nav-footer-nav')}>
                                    <button>
                                        <FontAwesomeIcon icon={faGear} />
                                    </button>
                                    <h4>Quản lý nhóm</h4>
                                </div>
                            </div>
                        </div>

                        <div className={cx('title')} style={{ height: getTitleHeight(1) }}>
                            <button className={cx('title-top')} onClick={() => toggleTitle(1)}>
                                <h2>Thành viên nhóm</h2>
                                <FontAwesomeIcon icon={faCaretDown} className={cx('title-center-icon')} />
                            </button>
                            {openTitles[1] && (
                                <>
                                    <button className={cx('title-center')}>
                                        <FontAwesomeIcon icon={faUsers} />
                                        <h2>5 thành viên</h2>
                                    </button>
                                    <button className={cx('title-bottom')}>
                                        <FontAwesomeIcon icon={faLink} />
                                        <div className={cx('title-bottom-nav')}>
                                            <h2>Link thanh gia nhóm</h2>
                                            <p>zalo.me/g/kugopy333</p>
                                        </div>
                                        <div className={cx('title-icon')}>
                                            <button>
                                                <FontAwesomeIcon icon={faCopy} />
                                            </button>
                                            <button>
                                                <FontAwesomeIcon icon={faShare} />
                                            </button>
                                        </div>
                                    </button>
                                </>
                            )}
                        </div>

                        <div className={cx('title')} style={{ height: getTitleHeight(2) }}>
                            <button className={cx('title-top')} onClick={() => toggleTitle(2)}>
                                <h2>Bảng tin nhóm</h2>
                                <FontAwesomeIcon icon={faCaretDown} className={cx('title-center-icon')} />
                            </button>
                            {openTitles[2] && (
                                <>
                                    <button className={cx('title-center')}>
                                        <FontAwesomeIcon icon={faClock} />
                                        <h2>Danh sách nhắc hẹn</h2>
                                    </button>
                                    <button className={cx('title-center')}>
                                        <FontAwesomeIcon icon={faNoteSticky} rotation={180} />
                                        <h2>Ghi chú, ghim bình chọn</h2>
                                    </button>
                                </>
                            )}
                        </div>

                        <div className={cx('title')} style={{ height: getTitleHeight(3) }}>
                            <button className={cx('title-top')} onClick={() => toggleTitle(3)}>
                                <h2>Ảnh/Video</h2>
                                <FontAwesomeIcon icon={faCaretDown} className={cx('title-center-icon')} />
                            </button>
                            {openTitles[3] && (
                                <>
                                    <div className={cx('title-image')}>
                                        {images.map((image, index) => (
                                            <img key={index} src={image.src} alt={image.alt} className={cx('img')} />
                                        ))}
                                    </div>

                                    <button className={cx('title-button')}>
                                        <h2>Xem tất cả</h2>
                                    </button>
                                </>
                            )}
                        </div>

                        <div className={cx('title')} style={{ height: getTitleHeight(4) }}>
                            <button className={cx('title-top')} onClick={() => toggleTitle(4)}>
                                <h2>File</h2>
                                <FontAwesomeIcon icon={faCaretDown} className={cx('title-center-icon')} />
                            </button>
                            {openTitles[4] && (
                                <>
                                    <div className={cx('title-file')}>
                                        <button className={cx('title-button')}>
                                            <img
                                                src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/418438460_1427463734814204_2243347561735660621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=d8Rn6MeNsFgAX8bXrB8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAg3g4eDCHTeeUP5j74q6f5a2r96ALDtfd1Ps_IC9AniQ&oe=65E17A1A"
                                                alt="Cao Trùng Dương"
                                                className={cx('img-title4')}
                                            />
                                            <div>
                                                <h2>Hướng dẫn Công nghệ mới.pdf</h2>
                                                <p>379.27 KB </p>
                                            </div>
                                        </button>
                                    </div>

                                    <button className={cx('title-button')}>
                                        <h2>Xem tất cả</h2>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
