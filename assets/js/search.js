// make variables available to all functions
const searchInput = document.querySelector('.search')
const displayArea = document.querySelector('#books')
const searchBtn = document.querySelector('#searchBtn')

const bookName = document.createElement('p')
const br = document.createElement('br')
const author = document.createElement('p')
const year = document.createElement('p')
const genre = document.createElement('p')
const description = document.createElement('p')
const image = document.createElement('img')
const container = document.createElement('div')
const div = document.createElement('div')
const btn = document.createElement('button')

// gets function by id - will need to change to name/author

function getBookById(id) {
    fetch(`https://book-wiz-jdyf.onrender.com/books/${id}`)
        .then(resp => resp.json())
        .then(data => {
            const book = data
            container.classList.add('libraryDiv')
            div.classList.add('description')
            btn.classList.add('borrowBtn')
            image.classList.add('bookPadding')
            image.classList.add('bookCover')

            bookName.textContent = "Name: " + book.name
            author.textContent = "Author: " + book.author
            year.textContent= "Published: " + book.year
            genre.textContent = "Genre: " + book.genre
            description.textContent = "Description: " + book.description
            image.src = '../images/ollie.jpg'
            btn.textContent = "Borrow"

            div.appendChild(bookName)
            div.appendChild(author)
            div.appendChild(year)
            div.appendChild(genre)
            div.appendChild(description)
            
            container.appendChild(image)
            container.appendChild(div)
            container.appendChild(btn)

            displayArea.appendChild(container)
        })
        .catch(err => {
            console.log(err)
            console.log("book does not exist")
            displayArea.removeChild(container)
            container.textContent = "book does not exist"
            displayArea.appendChild(container)
        })
}



// Update data/book on page

const updateData = () => {
    displayArea.removeChild(container)
}

searchInput.addEventListener("keyup", (e) => {
    if (e.key === 'Backspace') {
        updateData()
    }
})

// if wanted to add a button to page
// searchBtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log(`line 70 ${searchInput.value}`)
//     const id = parseInt(searchInput.value)
//     getBookById(id)
// })

// when user presses enter, the book is displayed on page

searchInput.addEventListener("keydown", (e) => {
    
    if (e.key === 'Enter') {
        e.preventDefault()
        getBookById(searchInput.value)
    }
})
