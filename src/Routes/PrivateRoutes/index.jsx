import { useContext } from "react"
import { userContext } from "../../provider/User"
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const {user} = useContext(userContext);
    return user ? <Outlet /> : <Navigate to={"/"} />
}