
export default function Header() {
    
    const headerStyle = {
        display: 'flex', // フレックスボックスを使用
        justifyContent: 'flex-end', // ボタンを右端に寄せる
        alignItems: 'center', // 要素を垂直方向の中央に配置
        backgroundColor: 'lightblue', // ヘッダーの背景色
        padding: '10px', // パディング
    };

    const buttonStyle = {
        textAlign: 'left', 
    }
    
    
    
    
    return (
    <>
    <header style={headerStyle}>
        <h1>レシピ検索アプリ</h1>
        {/* お気に入り登録ボタンを追加 */}
        <button style={buttonStyle}>お気に入り登録</button>
    </header>
    </>
    )
}
