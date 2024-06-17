
export default function Header() {
    
    const headerStyle = {
        backgroundColor: 'lightblue', 
        padding: '10px', 
        textAlign: 'center' 
    };

    const buttonStyle = {

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
