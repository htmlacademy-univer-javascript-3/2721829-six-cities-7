import MainPage from './pages/MainPage/MainPage';

type AppProps = {
    cities: string[];
}

const App = (props: AppProps) => (
  <MainPage apartmentsCount={50} cities={props.cities}></MainPage>
);

export default App;
