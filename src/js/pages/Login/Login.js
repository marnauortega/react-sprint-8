import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Login() {
  return (
    <>
      <nav className="selector">
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </nav>
      <Outlet />
    </>
  );
}

function RegisterForm({ users, setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registeredMessage, setRegisteredMessage] = useState("");

  const handleInput = (e, setState) => {
    setState(e.target.value);
  };

  const isValidName = () => {
    console.log("name", name);

    if (!name) {
      setNameError("Name is required");
      return false;
    }

    setNameError("");
    return true;
  };

  const isValidEmail = () => {
    console.log("email", email);
    if (!email) {
      setEmailError("Email is required");
      return false;
    }

    setEmailError("");
    const valid = email.includes("@") && email.includes(".");
    !valid && setEmailError("Email must have appropriate format");
    return valid;
  };

  const isValidPassword = () => {
    console.log("password", password);

    if (!password) {
      setPasswordError("Password is required");
      return false;
    }

    setPasswordError("");
    const valid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password);
    !valid && setPasswordError("Password must contain a capital letter, a digit and a special character");
    return valid;
  };

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    isValidName();
    isValidEmail();
    isValidPassword();

    if (isValidName() && isValidEmail() && isValidPassword()) {
      const newUser = {
        id: users.length,
        name,
        email,
        password,
      };

      setUsers([...users, newUser]);
      setRegisteredMessage("You are registered!");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login/registered");
    }
  };

  return (
    <>
      <div className="register">
        <form role="form" onSubmit={handleRegister}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => handleInput(e, setName)} />
            <span className="error">{nameError}</span>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={(e) => handleInput(e, setEmail)} />
            <span className="error">{emailError}</span>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => handleInput(e, setPassword)} />
            <span className="error">{passwordError}</span>
          </div>
          <input type="submit" />
          <span>{registeredMessage}</span>
        </form>
      </div>
    </>
  );
}

function LoginForm({ users, setLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const handleInput = (e, setState) => {
    setState(e.target.value);
  };

  const isValidEmail = () => {
    console.log("email", emailError);

    if (!email) {
      setEmailError("Email is required");
      return false;
    }

    setEmailError("");
    return true;
  };

  const isValidPassword = () => {
    console.log("password", passwordError);

    if (!password) {
      setPasswordError("Password is required");
      return false;
    }

    setPasswordError("");
    return true;
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    isValidEmail();
    isValidPassword();

    if (isValidEmail() && isValidPassword()) {
      const user = users.find((user) => user.email === email);

      console.log(user);

      if (!user) return setFormError("The username or password is incorrect");
      console.log("loggedIn", user.password === password);
      if (user.password === password) {
        setFormError("Welcome! You are logged in");
        setLogged(true);
        navigate("/login/logged");
      } else {
        setFormError("The username or password is incorrect");
      }
    }
  };

  return (
    <>
      <div className="login">
        <form role="form" onSubmit={handleLogin}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={(e) => handleInput(e, setEmail)} />
            <span className="error">{emailError}</span>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => handleInput(e, setPassword)} />
            <span className="error">{passwordError}</span>
          </div>
          <input type="submit" />
          <span className="error">{formError}</span>
        </form>
      </div>
    </>
  );
}

function Welcome({ newUser }) {
  return (
    <>
      <p>{newUser ? "Welcome! You are registered" : "Welcome! You are logged in"}</p>
    </>
  );
}

export default Login;
export { LoginForm, RegisterForm, Welcome };
