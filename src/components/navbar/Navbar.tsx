'use client';
import './navbar.scss';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { IoNotifications } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // a silly logic to show or not navbar on some pages
  const pathName = usePathname();
  const pagesWithoutNavbar = ['play', 'register', 'login'];

  const showNavbar = pagesWithoutNavbar.filter((item) =>
    pathName.includes(item)
  );

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY <= 70 ? false : true);
      return () => window.onscroll === null;
    };
  }, [isScrolled]);

  return showNavbar.length > 0 ? (
    <></>
  ) : (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <Link href="/">
            <Image
              alt="Netflix Logo"
              src="/logo.svg.png"
              width={120}
              height={30}
              className="logo"
            />
          </Link>
          <Link
            className="link"
            href="/"
          >
            Homepage
          </Link>
          <Link
            className="link"
            href="/series"
          >
            Series
          </Link>
          <Link
            className="link"
            href="/movies"
          >
            Movies
          </Link>
          <Link
            className="link"
            href="/popular"
          >
            New and Popular
          </Link>
          <Link
            className="link"
            href="/user/watchList"
          >
            My List
          </Link>
        </div>
        <div className="right">
          <BiSearch className="icon" />
          <span>KID</span>
          <IoNotifications className="icon" />
          <Image
            alt="Netflix Logo"
            src="https://images.pexels.com/photos/19004679/pexels-photo-19004679/free-photo-of-adam-gunes-gozlugu-oturmak-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={30}
            height={30}
            className="img"
          />
          <div className="profile">
            <MdArrowDropDown className="icon" />
            <div className="options">
              <Link
                className="option"
                href="/user/settings"
              >
                Settings
              </Link>
              <Link
                className="option"
                href="/user/watchList"
              >
                WatchList
              </Link>
              <Link
                className="option"
                href="/logout"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
