import React from 'react'
import { Link } from 'react-router-dom';
import Error from "/images/404.jpg";

const ErrorPage = () => {
  const styles = {
    container: "min-h-screen bg-white flex flex-col items-center justify-center text-center gap-2",
    image: "h-56 w-56",
    title: "text-xl EmptyHeading  font-semibold",
    desc: "text-sm EmptyDesc",
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={Error} alt='loading' />
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.desc}>
        We’re sorry, the page you requested could not be found <br /> Please go
        back to homepage
      </p>
      <Link to='/'>
        <button className='bg-blue'>Back to Home</button>
      </Link>
    </div>
  );
}

export default ErrorPage