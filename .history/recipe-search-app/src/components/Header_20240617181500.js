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
        <h1>レシピ検索アプリ</h1>
    
        <img src={logo2} style={logoStyle} alt="レシピ" />
        
    <Button variant='text'>ボタン</Button>

    </header>
    </>
    )
}
