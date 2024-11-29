// ウィンドウを開く関数
function openWindow(id) {
  const windowElement = document.getElementById(id);
  windowElement.style.display = "block";
  windowElement.style.animation = "fadeIn 0.5s";
}

// ウィンドウを閉じる関数
function closeWindow(id) {
  const windowElement = document.getElementById(id);
  windowElement.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    windowElement.style.display = "none";
  }, 500);
}
