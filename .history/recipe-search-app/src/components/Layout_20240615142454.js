import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <>
        <Header />
        <Outlet /> {/* ここで子ルートがレンダリングされます */}
    </>
    );
};

export default Layout;