import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { IoIosList } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { firebaseAuthSignOut } from "@firebaseConfig/auth";
import { removeUser } from "@redux/slices/userSlice";
import { useAppDispatch } from "@hooks/reduxHooks";
import { ADMIN_WORKS_PAGE_ROUTE } from "@utils/consts";

const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logOut = async () => {
    await firebaseAuthSignOut();
    dispatch(removeUser());
  };

  return (
    <div className="admin-nav">
      {isOpen && (
        <div className="admin-nav__list">
          <Link to={ADMIN_WORKS_PAGE_ROUTE} className="admin-nav__item">
            <IoIosList />
            Works
          </Link>
          <div className="admin-nav__item" onClick={logOut}>
            <CiLogout />
            Sign out
          </div>
        </div>
      )}
      <div className="admin-nav__btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoMdClose /> : <CgMenu />}
      </div>
    </div>
  );
};

export default Navigation;
