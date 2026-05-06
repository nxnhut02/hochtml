let weight = prompt("Nhập cân nặng (kg):");
let height = prompt("Nhập chiều cao (m):");
let bmi = weight / (height * height);
alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2));

switch (true) {
    case (bmi < 18.5):
        alert('Underweight');
        break;
    case (bmi < 25.0):
        alert('Normal ');
        break;
    case (bmi < 30.0):
        alert('Overweight');
        break;
    default:
        alert('Obesity');
}