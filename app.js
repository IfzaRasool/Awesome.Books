class BooksCollection {
  constructor() {
    this.bookDiv = document.querySelector('#books > ul');
    this.form = document.querySelector('.add-book');
    this.bookList = [] || JSON.parse(localStorage.getItem('book_info'));
  }

  // read books to view
  readValue(books) {
    this.bookDiv.innerHTML = '';

    if (books) {
      books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${book.title_name}</span><br> 
         <span>${book.author_name}</span><br>
         <button class="remove-btn" data-id="${index}">remove</button><hr>`;

        this.bookDiv.appendChild(li);
      });
    }
  }

  // create book item
  addBook(e) {
    e.preventDefault();
    this.bookList.push({
      title_name: this.form.elements.title.value,
      author_name: this.form.elements.author.value,
    });

    // update local storage
    localStorage.setItem('book_info', JSON.stringify(this.bookList));
    this.readValue(this.bookList);

    // clear form
    this.form.elements.title.value = '';
    this.form.elements.author.value = '';
  }

  // remove book
  removeBook(btn) {
    this.bookList = this.bookList.filter(
      (book, index) => index !== Number(btn.dataset.id)
    );

    localStorage.setItem('book_info', JSON.stringify(this.bookList));
    this.readValue(this.bookList);
  }

  handleClick() {
    this.readValue(this.bookList);

    // event listeners
    this.form.addEventListener('submit', (e) => this.addBook(e));

    this.bookDiv.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-btn')) {
        this.removeBook(e.target);
      }
    });
  }
}

const bookObject = new BooksCollection();
bookObject.handleClick();
