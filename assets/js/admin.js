document.addEventListener('DOMContentLoaded', function() {

    const url = `https://book-wiz-jdyf.onrender.com/admin/`;
    
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
                'Authorization': `Bearer ${token}` 
            },
        })
        .then(response => response.json())
        .then(data => {
            alert('Book returned successfully!');
            location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, you must be an admin to return books.');
        });
    }


    function addBooks(books) {
        books.forEach(book => {
            const bookElement = createBookElement(book);
            library.appendChild(bookElement);
        });
    }

    fetch(url)
    .then(resp => {
        console.log('Response Status:', resp.status);
        return resp.json();
    })
    .then(addBooks)
    .catch(err => console.log('Fetch Error:', err));
});
