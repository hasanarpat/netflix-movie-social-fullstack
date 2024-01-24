import Image from 'next/image';
import './page.scss';

export default function Login() {
  const handleAction = async (formData: FormData) => {
    'use server';
    const email = formData.get('email');
    console.log(email);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <Image
            alt="Netflix Logo"
            src="/logo.svg.png"
            width={120}
            height={30}
            className="logo"
          />
        </div>
      </div>
      <div className="content">
        <h1>Sign In</h1>
        <form
          className="input"
          action={handleAction}
        >
          <div className="inputWrapper">
            <div className="inputContainer">
              <input
                type="email"
                name="email"
                placeholder="Email address"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button
              className="registerButton"
              type="submit"
            >
              Get Started
            </button>
          </div>
          <span>
            New to Netflix?
            <br /> <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you`&apos;`re
            not a bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
