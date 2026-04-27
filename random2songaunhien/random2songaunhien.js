let a = parseInt(prompt("Nhập a"));
let b = parseInt(prompt("Nhập b"));

let c = Math.floor(Math.random() * (b - a + 1)) + a;

document.write(`Số ngẫu nhiên từ ${a} đến ${b} là: ${c}`);