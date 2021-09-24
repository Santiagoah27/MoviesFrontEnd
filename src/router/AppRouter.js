import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "../pages/404/NotFoundPage";
import Login from "../pages/Home/Login";
import Favorites from "../pages/Movies/Favorites";
import Movies from "../pages/Movies/Movies";
import MoviesDetail from "../pages/Movies/MoviesDetail";
import PrivateRoute from "./PrivateRoute";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/Movies" component={Movies}/>
        <PrivateRoute path="/Favorites" component={Favorites}/>
        <PrivateRoute path="/Details/:movieId" component={MoviesDetail}/>
        <Route exact path="/" component={Login}/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}
