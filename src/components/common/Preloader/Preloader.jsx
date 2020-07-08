import React from 'react';
import preLoader from "./../../../assets/images/preloader.gif";
import styles from './Preloader.module.scss';

let Preloader = (props) => {
  return (
    <div className={styles.preLoaderWrapper} style={{ backgroundColor: 'white' }}>
      <img className={styles.preLoaderWrapperImg} alt="preloader" src={preLoader} />
    </div>
  )
}

export default Preloader;