const library = document.querySelector('#books')

const addBooks = data => {
    const books = data
    books.forEach(book => {
        const name = document.createElement('p')
        const br = document.createElement('br')
        const author = document.createElement('p')
        const year = document.createElement('p')
        const genre = document.createElement('p')
        const description = document.createElement('p')

        const image = document.createElement('img')
        
        const container = document.createElement('div')
        const div = document.createElement('div')

        const btn = document.createElement('button')

        container.classList.add('libraryDiv')
        div.classList.add('description')
        btn.classList.add('borrowBtn')
        image.classList.add('bookPadding')
        image.classList.add('bookCover')

        name.textContent = "Name: " + book.name
        author.textContent = "Author: " + book.author
        year.textContent= "Published: " + book.year
        genre.textContent = "Genre: " + book.genre
        description.textContent = "Description: " + book.description
        image.src = '../images/ollie.jpg'
        btn.textContent = "Borrow"

        div.appendChild(name)
        div.appendChild(author)
        div.appendChild(year)
        div.appendChild(genre)
        div.appendChild(description)
        
        container.appendChild(image)
        container.appendChild(div)
        container.appendChild(btn)

        library.appendChild(container)
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