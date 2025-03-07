import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import App from '@/App.tsx';
import { GlobalStyle } from '@/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
