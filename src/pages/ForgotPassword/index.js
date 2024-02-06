import React from 'react';
import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);
function SignIn(props) {
    return (
        <div className={cx('wrapper')}>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title fs-1 text-center">Quên mật khẩu</h3>
                        <br />
                        <br />
                        <p className="forgot-password  mt-2 text-decoration-none text-primary fs-5 text-info">
                            Nhập email/SĐT để nhận mã xác thực
                        </p>
                        <div className="form-group mt-3">
                            <label>Tài khoản</label>
                            <input
                                type="text"
                                className="form-control form-control-lg mt-1 fs-4"
                                placeholder="Nhập tài khoản "
                            />
                        </div>
                        <Link to={config.routes.otpForgotPassword} className={cx('button')}>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary btn-lg">
                                    <span className="fs-4">Xác nhận</span>
                                </button>
                            </div>
                        </Link>
                        <br />
                        <Link to={config.routes.home} className={cx('link')}>
                            <p className="forgot-password text-center mt-2 text-decoration-none text-primary fs-5">
                                Trang chủ
                            </p>
                        </Link>
                        <Link to={config.routes.login} className={cx('link')}>
                            <p className="forgot-password text-center mt-2 text-decoration-none text-primary fs-5">
                                Đăng nhập
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
    );
}

export default SignIn;
