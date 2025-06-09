import React from 'react'
import MyNavbar from '../nav/MyNavbar';
import { Outlet } from 'react-router-dom';
import Footer from './../footer/Footer';

export default function Layout() {
  return <>
    <MyNavbar />
    <Outlet />
    <Footer />
  </>
}
