const bookDiv = document.querySelector('#books > ul');
const form = document.querySelector('.add-book');

// list of books
let bookList = JSON.parse(localStorage.getItem('book_info'));

// read books to view
function readValue(books) {
  bookDiv.innerHTML = '';

  if (books) {
    books.forEach((book, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${book.title_name}</span><br> 
         <span>${book.author_name}</span><br>
         <button class="remove-btn" data-id="${index}">remove</button><hr>`;

      bookDiv.appendChild(li);
    });
  }
}

readValue(bookList);

// create book item
function addBook(e) {
  e.preventDefault();
  bookList.push({
    title_name: form.elements.title.value,
    author_name: form.elements.author.value,
  });

  // update local storage
  localStorage.setItem('book_info', JSON.stringify(bookList));
  readValue(bookList);

  // clear form
  form.elements.title.value = '';
  form.elements.author.value = '';
}

// remove book
function removeBook(btn) {
  bookList = bookList.filter((book, index) => index !== Number(btn.dataset.id));

  localStorage.setItem('book_info', JSON.stringify(bookList));
  readValue(bookList);
}

// event listeners
form.addEventListener('submit', (e) => addBook(e));

bookDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    removeBook(e.target);
  }
});
