// ウィンドウを開く関数
function openWindow(id) {
  const windowElement = document.getElementById(id);
  if (windowElement) {
    windowElement.style.display = "block";
    windowElement.style.animation = "fadeIn 0.5s";

    // ウィンドウの位置を画面内に調整
    const rect = windowElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 画面外に出ている場合の位置調整
    if (rect.right > viewportWidth) {
      windowElement.style.left = `${viewportWidth - rect.width}px`;
    }
    if (rect.bottom > viewportHeight) {
      windowElement.style.top = `${viewportHeight - rect.height}px`;
    }
    if (rect.left < 0) {
      windowElement.style.left = "0px";
    }
    if (rect.top < 0) {
      windowElement.style.top = "0px";
    }
  }
}

// ウィンドウを閉じる関数
function closeWindow(id) {
  const windowElement = document.getElementById(id);
  if (windowElement) {
    windowElement.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
      windowElement.style.display = "none";
    }, 500);
  }
}
