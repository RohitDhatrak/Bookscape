import { Route, Navigate } from "react-router-dom";
import { useReducerContext } from "../Context/ReducerContext";

export function PrivateRoute({ path, ...state }) {
    const { isUserLoggedIn } = useReducerContext();

    return isUserLoggedIn ? (
        <Route {...state} path={path} />
    ) : (
        <Navigate replace to="/login" state={{ previousPath: `${path}` }} />
    );
}
