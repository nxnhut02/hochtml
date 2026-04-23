// let input = prompt("Nhập Điểm: ");
// if (input >= 5) {
//     alert("Đạt.");
// } else {
//     alert("Không đạt.");
// }

function xepLoai(a) {
    let input = a;
    // if (input >= 5) {
    //     console.log("Điểm: " + input + " - Đạt");
    // } else if (input < 5 && input >= 0) {
    //     console.log("Điểm: " + input + " - Không đạt");
    // } else {
    //     console.log("Điểm: " + input + " - Điểm không hợp lệ");
    // }
    if (input >= 0) {
        if (input >= 5) {
            console.log("Điểm: " + input + " - Đạt");
        } else if (input < 5) {
            console.log("Điểm: " + input + " - Không đạt");
        }
    } else {
        console.log("Vui lòng nhập điểm hợp lệ");
    }
}
// xepLoai(1);
// xepLoai(5);
// xepLoai(8);
// xepLoai(4);
xepLoai(-1);
