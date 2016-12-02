var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var f = n.filter(function evenNumbers(number){
	return number % 2 == 0;
	});
console.log(f);
