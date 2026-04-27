let input = Number(prompt("Nhập tháng: ")); 

if (input >= 1 && input <= 12) {
    if (input == 1 || input == 3 || input == 5 || input == 7 || input == 8 || input == 10 || input == 12) {
        alert("Tháng " + input + " có 31 ngày.");
    } else if (input == 4 || input == 6 || input == 9 || input == 11) {
        alert("Tháng " + input + " có 30 ngày.");
    } else if (input == 2) {
        alert("Tháng " + input + " có 28 hoặc 29 ngày.");
    }
} else {
    alert("Vui lòng nhập tháng hợp lệ (1-12).");
}

// switch (input) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         alert("Tháng " + input + " có 31 ngày.");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         alert("Tháng " + input + " có 30 ngày.");
//         break;
//     case 2:
//         alert("Tháng " + input + " có 28 hoặc 29 ngày.");
//         break;
//     default:
//         alert("Vui lòng nhập tháng hợp lệ (1-12).");
//         break;
// }