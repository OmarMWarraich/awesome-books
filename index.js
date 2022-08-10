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
  let b1 = new Book(title, author);
  myCollection.add(b1);
  console.log(myCollection.books);
  const deletebtn = document.querySelectorAll('.delete');
  deletebtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const book = e.target.parentElement;      
      book.remove();
      console.log(myCollection.books);
    });
    myCollection.remove(b1);
  });
});



