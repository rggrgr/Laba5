//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(x, y, z){
	if (x+y+z >= x*y*z && x+y+z >= x*y+z)
        return x+y+z;
    if (x*y*z > x+y+z && x*y*z > x*y+z)
        return x*y*z; 
    if (x*y+z > x+y+z && x*y+z > x*y*z)
    	return x*y + z;
}

module.exports = f;