import { useState } from "react";
import "./Login.scss";
import loginImage from "../assets/gureum1.gif";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img
            src={loginImage}
            alt="구름월드 로그인"
          />
        </div>
        <div className="login__forms">
          {/* 로그인 폼 */}
          <div className={`login__register ${!isSignUp ? "block" : "none"}`}>
            <h1 className="login__title">구름월드 입장</h1>
            <div className="login__box">
              <i className="bx bx-user login__icon"></i>
              <input type="text" placeholder="Username" className="login__input" />
            </div>
            <div className="login__box">
              <i className="bx bx-lock login__icon"></i>
              <input type="password" placeholder="Password" className="login__input" />
            </div>
            <a href="#" className="login__forgot">
              비밀번호를 잊으셨나요?
            </a>
            <button className="login__button">로그인</button>
            <div>
              <span className="login__account">계정이 없으신가요? </span>
              <span className="login__signin login__signin--signup" id="sign-up" onClick={() => setIsSignUp(true)}>
                회원가입
              </span>
            </div>
            <div className="login__social">
              <a href="#" className="login__social--icon"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="login__social--icon"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="login__social--icon"><i className="bx bxl-google"></i></a>
              <a href="#" className="login__social--icon"><i className="bx bxl-github"></i></a>
            </div>
          </div>

          {/* 회원가입 폼 */}
          <div className={`login__create ${isSignUp ? "block" : "none"}`}>
            <h1 className="login__title">회원가입</h1>
            <div className="login__box">
              <i className="bx bx-user login__icon"></i>
              <input type="text" placeholder="Username" className="login__input" />
            </div>
            <div className="login__box">
              <i className="bx bx-at login__icon"></i>
              <input type="email" placeholder="Email" className="login__input" />
            </div>
            <div className="login__box">
              <i className="bx bx-lock login__icon"></i>
              <input type="password" placeholder="Password" className="login__input" />
            </div>
            <button className="login__button">가입완료</button>
            <div>
              <span className="login__account">이미 계정이 있으신가요? </span>
              <span className="login__signup login__signup--signup" id="sign-in" onClick={() => setIsSignUp(false)}>
                로그인
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
