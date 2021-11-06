console.log("Asal sayı bulma")
function findPrime(...numbers) {
    let sayi
   for (let i = 0; i < numbers.length; i++) {
       sayi=0
       for (let j = 1; j <= numbers[i]; j++) {
          if (numbers[i]%j==0) {
              sayi++
          }
           }
        if (sayi==2) {
           console.log(numbers[i])
       } 
       }
     
 }
findPrime(2,3,5,4,11,19,6,7,8)

console.log("Arkadaş sayi bulma")
function friendsNumber(number1,number2) {
    let sayac=0
    for (let i = 1; i < number1; i++) {
        if (number1%i===0) {
            sayac=sayac+i
        }   
    }
    if (sayac===number2) {
        console.log(number1+" " +"ve"+" "+ number2 + " " +"Arkadaş sayılardır" )
        
    }
    else console.log("Arkadaş sayılar değiler "+number1+" " +"ve "+ number2)
    
}
friendsNumber(220,284);

console.log("1000 kadar Mükemmel sayıları bulma")
for (let i = 1000; i >=1; i--) {
    let sayac=0
    for (let j = 1; j <i; j++) {
        if (i%j===0) {
            sayac=sayac+j
        }
        
    }
    if (sayac===i) {
        console.log(i+" "+ "Mükemmel bir sayıdır")
    }
    
}
console.log("1000 kadar Tüm asal sayılar")
for (let i = 1; i <=1000; i++) {
    let sayac=0;
    for (let j = 1; j <=i; j++){
       if (i%j===0) {
           sayac++
       }
1       
    }
    if (sayac===2) {
        console.log(i+" "+ "Bir asal sayıdır");
    }
    
    
}