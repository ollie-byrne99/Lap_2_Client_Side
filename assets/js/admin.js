document.addEventListener('DOMContentLoaded', function() {

    const library = document.querySelector('#books');

    function createBookElement(book) {
        const {book_id, user_id, due_date, overdue} = book;

        const bookDiv = document.createElement('div');
        bookDiv.classList.add('libraryDiv');



        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        bookDiv.appendChild(descriptionDiv);

        const bookDetails = [
            `Book ID: ${book_id}`,
            `User ID: ${user_id}`,
            `Due Date: ${due_date}`,
            `Overdue: ${overdue}`,
        ];

        bookDetails.forEach(detail => {
            const p = document.createElement('p');
            p.textContent = detail;
            descriptionDiv.appendChild(p);
        });

        const btn = document.createElement('button');
        btn.classList.add('returnBtn');
        btn.setAttribute('data-book-id', book_id); 
        btn.textContent = 'Return';
        btn.addEventListener('click', handleReturn);
        bookDiv.appendChild(btn);

        return bookDiv;
    }

    function handleReturn(event) {
        const book_id = event.target.getAttribute('data-book-id');
        
   
        fetch(`https://book-wiz-jdyf.onrender.com/admin/${book_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}` 
            },
        })
        .then(response => {
            if (response.ok) {
                alert('Book returned successfully!');
                location.reload();
            } else {
                alert('Failed to return the book.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while processing the request.');
        });
    }


    function addBooks(books) {
        books.forEach(book => {
            const bookElement = createBookElement(book);
            library.appendChild(bookElement);
        });
    }


    const token = localStorage.getItem('token');

    fetch('https://book-wiz-jdyf.onrender.com/admin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        })
    .then(resp => {
        console.log('token', token)
        console.log('Response Status:', resp.status);
        if (!resp.ok) {
            throw new Error('Failed to fetch data');
        }
        return resp.json();
    })
    .then(data => {
        if (Array.isArray(data)) {
            addBooks(data);
        } else {
            console.error('Invalid response format:', data);
        }
    })
    .catch(err => console.log('Fetch Error:', err));
});
