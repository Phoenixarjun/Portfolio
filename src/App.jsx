import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {

  return (
    <>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
    </>
  );
};

export default App;
