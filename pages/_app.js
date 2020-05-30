import React, {useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import {auth} from '../redux/actions/user';

export default function MyApp({Component, pageProps}) {
/*   
const dispatch = useDispatch();

  useEffect(() => {
    console.log('qqq');
    const token = localStorage.getItem('jwt');
    if (token) {
      dispatch(auth(token));
    }
  }, [auth]); */

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
