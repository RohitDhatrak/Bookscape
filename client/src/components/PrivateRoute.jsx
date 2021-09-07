import { Route, Navigate } from "react-router-dom";
import { useReducerContext } from "../Context/ReducerContext";

export function PrivateRoute({ path, ...state }) {
    const { userId } = useReducerContext();

    return userId ? (
        <Route {...state} path={path} />
    ) : (
        <Navigate replace to="/login" state={{ previousPath: `${path}` }} />
    );
}
