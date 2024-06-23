import React from 'react'
import NoResultFoundImg from "/images/NoResult.jpg";
const NoResultFound = () => {
  const styles = {
    container: "bg-white flex flex-col items-center justify-center text-center gap-2",
    image: "h-56 w-56",
    title: "text-xl EmptyHeading  font-semibold",
    desc: "text-sm EmptyDesc",
  };
  return (
    <div className={styles.container}>
      <img className={styles.image} src={NoResultFoundImg} alt='loading' />
      <h1 className={styles.title}>Result Not Found!</h1>
      <p className={styles.desc}>
        I'm sorry, the result you requested could not be found
      </p>
    </div>
  )
}

export default NoResultFound