import React, { useState } from 'react';
import logo2 from '../logo/logo2.png';
import { Button } from '@mui/material';
import FavoriteButton from './FavoritesButton';

export default function Header() {

    const [count, setCount] = useState(0);
    
    const headerStyle = {
        display: 'flex', // フレックスボックスを使用
        justifyContent: 'space-between', 
        alignItems: 'center', // 要素を垂直方向の中央に配置
        backgroundColor: 'lightblue', // ヘッダーの背景色
        padding: '10px', // パディング
    };

    const logoAndTitleStyle = {
        display: 'flex', // フレックスボックスを使用
        alignItems: 'center', // 要素を垂直方向の中央に配置
        justifyContent: 'center', // 要素を水平方向の中央に配置
        flexGrow: 1, // 利用可能なスペースを埋める
    };

    const logoStyle = {
        height: '50px',
        marginRight: '10px',
        cursor: 'pointer', 
    };

    
    return (
    <>
    <header style={headerStyle}>
    <div style={logoAndTitleStyle}>
        <img src={logo2} style={logoStyle} alt="レシピ" />
        <h1 style={{margin: '0'}}>レシピ検索アプリ</h1>
    </div>
        <FavoriteButton setCount={setCount} />
        <Button variant='contained'>{count}</Button>

    </header>
    </>
    );
}
