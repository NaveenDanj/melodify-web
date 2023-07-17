import { Navigate } from "react-router-dom";


type ProtectedRotueProp = {
    element : React.ReactNode,
    isAuth : boolean
}

const PrivateRoute = ({element}:ProtectedRotueProp) => {
    
    const isAuth = false;

    if (isAuth) {
        return element;
    } else {
        return <Navigate to={{ pathname: '/auth/login' }} />;
    }
    
};
  
export default PrivateRoute;