
export default function Header() {
    
    const headerStyle = {
        display: 'flex', // フレックスボックスを使用
        justifyContent: 'flex-end', // ボタンを右端に寄せる
        alignItems: 'center', // 要素を垂直方向の中央に配置
        backgroundColor: 'lightblue', // ヘッダーの背景色
        padding: '10px', // パディング
    };

    const buttonStyle = {
        fontSize: '16px', // フォントサイズ
        padding: '5px 10px', // ボタンのパディング
        backgroundColor: 'green', // ボタンの背景色
        color: 'white', // テキストの色
        border: 'none', // ボーダーを消す
        borderRadius: '5px', // 角を丸くする
        cursor: 'pointer', // カーソルをポインターにする
        marginLeft: 'auto' // 左側に自動的に余白を作る
    }
    
    
    
    
    return (
    <>
    <header style={headerStyle}>
        <h1>レシピ検索アプリ</h1>
        
        <button style={buttonStyle}>お気に入り登録</button>
    </header>
    </>
    )
}
