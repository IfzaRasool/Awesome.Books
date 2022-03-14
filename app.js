const inputTitle=document.querySelector("#title");
const inputauthor=document.querySelector("#author");
const Books=document.querySelector("#books > ul");
const AddBtn=document.querySelector(".add-btn");

AddBtn.addEventListener("click", createItem);
const myArray =[];


function createItem() {
    myArray.push({
        title_name: document.getElementById('title').value,
        author_name: document.getElementById('author').value,
    });
    localStorage.setItem("book_info",JSON.stringify(myArray));
    readValue();
  }

  function readValue() {
    var x = JSON.parse(localStorage.getItem("book_info"));
    console.log(x);
    x.forEach(element => {
       let li = document.createElement("li");
       li.innerHTML=`<span>${element.title_name}</span><br> 
       <span>${element.author_name}</span><br>
       <button>remove</button><hr>`
       Books.appendChild(li);   
    });
   
  }
  readValue();
 