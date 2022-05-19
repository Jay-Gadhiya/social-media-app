import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function RequiresAuth({ children }) {

    const { token } = useSelector(store => store.user);

    return token ? children : <Navigate to="/" replace />;
}