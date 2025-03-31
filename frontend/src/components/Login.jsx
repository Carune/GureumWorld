import { useState } from "react";
import "./Login.scss";
import loginImage from "../assets/gureum1.gif";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
 
  // ✅ 회원가입 상태 관리
  const [signupData, setSignupData] = useState({
    loginId: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const idRegex = /^[a-z0-9]{4,16}$/;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ✅ 회원가입 입력값 변경 핸들러
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value
    }));

    // 아이디 수정 시 체크 상태 초기화
    if (name === "loginId") {
      setIsIdChecked(false);
    }
  };

const [isIdChecked, setIsIdChecked] = useState(false);

const handleIdCheck = async () => {
  if (!idRegex.test(signupData.loginId)) {
    alert("아이디는 영문 소문자와 숫자 조합 4~16자여야 합니다.");
    return;
  }
  if (signupData.loginId.length < 4) {
    alert("아이디는 최소 4글자 이상이어야 합니다.");
    return;
  }

  try {
    const response = await fetch(`/auth/checkId?loginId=${signupData.loginId}`);
    const result = await response.json();

    if (response.ok) {
      if (result.available) {
        alert("사용 가능한 아이디입니다!");
        setIsIdChecked(true);
      } else {
        alert("이미 사용 중인 아이디입니다.");
        setIsIdChecked(false);
      }
    } else {
      alert("서버 오류가 발생했습니다.");
    }
  } catch (error) {
    console.error("아이디 중복 확인 실패:", error);
    alert("네트워크 오류가 발생했습니다.");
  }
};

  // ✅ 회원가입 버튼 클릭 시 유효성 검사
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = signupData;

    if (!isIdChecked) {
      alert("아이디 중복 확인을 해주세요.");
      return;
    }

    if(username.length < 1) {
      alert("사용자 이름을 입력해주세요.");
    }

    if (password.length < 8) {
      alert("비밀번호는 최소 8자리 이상이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      const response = await fetch("/auth/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginId: signupData.loginId,
          username: signupData.username,
          email: signupData.email,
          password: signupData.password,
        }),
      });
  
      if (response.ok) {
        alert("회원가입 성공! 이제 로그인해보세요.");
        setIsSignUp(false); // 로그인 화면으로 전환
      } else {
        const errorMessage = await response.text();
        alert("회원가입 실패: " + errorMessage);
      }
    } catch (error) {
      console.error("회원가입 요청 실패:", error);
      alert("네트워크 오류가 발생했습니다.");
    }
  };

  const isPasswordValid = signupData.password.length >= 8;
  const isPasswordMatch =
    signupData.password === signupData.confirmPassword &&
    signupData.confirmPassword.length > 0;

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
              <input type="text" placeholder="아이디" className="login__input" />
            </div>
            <div className="login__box">
              <i className="bx bx-lock login__icon"></i>
              <input type="password" placeholder="비밀번호" className="login__input" />
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
            <div className="login__box login__box--id">
              <i className="bx bx-user login__icon"></i>
              <div className="login__id-input-wrapper">
                <input
                  type="text"
                  placeholder="아이디"
                  className="login__input"
                  name="loginId"
                  value={signupData.loginId}
                  onChange={handleSignupChange}
                />
                <button
                  type="button"
                  className="check-button"
                  onClick={handleIdCheck}
                >
                  중복체크
                </button>
              </div>
            </div>
            <div className="login__box">
              <i className="bx bx-id-card login__icon"></i>
              <input type="text" placeholder="이름" className="login__input" name="username" value={signupData.username} onChange={handleSignupChange}  />
            </div>
            <div className="login__box">
              <i className="bx bx-at login__icon"></i>
              <input type="email" placeholder="이메일" className="login__input" name="email" value={signupData.email} onChange={handleSignupChange}/>
            </div>
            <div className="login__box password-box">
              <i className="bx bx-lock login__icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="비밀번호(최소 8자리)"
                value={signupData.password}
                onChange={handleSignupChange}
                className="login__input"
              />
              <i
                className={`bx ${showPassword ? "bx-hide" : "bx-show"} toggle-password`}
                onClick={() => setShowPassword(!showPassword)}
              />
              {isPasswordValid && <span className="valid-check">✔</span>}
            </div>
            <div className="login__box password-box">
              <i className="bx bx-lock login__icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="비밀번호 확인"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                className="login__input"
              />
              <i
                className={`bx ${showConfirmPassword ? "bx-hide" : "bx-show"} toggle-password`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
              {isPasswordMatch && <span className="valid-check">✔</span>}
            </div>

            {/* ❗ 비밀번호 불일치 시 빨간 문구 표시 */}
            {signupData.confirmPassword.length > 0 && !isPasswordMatch && (
              <div className="error-message">비밀번호가 일치하지 않습니다.</div>
            )}

            <button className="login__button" onClick={handleSignupSubmit}>가입완료</button>
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
