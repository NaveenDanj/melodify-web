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

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<AppLayout />}>
            <Route index element={ <PrivateRoute element={<Home />} /> } />
            <Route path="search" element={ <PrivateRoute element={<Search />} />  } />
            <Route path="playlist" element={ <PrivateRoute element={<Playlist />} />  } />
            <Route path="queied" element={ <PrivateRoute element={<Queied />} />  } />
            <Route path="artist" element={ <PrivateRoute element={<ArtistProfile />} /> } />
            <Route path="user" element={ <PrivateRoute element={<UserProfile /> } /> } />
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
