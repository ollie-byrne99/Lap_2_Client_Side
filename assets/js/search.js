const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', function() {
    const searchValue = searchBar.value.trim();

    const url = `https://book-wiz-jdyf.onrender.com/books/search/${searchValue}`;
    
    const library = document.querySelector('#books');
    library.innerHTML = '';

    function createBookElement(book) {
        const {name, author, year, genre, description, image} = book;

        const bookDiv = document.createElement('div');
        bookDiv.classList.add('libraryDiv');

        const img = document.createElement('img');
        img.src = image;
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

    fetch(url)
        .then(resp => resp.json())
        .then(addBooks)
        .catch(err => console.log(err));
});
