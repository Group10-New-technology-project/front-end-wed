import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
// import './Login.module.scss';
function Login(props) {
    return (
        <div className={cx('wrapper')}>
            <div className="Auth-form-container">
                <div className={cx('form')}>
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title fs-1 text-center">Đăng nhập</h3>
                            <br />
                            <br />

                            <div className="form-group mt-3">
                                <label>Tài khoản</label>
                                <input
                                    type="email"
                                    className="form-control form-control-lg mt-1 fs-4"
                                    placeholder="Nhập email hoặc số điện thoại"
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label>Mật khẩu</label>
                                <input
                                    type="password"
                                    className="form-control form-control-lg mt-1 fs-4 "
                                    placeholder="Nhập mật khẩu"
                                />
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary btn-lg">
                                    <span className="fs-4">Đăng nhập</span>
                                </button>
                            </div>
                            <br />

                            <Link to={config.routes.home} className={cx('link')}>
                                <p className="forgot-password text-center mt-2 text-decoration-none text-primary fs-5">
                                    Trang chủ
                                </p>
                            </Link>
                            <Link to={config.routes.forgotPassword} className={cx('link')}>
                                <p className="forgot-password text-center mt-2 text-decoration-none text-primary fs-5">
                                    Quên mật khẩu?
                                </p>
                            </Link>
                            <Link to={config.routes.signIn} className={cx('link')}>
                                <p className="forgot-password text-center mt-2 text-decoration-none text-primary fs-5">
                                    Bạn chưa có tài khoản?
                                </p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
