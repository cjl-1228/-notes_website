function checkPassword(event) {
    event.preventDefault(); // 防止直接跳轉
    const correctPassword = "zaq1XSW@"; // 設定正確密碼
    const userInput = prompt("請輸入密碼：");

    if (userInput === correctPassword) {
        window.location.href = "web/Project/Project.html"; // 密碼正確才跳轉
    }
}