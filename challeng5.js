//МАССИВЫ И БАЗОВЫЕ МЕТОДА РАБОТЫ С НИМИ

//Задача 1

/* Пользователь отправляет сообщения в мессенджер, и нам нужно где - то их хранить.Для этого создайте массив и сохраните в нем сообщения в том порядке, в котором они приведены:

Привет! Есть ли новости ?
:)
Начал работать над заданием.
Ленюсь.
Но дело движется.

Повторить:
1. Создание нового массива.
2. Создание новых элементов массива.
3. Вывод сообщений в консоль. */

const array = [];

array.push("Привет! Есть ли новости?", ":)",
    "Начал работать над заданием.", "Ленюсь.", "Но дело движется.");

console.log(array);

//Задание 2

/* Пользователь написал сообщение “Готово!”. Нам необходимо добавить это сообщение в список сообщений.Затем пользователь отредактировал сообщение “Ленюсь” на “Стараюсь”, а затем удалил сообщение “:)”. Все эти изменения нужно отразить в исходном массиве.

Добавьте сообщение “Готово!” в конец массива из задания 1. Отредактируйте сообщение “Ленюсь” на “Стараюсь”. Удалите сообщение “:)” из массива.Напечатайте массив в консоль.

Повторить:
1. Методы работы с массивом.
2. Вывод в консоль.

Шаги по решению задачи:
1. Добавьте в конец уже имеющийся от прошлой задачи массива сообщение “Готово”.
2. Измените сообщение “Ленюсь” на “Стараюсь”.
3. Найдите индекс сообщения “:)” и удалите его.
4. Выведите массив в консоль. */

array.push("Готово!");

array[3] = "Стараюсь";

console.log(array);

array.splice(1, 1);

console.log(array)

//Задание 3

/* В прошлом задании мы удалили запись по индексу, но программа должна работать автоматически.Для этого программе нужно находить индекс удаляемого сообщения самостоятельно.Запишите сообщение, которое желает удалить пользователь, в переменную и найдите индекс сообщения.Если сообщение нашлось, то удалите его.

Повторить:
1. Создание переменных(let).
2. Индексы массива.
3. Методы работы с массивом.
4. Вывод сообщений в консоль.

Шаги по решению задачи:
1. Объявите переменную.
2. Запишите сообщение в эту переменную.
3. Найдите индекс необходимого сообщения.
4. Если сообщение нашлось в массиве, удалите найденное сообщение по индексу.Если нет — не делайте ничего.
5. Выведите получившийся массив в консоль. */

let message = "Начал работать над заданием."

//let us = array.indexOf(message);

if (array.indexOf(message) > 0) {
    array.splice(array.indexOf(message), 1)
}

console.log(array)