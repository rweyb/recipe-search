import React from 'react';
import logo2 from '../logo/logo2.png';
import { Button } from '@mui/material';


export default function Header() {
    
    const headerStyle = {
        display: 'flex', // フレックスボックスを使用
        justifyContent: 'space-between', 
        alignItems: 'center', // 要素を垂直方向の中央に配置
        backgroundColor: 'lightblue', // ヘッダーの背景色
        padding: '10px', // パディング
    };

    const logoStyle = {
        height: '50px',
        cursor: 'pointer', 
    };

    
    return (
    <>
    <header style={headerStyle}>
        <img src={logo2} style={logoStyle} alt="レシピ" />
        <h1 style={{margin: '0'}}>レシピ検索アプリ</h1>
        <Button variant='text' style={{ marginLeft: 'auto'}}>ボタン</Button>

    </header>
    </>
    );
}
