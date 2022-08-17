import {
  dateTime, list, addList, contact, displaySection, inputSection, contactSection,
} from './variables.js';
import { myCollection } from './Collection.js';

// eslint-disable-next-line max-classes-per-file
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// eslint-disable-next-line import/prefer-default-export
export const addBook = (title, author) => {
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
      title = document.querySelector('.title').value;
      author = document.querySelector('.author').value;
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
};

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
