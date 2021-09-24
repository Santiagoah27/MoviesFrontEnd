import React, { useState } from "react";
import "./Login.css";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import useAuth from "../../auth/UseAuth";
import { useHistory } from "react-router";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [hasError, setHasError] = useState(false);
  const auth = useAuth();
  const history = useHistory();
  var isLogin = false;

  function handleChange(name, value) {
    if (name === "user") {
      setUser(value);
    } else {
      if (value.length < 10) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
    }
  }

  function ifMatch(param) {
   if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "Admin" && param.password === "Admin2021*") {
        const { user, password } = param;
        let account = { user, password };
        let acLocal = JSON.stringify(account);
        localStorage.setItem("Account", acLocal);
        isLogin = true;
      } else {
        isLogin = false
        setHasError(true);
      }
    } else {
      isLogin = false
      setHasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
      if (isLogin) {
        auth.login(isLogin);
        history.push("/Movies")    
      }
    }
  }

  return (
    <div className="login-container">
    <Title text="Bienvenido a Movies App !" />
    {hasError && 
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
        Su contraseña o usuario son inconrrectos por favor digitelos de nuevo.
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
      </button>
    </div>    
    }
    <Label text="Username" />
    <Input
      atributte={{
        id: "user",
        name: "user",
        type: "text",
        placeholder: "User",
      }}
      handleChange={handleChange}
    />
    <Label text="Password" />
    <Input
      atributte={{
        id: "password",
        name: "password",
        type: "password",
        placeholder: "Password",
      }}
      handleChange={handleChange}
      param={passwordError}
    />
    {passwordError && (
      <label className="label-error">Contraseña invalida, esta debe tener por lo menos 10 caracteres</label>
    )}

    <button
      className="btn btn-dark btn-login col-md-1"
      onClick={handleSubmit}
    >
      LogIn
    </button>
  </div>
  );
}
