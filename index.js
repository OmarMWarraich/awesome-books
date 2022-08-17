import { dateTime, list, addList, contact, displaySection, inputSection, contactSection } from './modules/variables.js';
import  { myCollection } from './modules/Collection.js';
import { addBook } from './modules/addBook.js';



dateTime.innerHTML = new Date().toLocaleString();


addBook();

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
