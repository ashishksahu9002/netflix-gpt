import React, { useEffect } from "react";
import { LOGO_URL, USER_LOGO_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
      <img src={LOGO_URL} alt="logo" className="w-44" />
      {user && (
        <div className="flex items-center">
          <img src={USER_LOGO_URL} alt="user logo" className="h-12 w-12 p-1" />
          <button
            className="group flex h-10 font-bold items-center justify-center opacity-70 rounded-md border border-gray-200 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-200 px-4 text-gray-950 hover:bg-gradient-to-b hover:from-gray-100 hover:via-gray-100 hover:to-gray-100 active:shadow-inner"
            onClick={handleSignOut}
          >
            <span className="block group-active:[transform:translate3d(0,1px,0)]">
              Sign Out
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
