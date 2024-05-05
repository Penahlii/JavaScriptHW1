/*1. İstifadəçidən adını soruşun və cavab olaraq ona "Salam, [adı]!" çap edin. */

const name = prompt("Enter your name: ");
console.log("Hello, " + name + "!");

/*2. İstifadəçidən doğum ilini soruşun, onun yaşını hesablayın və nəticəni çap edin. Cari il
kodda sabit olaraq qeyd edin*/

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function calculateAge(birthYear) {
  const age = currentYear - birthYear;
  return age;
}

const birthYear = prompt("Enter your birthday year: ");
const age = calculateAge(parseInt(birthYear));

console.log("Your age: " + age);

/*3. İstifadəçidən kvadratın bir tərəfinin uzunluğunu soruşun və bu kvadratın perimetrini çap
edin.*/

var sideLength = parseFloat(
  prompt("Enter the length of one side of the square: ")
);
var perimeter = 4 * sideLength;

console.log("Perimeter of the square: " + perimeter);

/*4. İstifadəçidən bir dairənin radiusunu soruşun və bu dairənin sahəsini çap edin.*/

var radius = parseFloat(prompt("Enter the radius of the circle: "));
var area = Math.PI * radius * radius;

console.log("Area of the circle: " + area);

/*5. İstifadəçidən iki şəhər arasındakı məsafəni kilometr cinsində və hansısa saatda çatmaq
istədiyini soruşun. Vaxtında çatmaq üçün lazım olan sürəti hesablayın.*/

var distance = parseFloat(prompt("Enter the distance: "));
var time = parseFloat(prompt("Enter the travel time(hour): "));
var speed = distance / time;

console.log(speed);

/*6. Valyuta çevirici tətbiq edin. İstifadəçi dollarları daxil edir, proqram onları avrolara çevirir.
Valyuta məzənnəsini bir sabitdə saxlayın.*/

const exchangeRate = 0.82;
var dollars = parseFloat(prompt("Enter the amount of dollars: "));
var euros = dollars * exchangeRate;
console.log(euros);

/*7. İstifadəçi flash sürücünün həcmi GB olaraq göstərir. Proqram 820 MB ölçüsündəki
faylların neçəsinin flash sürücünə sığacağını hesablayır.*/

var flashDriveCapacityGB = parseFloat(
  prompt("Enter the capacity of the flash drive in GB: ")
);
var flashDriveCapacityMB = flashDriveCapacityGB * 1024;
var fileSizeMB = 820;
var numberOfFiles = Math.floor(flashDriveCapacityMB / fileSizeMB);
console.log(numberOfFiles);

/*8. İstifadəçi cüzdanındakı pul miqdarını və bir cokoladka qiymətini daxil edir. Proqram
istifadəçinin neçə cokoladka ala biləcəyini və onun əlində qalan qalan pul miqdarını çap edir.*/

var money = parseFloat(prompt("Enter the amount of money: "));
var chocolatePrice = parseFloat(prompt("Enter the price of one chocolate: "));
var numberOfChocolates = Math.floor(walletAmount / chocolatePrice);
var remainingAmount = walletAmount - numberOfChocolates * chocolatePrice;
console.log(
  "You can buy " +
    numberOfChocolates +
    " chocolates and you will have " +
    remainingAmount +
    " money left"
);

/*9. İstifadəçidən üç rəqəmli bir ədəd soruşun və onu tərsinə çevirin. Həll etmək üçün%
operatorundan istifadə etməyiniz tələb olunur (bölmənin qalığı)*/

var number = parseInt(prompt("Enter a three-digit number: "));
var reversedNumber = 0;

while (number > 0) {
  reversedNumber = reversedNumber * 10 + (number % 10);
  number = Math.floor(number / 10);
}

console.log("Reversed number: " + reversedNumber);

/*10. İstifadəçidən bir tam ədəd soruşun və cavab olaraq onun cüt ədəd olub olmadığını çap
edin. Tapşırıqda mantıq operatorlarını istifadə edin. Şərt operatorları if və ya switch istifadə
etməyiniz tələb olunu*/

var number = parseInt(prompt("Enter an integer: "));

if (number % 2 == 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}
