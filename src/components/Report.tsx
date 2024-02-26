import React from "react";

interface Props {
  names: string[];
  greetings: string[];
  endGreetings: string[];
}
const Report = ({ names, greetings, endGreetings }: Props) => {
  return (
    <div>
      <div>
        {/* Names */}
        {names.map((name, index) => (
          <strong key={index}>{name}</strong>
        ))}
        {/* Greetings */}
        <br />
        {greetings.map((greeting, index) => (
          <strong key={index}>{greeting}</strong>
        ))}
        <br />
        {/* Date */}
        02/09の報告です
        <br />
        <br />
      </div>
      <div>
        <h4>本日の作業</h4>
        {/* Text inside the 本日の作業 text box */}
        <ul>
          <li>ホーム画面v2.０の追加</li>
          <li>イベントリスト表示画面の作成 ⇨ 完了</li>
          <li>COS商品スクレイピング ⇨ 進行中です</li>
        </ul>
      </div>
      <div>
        <h4>相談事項</h4>
        {/* Text inside the 相談事項 text box */}
        <p>
          {/* when the @ is enterd it should show the names list  */}
          <strong>@室田 大地 Murota Daichi</strong> さん
          <br />
          Selenium使ってスクレイピングしていますが、現在画ダウンロードにエラーが発生しています。
          Automationですると画像ダウンロードの際403エラーが発生します。後1日頑張って見ます、明日中に連絡します
        </p>

        <p>
          <br />
          {endGreetings.map((endGreeting, index) => (
            <strong key={index}>{endGreeting}</strong>
          ))}
          <br />
        </p>
      </div>
    </div>
  );
};

export default Report;
