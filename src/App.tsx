import { GlobalStyle } from './shared/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>

      <GlobalStyle />
    </>
  );
}

export default App;