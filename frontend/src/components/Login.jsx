import { useState, useEffect } from "react";
import "./Login.scss";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const signupButton = document.getElementById("sign-up");
    const signinButton = document.getElementById("sign-in");

    if (signupButton && signinButton) {
      signupButton.addEventListener("click", () => setIsSignUp(true));
      signinButton.addEventListener("click", () => setIsSignUp(false));
    }

    return () => {
      if (signupButton && signinButton) {
        signupButton.removeEventListener("click", () => setIsSignUp(true));
        signinButton.removeEventListener("click", () => setIsSignUp(false));
      }
    };
  }, []);

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img
            src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg"
            alt="user login"
          />
        </div>
        <div className="login__forms">
          {/* 로그인 폼 */}
          <form action="" className={`login__register ${!isSignUp ? "block" : "none"}`} id="login-in">
            <h1 className="login__title">Sign In</h1>
            <div className="login__box">
              <i className="bx bx-user login__icon"></i>
              <input type="text" placeholder="Username" className="login__input" />
            </div>
            <div className="login__box">
              <i className="bx bx-lock login__icon"></i>
              <input type="password" placeholder="Password" className="login__input" />
            </div>
            <a href="#" className="login__forgot">
              Forgot Password?
            </a>
            <a href="#" className="login__button">Sign In</a>
            <div>
              <span className="login__account login__account--account">Don't Have an Account?</span>
              <span className="login__signin login__signin--signup" id="sign-up">
                Sign Up
              </span>
            </div>
          </form>

          {/* 회원가입 폼 */}
          <form action="" className={`login__create ${isSignUp ? "block" : "none"}`} id="login-up">
            <h1 className="login__title">Create Account</h1>
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
            <a href="#" className="login__button">Sign Up</a>
            <div>
              <span className="login__account login__account--account">Already have an Account?</span>
              <span className="login__signup login__signup--signup" id="sign-in">
                Sign In
              </span>
            </div>
            <div className="login__social">
              <a href="#" className="login__social--icon"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="login__social--icon"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="login__social--icon"><i className="bx bxl-google"></i></a>
              <a href="#" className="login__social--icon"><i className="bx bxl-github"></i></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
