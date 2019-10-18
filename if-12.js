//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function digitName(n){
	switch(true){
		case n == 0:
			return "ZERO";
		case n == 1:
			return "ONE";
		case n == 2:
			return "TWO";
		case n == 3:
			return "THREE";
		case n == 4:
			return "FOUR";
		case n == 5:
			return "FIVE";
		case n == 6:
			return "SIX";
		case n == 7:
			return "SEVEN";
		case n == 8:
			return "EIGHT";
		case n == 9:
			return "NINE";
		case n > 9 || n < 0:
			return "ERROR";
	}
}

module.exports = digitName;