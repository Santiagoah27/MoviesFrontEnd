import { Redirect, Route } from "react-router";
import useAuth from "../auth/UseAuth";


export default function PrivateRoute({
  component: Component,
  ...rest
}) {
  const auth = useAuth();

  return <Route {...rest}>{auth.login() ? <Component /> : <Redirect to="/" />}</Route>;
}
