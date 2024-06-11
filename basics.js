function add(one = 1, two = 2, three = 3) {
    console.log(`${one}, ${two}, ${three}`);
    return 2;
}

// add();
// add(33, 23, 54);

const multiply = function(a, b, c) {
    const result = a * b * c;
    return result;
};

// console.log(multiply(1, 2, 3));

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     console.log(key); // Ключ
//     console.log(book[key]);  
//   }
  
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     }
//   ];

//   for (const book of books) {
//     console.log(book); // Об'єкт книги
//     console.log(book.title); // Назва
//     console.log(book.author); // Автор
//     console.log(book.rating); // Рейтинг
//   }


array = [1,1,1,1,1];
const arr = array.every(({name, id}) => {
    return value >= 0
}); 
console.log(arr);

// const a = [1, 2, 3, 10, 4, 5].every((value) => value >= 0); // false
// console.log(a);

  
  