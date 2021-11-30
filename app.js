let input = document.getElementById('txt-search');
let books = document.getElementById('books');
let detail = document.getElementById('detail');


function addBook(image, title, author){
    let htmlBook = `
                        <div class="book">
                            <div class="image">
                                <img src="${image}" alt="">
                            </div>
                            <h3 class="title">${title}</h3>
                            <div class="author">author: ${author}</div>
                            <div class="footer-book">
                            <button class="buy">Buy</button>
                            <button id="detail">Detail</button>
                            </div>
                        </div>
            
                    `;
    books.innerHTML += htmlBook;
}
input.addEventListener('keyup',(el) => {
    let query = el.target.value;
    books.innerHTML = '<h1>Loading.....</h1>'
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then((res) =>{
            return res.json();
        })
        .then((data) => {
            books.innerHTML ="";
            for(let i=0; i < data.items.length; i++){
                addBook(
                    data.items[i].volumeInfo.imageLinks.thumbnail,
                    data.items[i].volumeInfo.title,
                    data.items[i].volumeInfo.authors
                    );
                }
        })
})

