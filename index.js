// eslint-disable-next-line max-classes-per-file
class Collection {
  // eslint-disable-next-line no-unused-vars
  constructor(books) {
    this.books = [];
  }

  add(book) {
    this.books.push(book);
  }

  remove(book) {
    this.books = this.books.filter((i) => i !== book);
  }

  get(index) {
    return this.books[index];
  }
}

// eslint-disable-next-line max-classes-per-file
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const myCollection = new Collection();

const addbtn = document.querySelector('.btn');
addbtn.addEventListener('click', (e) => {
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  if (title === '' || author === '') {
    // eslint-disable-next-line no-alert
    alert('Please fill in all fields');
  } else {
    const newBook = new Book(title, author);
    myCollection.add(newBook);
    const display = document.getElementById('book-list');
    const div = document.createElement('div');
    div.classList = 'book';
    div.innerHTML = `<h2>${newBook.title}</h2><p>${newBook.author}</p><button class="remove">Remove</button>`;
    display.appendChild(div);
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    e.preventDefault();
    localStorage.setItem('myCollection', JSON.stringify(myCollection.books));
    const deletebtn = document.querySelectorAll('.remove');

    deletebtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const book = e.target.parentElement;
        myCollection.remove(book);
        book.remove();
        localStorage.removeItem('myCollection');
        e.preventDefault();
      });
    });
  }
});
