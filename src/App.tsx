import { BrowserRouter, Routes , Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from "src/pages/App/Home";
import Search from "src/pages/App/Search";
import Playlist from "src/pages/App/Playlist";
import Queied from "src/pages/App/Queied";
import ArtistProfile from "src/pages/App/ArtistProfile";
import UserProfile from "src/pages/App/UserProfile";
import AppLayout from "src/layouts/AppLayout";


import Login from "src/pages/Auth/Login";
import AuthLayout from "src/layouts/AuthLayout";
import Register from "src/pages/Auth/Register";
import PrivateRoute from "src/components/routes/ProtectedRoute";
import {useEffect , useState} from 'react'


import app from "src/config/FirebaseConfig";
import { getAuth  , onAuthStateChanged   } from "firebase/auth";
import Loading from "./components/global/Loading";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [authState , setAuthState] = useState(false)
  const [loading , setLoading] = useState(true)
  
  useEffect(() => {
    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState(true);
      } else {
        setAuthState(false);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<AppLayout />}>
            <Route index element={ <PrivateRoute isAuth={authState} element={<Home />} /> } />
            <Route path="search" element={ <PrivateRoute isAuth={authState} element={<Search />} />  } />
            <Route path="playlist" element={ <PrivateRoute isAuth={authState} element={<Playlist />} />  } />
            <Route path="queied" element={ <PrivateRoute isAuth={authState} element={<Queied />} />  } />
            <Route path="artist" element={ <PrivateRoute isAuth={authState} element={<ArtistProfile />} /> } />
            <Route path="user" element={ <PrivateRoute isAuth={authState} element={<UserProfile /> } /> } />
              {/* <Route path="*" element={<NoPage />} /> */}
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={ <Login /> } />
            <Route path="register" element={ <Register /> } />
          </Route>

        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  )
  

}

export default App
