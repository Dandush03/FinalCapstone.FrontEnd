import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Action
import { getStatus } from '../actions/userAction';

// Components
import { Header } from '../components';
import { Img, Footer } from '../containers';
import Loading from './Loading';

export default function Home() {
  const dispath = useDispatch();
  const user = useSelector((state) => state.logged);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispath(getStatus(token));
    }
  }, [dispath, token]);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <Loading />
      <main>
        {}
      </main>
      <Footer />
    </>
  );
}
