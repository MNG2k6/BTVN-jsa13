// bai 1 : check so nguyen to 

// function checkNumber(number) {
//     let count = 0
//     for(let i = 1; i<=number; i++){
//         if(number % 1 == 0){
//             count += 1;
//         }
//     }
//     if(count === 2){
//         console.log("Day la so nguyen to");
//     } else {
//         console.log("Day khong phai la so nguyen to");
//     }
// }

// Cau 1 : tim so chan

function findEven() {
    for(let i = Math.floor(Math.random()*21)+4; 4<= i; i++){
        if((i % 2) === 0){
            document.write(`The even number is ${i}<br>`)
        } else if(i >20){
            break
        }
    }
}
findEven();

// Cau 3 : lam hinh tam giac

// function makeLine(length){
//     var line = "";
//     for(var l = 1; l <= length; l++){
//         line = line + "*";
//     }
//     return line + "\n";
// }

// function numberOneTriangle(x) {
//     var triangle = '';
//     for(i = 1; i <=x; i++) {
//         triangle += makeLine(i);
//     }
//     return triangle;
// }
// console.log(numberOneTriangle(4))
