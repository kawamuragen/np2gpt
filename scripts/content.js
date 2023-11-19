// スタイルシートを作成し、ドキュメントに追加します
let styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    .copyButtonStyle {
        display: inline-block;
        width: 110px;
        height: 39.63px;
        vertical-align: middle;
        background-color: #221F20;
        color: white;
        border-radius: 30px;
        margin-left: 6px;
    }
`;
document.head.appendChild(styleSheet);

// pick-control要素を選択します
let pickControlDiv = document.querySelector(".pick-control");

// COPYボタンを作成し、スタイルクラスを適用します
let copyButton = document.createElement("button");
copyButton.textContent = "COPY";
copyButton.className = "copyButtonStyle";

// 削除するクラス名のリストを定義します
let classesToRemove = [
  "authors", // 記事先頭の作者エリア
  "copyright-notation", // 記事下部の取材・執筆
  "np-article-block", // 記事中の別記事リンク
  "np-embedded", // 記事中のSNS埋め込み
  "np-heading-index", // 記事先頭の目次
  "np-image", // 記事中の画像エリア
];

// COPYボタンにクリックイベントリスナーを追加します
copyButton.addEventListener("click", function () {
  // 各クラス名に対して処理を実行します
  classesToRemove.forEach(function (className) {
    // 指定されたクラス名を持つすべての要素を選択します
    let elements = document.querySelectorAll("." + className);

    // 選択した要素をループで回し、それぞれを削除します
    elements.forEach(function (element) {
      element.remove();
    });
  });
});

// pick-control要素が存在する場合、COPYボタンを追加します
if (pickControlDiv) {
  pickControlDiv.appendChild(copyButton);
} else {
  console.error("The specified element was not found.");
}
