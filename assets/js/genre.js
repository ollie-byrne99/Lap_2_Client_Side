const dropdown = document.getElementById('genreDropdown'); // Must create this element in library.html


dropdown.addEventListener('change', function() {
    const selectedValue = dropdown.value;

    const url = `https://book-wiz-jdyf.onrender.com/books/genre/${selectedValue}`; // url changes based on the value of the selected option in the genre dropdown menu
    
    const library = document.querySelector('#books');
    library.innerHTML = '';

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
