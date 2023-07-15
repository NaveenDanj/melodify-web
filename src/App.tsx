import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "src/layouts/AppLayout";
import Home from "src/pages/App/Home";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Search from "src/pages/App/Search";
import Playlist from "src/pages/App/Playlist";
import Queied from "src/pages/App/Queied";
import ArtistProfile from "src/pages/App/ArtistProfile";
import UserProfile from "src/pages/App/UserProfile";
import Login from "src/pages/Auth/Login";
import AuthLayout from "src/layouts/AuthLayout";


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
            <Route index element={<Home />} />
            <Route path="search" element={ <Search /> } />
            <Route path="playlist" element={ <Playlist /> } />
            <Route path="queied" element={ <Queied /> } />
            <Route path="artist" element={  <ArtistProfile />} />
            <Route path="user" element={ <UserProfile /> } />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={ <Login /> } />
          </Route>

        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
