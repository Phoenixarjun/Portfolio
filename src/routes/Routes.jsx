import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorPage from "@/pages/ErrorPage";
import ProjectPage from "@/pages/ProjectPage";
import CertificationPage from "@/pages/CertificationPage";
import AllProjectPage from "../pages/AllProjectPage";

const HomePage = lazy(() => import("@/pages/HomePage"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/projects",
    element: (
      <Suspense>
        <AllProjectPage />
      </Suspense>
    ),
  },
  {
    path: "/certifications",
    element: (
      <Suspense>
        <CertificationPage />
      </Suspense>
    ),
  },
  {
    path: "/project/:projectId",
    element: (
      <Suspense>
        <ProjectPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
