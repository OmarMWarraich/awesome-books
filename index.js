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

const dateTime = document.querySelector('.date-time');
dateTime.innerHTML = new Date().toLocaleString();
const list = document.getElementById('list');
const addList = document.getElementById('add');
const contact = document.getElementById('contact');
const displaySection = document.getElementById('book-list');
const inputSection = document.querySelector('.book-input');
const contactSection = document.querySelector('.contact-section');

const myCollection = new Collection();

list.addEventListener('click', (e) => {
  list.style.color = 'blue';
  addList.style.color = 'black';
  contact.style.color = 'black';
  dateTime.style.display = 'block';
  displaySection.style.display = 'block';
  inputSection.style.display = 'none';
  contactSection.style.display = 'none';
  e.preventDefault();
});

addList.addEventListener('click', (e) => {
  addList.style.color = 'blue';
  list.style.color = 'black';
  contact.style.color = 'black';
  dateTime.style.display = 'block';
  displaySection.style.display = 'none';
  contactSection.style.display = 'none';
  inputSection.style.display = 'block';
  inputSection.innerHTML = `
                          <br>
                          <input type="text" name="title"  class ="title" placeholder="Title" required>
                          <br><br>
                          <input type="text" name="title"  class="author" placeholder="Author" required>
                          <br><br>
                          <button type="submit" class="btn">Add</button>
`;
  e.preventDefault();

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
      div.innerHTML = `<div>"${newBook.title}" by ${newBook.author}</div><div><button class="remove">Remove</button></div>`;
      display.appendChild(div);
      document.querySelector('.title').value = '';
      document.querySelector('.author').value = '';
      e.preventDefault();
      localStorage.setItem('Collection', JSON.stringify(myCollection.books));

      const deletebtn = document.querySelectorAll('.remove');

      deletebtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const book = e.target.parentElement.parentElement;
          myCollection.remove(book);
          book.remove();
          e.preventDefault();
        });
      });
    }
  });
});

contact.addEventListener('click', (e) => {
  contact.style.color = 'blue';
  list.style.color = 'black';
  addList.style.color = 'black';
  displaySection.style.display = 'none';
  inputSection.style.display = 'none';
  dateTime.style.display = 'none';
  contactSection.style.display = 'flex';
  contactSection.innerHTML = `<h1>Contact</h1>
                              <p>Do you have any questions or you just want to say "Hello"? <br> You can reach out to us!<p>
                              <br>
                              <ul>
                                  <li>Our email: mail@mail.com</li>
                                  <li>Our phone: +1 (123) 456-7890</li>
                                  <li>Our address: 123 Main St, Anytown, USA</li>
                              </ul>
                              `;
  e.preventDefault();
});

window.onload = () => {
  const storedBooks = JSON.parse(localStorage.getItem('Collection'));
  if (storedBooks) {
    storedBooks.forEach((book) => {
      const display = document.getElementById('book-list');
      const div = document.createElement('div');
      div.classList = 'book';
      div.innerHTML = `<div>"${book.title}" by ${book.author}</div><div><button class="remove">Remove</button></div>`;
      display.appendChild(div);
    });
  }
  const deletebtn = document.querySelectorAll('.remove');
  deletebtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const book = e.target.parentElement.parentElement;
      myCollection.remove(book);
      book.remove();
      e.preventDefault();
    });
  });
};
