import Loader from "@/components/Loader";
import { UserState } from "@/recoil/Atoms";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

const PrivateRoute = () => {
  const userState = useRecoilValue(UserState);

  return <Outlet />;
};

export default PrivateRoute;
