import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import Offer from './pages/Offer/Offer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Offer as OfferType } from './mocks/offer';
import { FavoriteOffer } from './mocks/favorites';

const AppPaths = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  
} as const

type AppProps = {
  offers: OfferType[]
  favoriteOffers: FavoriteOffer[]
}


const App = ({ offers }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppPaths.Main}
        element={
          <MainPage
            offers={offers}
            offersCount={offers.length}
          />
        }
      />
      <Route
        path={AppPaths.Login}
        element={<Login />}
      />
      <Route
        path={AppPaths.Favorites}
        element={
          <PrivateRoute isAuthenticated={true}>
            <Favorites offers={offers}/>
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
