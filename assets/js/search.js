document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search')
    const library = document.querySelector('#books')


    function createBookElement(book) {
        const {name, author, year, genre, description} = book;

        const bookDiv = document.createElement('div');
        bookDiv.classList.add('libraryDiv');

        const img = document.createElement('img');
        img.src = '../images/ollie.jpg';
        img.classList.add('bookPadding', 'bookCover');
        bookDiv.appendChild(img);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        bookDiv.appendChild(descriptionDiv);

        const bookDetails = [
            `Name: ${name}`,
            `Author: ${author}`,
            `Published: ${year}`,
            `Genre: ${genre}`,
            `Description: ${description}`
        ];

        bookDetails.forEach(detail => {
            const p = document.createElement('p');
            p.textContent = detail;
            descriptionDiv.appendChild(p);
        });
        console.log(bookDetails)
        const btn = document.createElement('button');
        btn.classList.add('borrowBtn');
        btn.textContent = 'Borrow';
        bookDiv.appendChild(btn);

        return bookDiv;
    }

    function addBooks(books) {
        books.forEach(book => {
            const bookElement = createBookElement(book);
            library.appendChild(bookElement);
        });
    }

    function getBookByKeyword(keyword) {
        fetch(`https://book-wiz-jdyf.onrender.com/books/search/${keyword}`)
        .then(resp => resp.json())
        .then(addBooks)
    }

    searchInput.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            getBookByKeyword(searchInput.value)
        } else if (e.key === 'Backspace') {
            library.innerHTML = ''
        }
    })

})
