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

let myCollection = new Collection();

const addbtn = document.querySelector('.btn');
  addbtn.addEventListener('click', (e) => {
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    let newBook = new Book(title, author);
    myCollection.add(newBook);
    const display = document.getElementById('book-list');
    const div = document.createElement('div');
    div.classList = 'book';
    div.innerHTML = `<h2>${newBook.title}</h2><p>${newBook.author}</p><button class="remove">Remove</button>`;
    display.appendChild(div);
    
    e.preventDefault();

    // console.log(myCollection);
    // localStorage.setItem('myCollection', JSON.stringify(myCollection.books));
    const deletebtn = document.querySelectorAll('.remove');
    console.log(deletebtn);
    deletebtn.forEach(btn => {
      btn.addEventListener('click', (e) => {
        
        const book = e.target.parentElement;      
        myCollection.remove(book);
        book.remove();
        // localStorage.removeItem('myCollection');
        e.preventDefault();    
      });
    });
    title.value = '';
    author.value = '';
});
// });
// const getCollection = JSON.parse(localStorage.getItem('myCollection'));
// console.log(getCollection);


