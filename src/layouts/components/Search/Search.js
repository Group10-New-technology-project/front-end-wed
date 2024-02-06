import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleChange = (event) => {
        event.target.value = event.target.value.trimStart();
        setSearchValue(event.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <button className={cx('icon-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

                <input ref={inputRef} value={searchValue} placeholder="Tìm kiếm" onChange={handleChange} />
                {!!searchValue && (
                    <button className={cx('icon-clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
                    </button>
                )}
            </div>

            <div className={cx('list-icon')}>
                <button className={cx('icon')}>
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
                <button className={cx('icon')}>
                    <FontAwesomeIcon icon={faUsers} />
                </button>
            </div>
        </div>
    );
}

export default Search;
