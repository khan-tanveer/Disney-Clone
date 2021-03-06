import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { auth, provider } from "./firebase";

const Header = ({ toggle }) => {
  const dispatch = useDispatch;
  const history = useHistory;
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        // console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div>
      <Nav>
        <NavLink to="/">
          <Logo>
            <img src="/images/logo.svg" alt="" />
          </Logo>
        </NavLink>

        {!username ? (
          <Login onClick={handleAuth}>Login</Login>
        ) : (
          <>
            <NavMenu>
              <a href="/home">
                <img src="/images/home-icon.svg" alt="" />
              </a>
            </NavMenu>
          </>
        )}

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLink to="/home" offset={-20} activeClass="active">
            <a>
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>
          </NavLink>

          <NavLink to="/search">
            <a>
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
          </NavLink>

          <NavLink to="/watchlist">
            <a>
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
          </NavLink>

          <NavLink to="/originals">
            <a>
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
          </NavLink>

          <NavLink to="/movies">
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
          </NavLink>

          <NavLink to="/series">
            <a>
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavLink>
        </NavMenu>
        <Login onClick={handleAuth}>Login</Login>
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibilty: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
    &:active {
      background-color: red;
      border-bottom: 1px solid green;
      z-index: 300;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    // margin-right: 15px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
    // color
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
