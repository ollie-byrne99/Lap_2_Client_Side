const list = document.querySelector('#book-list')

const addBooks = data => {
    const books = data
    books.forEach(book => {
        const li = document.createElement('li')
        li.textContent = book.name
        list.appendChild(li)
    })
}

const url = "https://book-wiz-jdyf.onrender.com/books"

const fetchBooks = () => {
    fetch(url)
        .then(resp => resp.json())
        .then(addBooks)
        // .then(data => console.log(data))
    .catch(err => {
        console.log(err)
    })
}

fetchBooks()