document.addEventListener('DOMContentLoaded', function() {
    
    const library = document.querySelector('#books');
    const url = "https://book-wiz-jdyf.onrender.com/books";

    function createBookElement(book) {
        const {id, name, author, year, genre, description, image} = book;

        const bookDiv = document.createElement('div');
        bookDiv.classList.add('libraryDiv');

        const img = document.createElement('img');
        img.src = image;
        img.classList.add('bookCover');
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
        btn.setAttribute('data-book-id', id); 
        btn.textContent = 'Borrow';
        btn.addEventListener('click', handleBorrow);
        bookDiv.appendChild(btn);

        return bookDiv;
    }

    function handleBorrow(event) {
        const bookId = event.target.getAttribute('data-book-id');
        
        const userId = '1';
    
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() + 1);
        const dueDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
    
        const data = {
            book_id: bookId,
            user_id: userId,
            due_date: dueDate
        };
    
        const token = localStorage.getItem('token');
    
        fetch('https://book-wiz-jdyf.onrender.com/borrowed', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Book borrowed successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, you must be logged in to borrow books.');
        });
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
