class Collection {
  constructor(books) {
    this.books = [];
  }

  add(book) {
    this.books.push(book);
  }  

  remove(book) {
    this.books = this.books.filter(i => i !== book);
  }

  get(index) {
    return this.books[index];
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const myCollection = new Collection();
console.log(myCollection);

const title = document.querySelector('.title').value;
const author = document.querySelector('.author').value;
const addbtn = document.querySelector('.btn');

addbtn.addEventListener('click', (e) => {
  e.preventDefault();
  const display = document.getElementById('book-list');
  const div = document.createElement('div');
  div.classList = 'book';
  div.innerHTML = `<h2>${title}</h2><p>${author}</p><button class="delete">Delete</button>`;
  display.appendChild(div);
  myCollection.add(new Book(title, author));
  
  const deletebtn = document.querySelectorAll('.delete');
  deletebtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const book = e.target.parentElement;
      myCollection.remove(book);
      book.remove();
    }
    );
  });
});




// const deletebtn = document.querySelectorAll('.delete');

// deletebtn.forEach(function(btn) {
//   btn.addEventListener('click', function(e) {
//     e.preventDefault();
//     const book = e.target.parentElement;
//     book.remove();
//     myCollection.remove(book);
//   });
// });




// /* Save array of objects into local storage */
// // const saveData = () => {
// //   localStorage.setItem('savedData', JSON.stringify(book));
// // };

// /* Remove object from the array, local storage and UI */
// // const removeBook = (e) => {
// //   const bookId = e.target.parentNode.parentNode.id;
// //   if (bookId) {
// //     const bookIndex = book.findIndex((book) => book.id === bookId);
// //     book.splice(bookIndex, 1);
// //     saveData();
// //   }
// // }
    


// /* display book object on UI */
// const displayBook = (book) => {
//   if (book) {
//     book.forEach((b) => {
//       const bookList = document.getElementById('book-list');
//       const div = document.createElement('div');
//       div.className = 'book-list-item';
//       div.innerHTML = `
//         <p class="title">${b.title}</p>
//         <p class="author">${b.author}</p>
//         <hr>
//         <button class="remove">Remove</button>
//       `;
//       bookList.appendChild(div);
//       const remove = document.querySelector('.remove');
//       // console.log(remove);
//       remove.addEventListener('click', removeBook);
//       })
//     } 
//   }


// /* Add book object to array, local storage and UI */
// const addBook = (e) => {
//   e.preventDefault();
//   const title = document.querySelector('.title').value;
//   const author = document.querySelector('.author').value;
//   const newbook = {
//     title,
//     author,
//   };
//   book.push(newbook);
//   saveData(book);
//   displayBook(book);
//   // document.querySelector('book-list').reset();
//   // title = '';
//   // author = '';
// }


// /* add button */
// const addBtn = document.querySelector('.btn');
// addBtn.addEventListener('click', addBook);

// // window.onload = () => {
// //   const retreivedData = JSON.parse(localStorage.getItem('savedData'));
// //   if (retreivedData) {
// //     displayBook(retreivedData);
// //   }
// // }
