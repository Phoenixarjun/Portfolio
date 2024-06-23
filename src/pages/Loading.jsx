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
    </div>
  );
}

export default ErrorPage