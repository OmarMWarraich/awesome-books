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

// eslint-disable-next-line import/prefer-default-export
export const myCollection = new Collection();