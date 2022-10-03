//Create Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};
//Create UI function
function UI(){};
//
UI.prototype.addBookToList = function(book){
      const list = document.getElementById('book-list');
      //create tr
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class='delete'>x</td>
      `

      list.appendChild(row)
      
}

UI.prototype.clearFields = function(book){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

UI.prototype.showAlert = function(message, classname){
    //create div 
    const div = document.createElement('div');
    // Add class
    div.className = `alert ${classname}`;
    // Add message
    div.appendChild(document.createTextNode(message));
    // Access form
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Place the div
    container.insertBefore(div, form);
     
     setTimeout(function(){
        document.querySelector('.alert').remove();
     }, 3000);

 
};
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove()
    };
}


//Add book to list
document.getElementById('book-form').addEventListener('submit',function(e){

    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn  =  document.getElementById('isbn').value;    
    //instansiate book
    const book = new Book(title,author,isbn);
    //instatiate ui
    const ui = new UI();

    if( title === ''|| author === ''|| isbn === ''){
     ui.showAlert('This is a problem', 'error')
    }
    else{
        ui.showAlert('The book list has been added', 'success');
        ui.addBookToList(book);
        ui.clearFields();
    }
   
 e.preventDefault();
})

// Delete book
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI()
    ui.deleteBook(e.target);
    ui.showAlert('Book deleted','success')
e.preventDefault();
})





 