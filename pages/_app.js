import {Provider} from 'react-redux';
import {store} from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
export default function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
