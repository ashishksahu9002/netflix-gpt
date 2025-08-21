import React, { useEffect, useState } from "react";
import {
  LOGO_URL,
  SUPPORTED_LANGUAGES,
  USER_LOGO_URL,
} from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGptSearchToggle = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen px-8 py-2 z-50 flex justify-between items-center transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80"
      }`}
    >
      <img src={LOGO_URL} alt="logo" className="w-44" />
      {user && (
        <div className="flex items-center">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="group flex h-10 items-center justify-center rounded-md border border-teal-600 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 px-4 text-black font-bold shadow-[inset_0_1px_0px_0px_#5eead4] hover:bg-gradient-to-b hover:from-teal-600 hover:via-teal-600 hover:to-teal-600 active:[box-shadow:none]"
            onClick={handleGptSearchToggle}
          >
            <span className="block group-active:[transform:translate3d(0,1px,0)]">
              {showGptSearch ? "Home Page" : "GPT Search"}
            </span>
          </button>
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
