// テキストをコピーする関数
function copyText(text, alertMessage) {
    navigator.clipboard.writeText(text).then(() => {
        showAlert(alertMessage);
    });
}

// アラートを表示する関数
function showAlert(message) {
    // アラートボックスを作成
    const overlay = document.createElement("div");
    overlay.className = "alert-overlay";
    overlay.onclick = () => document.body.removeChild(overlay);

    const alertBox = document.createElement("div");
    alertBox.className = "alert-box";
    alertBox.innerHTML = `<p>${message}</p>`;

    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);
}

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
    windowElement.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        windowElement.style.display = "none";

        // 外側クリックのリスナーを解除
        document.removeEventListener("click", handleOutsideClick);
    }, 500);
}

// 外側クリックでウィンドウを閉じる処理
function handleOutsideClick(event) {
    const windows = document.querySelectorAll(".window");
    windows.forEach((windowElement) => {
        if (windowElement.style.display === "block" && !windowElement.contains(event.target)) {
            closeWindow(windowElement.id);
        }
    });
}
