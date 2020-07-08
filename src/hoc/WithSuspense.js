import React, { Suspense } from 'react';
import PreloaderImg from '../components/common/Preloader/PreloaderImg';

export const withSuspense = (Component) => {
  return (props) => {
    return <Suspense fallback={<PreloaderImg />}>
      <Component {...props} />
    </Suspense>
  }
}