



// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
// Эта функция принимает в себя целое число со значением длины ребра куба. 
// Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

function calculateVolumeAndArea(edge) {
    if (Number.isInteger(edge) && edge > 0 ) {
        console.log(`Объем куба: ${edge * edge * edge}, площадь всей поверхности: ${edge * edge * 6}`)
    }
    else {
        console.log('При вычислении произошла ошибка')
    }
}

calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea('15');
calculateVolumeAndArea(-15);


// 2) Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение: "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:
// getCoupeNumber(33)  => 9
// getCoupeNumber(7)  => 2
// getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

function getCoupeNumber(num) {
    if (Number.isInteger(num) && num >= 0) {
        if (num != 0 && num <=36) {
            if (num % 4 == 0) {
                console.log(Math.floor(num / 4))
            }
            else {
                console.log(Math.floor(num / 4) + 1)
            }
        }
        else {
            console.log("Таких мест в вагоне не существует")
        }
    }
    else {
        console.log("Ошибка. Проверьте правильность введенного номера места")
    }
}

getCoupeNumber(33)
getCoupeNumber(7)
getCoupeNumber(300)
getCoupeNumber(0)
getCoupeNumber(7.7)
getCoupeNumber(-10)
getCoupeNumber('Hello')

// 3) Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

mass1 = [ 5, 10, 'Shopping', 20, 'Homework' ]


function massX2done(mass) {
    for (i in mass) {
        if (typeof(mass[i]) == 'string') {
            mass[i] += ' - done';
        }
        else if (typeof(mass[i]) == 'number') {
            mass[i] *= 2;
        }
    }
    return mass
}

console.log(massX2done(mass1))

// 4) Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// ВАЖНО: нельзя использовать функцию reverse у массива

data = [ 5, 10, 'Shopping', 20, 'Homework' ]
result = []

for (let i = data.length - 1; i >=0; i--) {
    result.push(data[i]);
}

console.log(result)

// 5) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

family0 = []
family = ['Peter', 'Ann', 'Alex', 'Linda']

function showFamily(mass) {
    if (mass.length == 0) {
        console.log('Семья пуста');
    }
    else {
        result = 'Семья состоит из: '
        for (i in mass) {
            result += mass[i] + ' ';
        }
        console.log(result)
    }
}

showFamily(family0)
showFamily(family)

// 6) Задания на поиск ошибок в коде
// У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. 
// Нужно исправить функции так, чтобы они давали всегда правильный результат. Все функции и объект написаны ниже

//     6.1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. 
//     Необходимо найти причины, написать причины в виде комментария и исправить их.

//     6.2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).
//         Сейчас функция работает, но постоянно выдает неправильный результат. 
//         Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причины, написать причины в виде комментария и исправить их.

const restorantData = {
    menu: [
      {
        name: 'Salad Caesar',
        price: '14$',
      },
      {
        name: 'Pizza Diavola',
        price: '9$',
      },
      {
        name: 'Beefsteak',
        price: '17$',
      },
      {
        name: 'Napoleon',
        price: '7$',
      },
    ],
    waitors: [
      { name: 'Alice', age: 22 },
      { name: 'John', age: 24 },
    ],
    averageLunchPrice: '20$',
    openNow: true,
  }
  
  function isOpen(prop) {
    let answer = ''
    prop ? (answer = 'Закрыто') : (answer = 'Открыто')
  
    return answer // очепятка
  }
  
  console.log(isOpen(restorantData.openNow)) // обращение
  
  function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1)/1 + sDish.price.slice(0, -1)/1 < average) { // забыли slice $ для sDish, type был string
      return 'Цена ниже средней'
    } else {
      return 'Цена выше средней'
    }
  }
  
  console.log(
    isAverageLunchPriceTrue(
      restorantData.menu[0],
      restorantData.menu[1],
      restorantData.averageLunchPrice
    )
  )
  
  function transferWaitors(data) {
    const copy = Object.assign({}, data)
  
    copy.waitors[0] = { name: 'Mike', age: 32 }
    return copy
  }
  
  transferWaitors(restorantData)


//   *** Усложненная задача - необязательная задача, но дающая сверху 1 балл к оценке за решение
//   Это одна из классических задач в программировании на формирование самых разных фигур при помощи кода.
//   Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:
  
//        *
//       ***
//      *****
//     *******
//    *********
//   ***********
  
//   Количество звездочек можете задавать напрямую в коде или через дополнительную переменную - не столь важно.
//   (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. 
//       В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС - это будет проверяться)

  let rows = 6; // количество строк

  for (let i = 1; i <= rows; i++) {
    let str = '';
    for (let j = 1; j <= rows - i; j++) {
      str += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += '*';
    }
    console.log(str);
  }