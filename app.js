const bookDiv = document.querySelector('#books > ul');
const form = document.querySelector('.add-book');

// list of books
const bookList = JSON.parse(localStorage.getItem('book_info'));

// read book item
function readValue() {
  bookDiv.innerHTML = '';

  if (bookList) {
    bookList.forEach((book, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${book.title_name}</span><br> 
         <span>${book.author_name}</span><br>
         <button data-id='${index}'>remove</button><hr>`;

      bookDiv.appendChild(li);
    });
  }
}

// create book item
function addBook(e) {
  e.preventDefault();
  bookList.push({
    title_name: form.elements.title.value,
    author_name: form.elements.author.value,
  });

  localStorage.setItem('book_info', JSON.stringify(bookList));
  readValue();
}

form.addEventListener('submit', (e) => addBook(e));

readValue();
