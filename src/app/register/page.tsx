import Image from 'next/image';
import './page.scss';

const Register = () => {
  const handleAction = async (formData: FormData) => {
    'use server';
    const email = formData.get('email');
    console.log(email);
  };

  return (
    <section className="register">
      <div className="top">
        <div className="wrapper">
          <Image
            alt="Netflix Logo"
            src="/logo.svg.png"
            width={120}
            height={30}
            className="logo"
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          ready to watch? Enter your emaail to create or restart your
          membership.
        </p>
        <form
          className="input"
          action={handleAction}
        >
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
        </form>
      </div>
    </section>
  );
};

export default Register;
