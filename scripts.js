// ウィンドウを開く関数
function openWindow(id) {
  const windowElement = document.getElementById(id);
  windowElement.style.display = "block";
  windowElement.style.animation = "fadeIn 0.5s";

  // 外側クリックで閉じるためのリスナーを追加
  setTimeout(() => {
    document.addEventListener("click", handleOutsideClick);
  }, 0);
}

// ウィンドウを閉じる関数
function closeWindow(id) {
  const windowElement = document.getElementById(id);
  windowElement.style.display = "none";
  windowElement.style.animation = "fadeOut 0.5s";
}

// 外側クリックでウィンドウを閉じる
function handleOutsideClick(event) {
  const profileWindow = document.getElementById("profile-window");
  if (!profileWindow.contains(event.target)) {
    closeWindow("profile-window");
    document.removeEventListener("click", handleOutsideClick);
  }
}

// アカウント情報をコピーする関数
function copyAccount() {
  const text = "X: @_itofficial__\nInstagram: @_itofficial__\nBluesky: itofficial.bsky.social\nPortfolio: https://xfolio.jp/portfolio/_itofficial__";
  navigator.clipboard.writeText(text).then(() => {
    alert("アカウント情報がコピーされました！");
  });
}
