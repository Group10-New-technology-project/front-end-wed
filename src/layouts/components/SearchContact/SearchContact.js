import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchContact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

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

            <div className={cx('filter')}>
                <FontAwesomeIcon icon={faArrowsAltV} className={cx('icon-filter')} />
                <select>
                    <option>Tên (A-Z)</option>
                    <option>Tên (Z-A)</option>
                </select>
            </div>
        </div>
    );
}

export default Search;
