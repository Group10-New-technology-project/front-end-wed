import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.module.scss';
function SignIn(props) {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title fs-1">Đăng ký</h3>
                    <br />
                    <br />
                    <div className="form-group mt-3">
                        <label>Tên</label>
                        <input
                            type="email"
                            className="form-control form-control-lg mt-1 fs-4"
                            placeholder="Nhập email hoặc số điện thoại"
                        />
                    </div>

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
                    <div className="form-group mt-3">
                        <label>Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            className="form-control form-control-lg mt-1 fs-4 "
                            placeholder="Nhập mật khẩu"
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary btn-lg">
                            <span className="fs-4">Đăng ký</span>
                        </button>
                    </div>
                    <br />
                    <p className="forgot-password text-center mt-2 text-decoration-none text-primary fs-5">Trang chủ</p>
                    <p className="forgot-password text-center mt-2 text-decoration-none text-primary fs-5">Đăng nhập</p>
                    <p className="forgot-password text-center mt-2 text-decoration-none text-primary fs-5">
                        Quên mật khẩu?
                    </p>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
