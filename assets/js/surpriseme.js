document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('https://book-wiz-jdyf.onrender.com/books/random');
        const data = await response.json();

        if (response.ok) {
            displayBookInfo(data);
        } else {
            console.error('Error fetching random book:', data.error);
        }
    } catch (error) {
        console.error('Error fetching random book:', error);
    }

    function displayBookInfo(book) {
        const {name, author, year, genre, description, image} = book; 
        
        const surpriseDiv = document.querySelector('.surpriseDiv');
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('surpriseDiv');

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
        btn.textContent = 'Borrow';
        bookDiv.appendChild(btn);
        surpriseDiv.appendChild(bookDiv)
    }
});
