let ball = document.getElementById("ball");
function diChuyen() {
    let x = parseInt(ball.style.left);
    ball.style.left =  x + 10 + "px";
}
function diChuyenLeft() {
    let x = parseInt(ball.style.left);
    ball.style.left =  x - 10 + "px";
}
function diChuyenTop() {
    let y = parseInt(ball.style.top);
    ball.style.top =  y - 10 + "px";
}
function diChuyenBottom() {
    let y = parseInt(ball.style.top);
    ball.style.top =  y + 10 + "px";
}
window.addEventListener("keydown", diChuyenKeydown);
function diChuyenKeydown(event) {
    switch (event.key) {
        case "ArrowRight":
            diChuyen();
            break;
        case "ArrowLeft":
            diChuyenLeft();
            break;
        case "ArrowUp":
            diChuyenTop();
            break;
        case "ArrowDown":
            diChuyenBottom();
            break;
        default:
            alert("Phím không hợp lệ!");
            break;
    
    }

}