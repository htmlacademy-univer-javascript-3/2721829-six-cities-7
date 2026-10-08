import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import Offer from './pages/Offer/Offer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const AppPaths = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
}


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppPaths.Main}
        element={<MainPage apartmentsCount={312} />}
      />
      <Route
        path={AppPaths.Login}
        element={<Login />}
      />
      <Route
        path={AppPaths.Favorites}
        element={
          <PrivateRoute isAuthenticated={false}>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route
        path={AppPaths.Offer}
        element={<Offer />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>

);

export {
  App,
  AppPaths
}
