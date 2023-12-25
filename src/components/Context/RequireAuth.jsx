
// eslint-disable-next-line react/prop-types
import {useAuth} from "./AuthContext.jsx";
import {Navigate, useLocation} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({children}) => {
    const {currentUser} = useAuth();
    const location = useLocation()

    if(!currentUser){
        return <Navigate to="/login" state={{path: location.pathname}} />
    }

    return children

};

export default RequireAuth;
