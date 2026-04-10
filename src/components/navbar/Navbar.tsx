import { Link } from "react-router";
import { Button } from "../ui/button";

const NavbarComp = () => {
  return (
    <div className="flex justify-around items-center">
      <div></div>
      <div className="flex justify-evenly items-center space-x-10">
        <Link to="/login">
          <Button className="hover:cursor-pointer">Login</Button>
        </Link>
        <Link to="/signup">
          <Button className="hover:cursor-pointer">SignUp</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarComp;
