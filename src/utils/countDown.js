// Напишите функцию countDown(n), которая получает число {n} в качестве аргумента 
// и печатает в консоль обратный отсчет, начиная с этого числа. 
// Например, countDown(3) напечатает: 3 2 1.

export function countDown(n) {
  let res = '';
    if(typeof n == 'string') {
      return 'Ошибка! Введена строка. Введите число';
    } else if (typeof n == 'boolean') {
      return 'Ошибка! Введен булевый тип. Введите число';
    } else if (typeof n != 'number') {
      return 'Ошибка! Введите число';
    } else {
      for (let i = n; i >= 1; i--) {
        res += i;
      } 
      return res;
    }
  };
  
  countDown(null);