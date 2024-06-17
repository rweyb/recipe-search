import logo1 from './logo/logo1.png';



export default function Header() {
    
    const headerStyle = {
        display: 'flex', // フレックスボックスを使用
        justifyContent: 'flex-end', // ボタンを右端に寄せる
        alignItems: 'center', // 要素を垂直方向の中央に配置
        backgroundColor: 'lightblue', // ヘッダーの背景色
        padding: '10px', // パディング
    };

    const logoStyle = {
        height: '50px',
        marginLeft: 'auto',
        cursor: 'pointer',
    };
    
    return (
    <>
    <header style={headerStyle}>
        <h1>レシピ検索アプリ</h1>
        
        <img src={logo1} style={logoStyle} alt="お気に入り" />
    </header>
    </>
    )
}
