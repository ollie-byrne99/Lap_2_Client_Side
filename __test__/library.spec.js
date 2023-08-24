const { renderDOM } = require('./helpers');

let dom;
let document;

describe('library.html', () => {
    beforeEach(async () => {
        dom = await renderDOM('./assets/html/library.html');
        document = await dom.window.document;
    });

    it('page title is "Library"', () => {
        const pageTitle = document.querySelector('title');
        expect(pageTitle.textContent).toBe('Library');
    });

    it('h1 contains the text "BookWiz"', () => {   
        const h1 = document.querySelector('h1');
        expect(h1.textContent).toBe('BookWiz');
    });
  
    it('home link has correct URL', () => {
        const homeLink = document.querySelector('nav a[aria-label="Home"]');
        expect(homeLink.getAttribute('href')).toMatch(/^(\.|http)/);
    });
    
    it('library link has correct URL', () => {
       const libraryLink = document.querySelector('nav a[aria-label="Library"]');
        expect(libraryLink.getAttribute('href')).toMatch(/^(\.|http)/);
    });
  
    it('surprise Me! link has correct URL', () => {
        const surpriseLink = document.querySelector('nav a[aria-label="Surprise Me!"]');
        expect(surpriseLink.getAttribute('href')).toMatch(/^(\.|http)/);
    });
    
    it('about link has correct URL', () => {
        const aboutLink = document.querySelector('nav a[aria-label="About"]');
        expect(aboutLink.getAttribute('href')).toMatch(/^(\.|http)/);
    });
    
    it('login link has correct URL', () => {
        const loginLink = document.querySelector('nav a[aria-label="Login"]');
        expect(loginLink.getAttribute('href')).toMatch(/^(\.|http)/);
    });
    
    it('register link has correct URL', () => {
        const registerLink = document.querySelector('nav a[aria-label="Register"]');
        expect(registerLink.getAttribute('href')).toMatch(/^(\.|http)/);
    });
    
    it('log out link has correct URL', () => {
        const logoutLink = document.querySelector('nav a[aria-label="Log Out"]');
        expect(logoutLink.getAttribute('href')).toMatch(/^(\.|http)/);
    });
  
    it('search bar is present and has correct placeholder', () => {
        const searchBar = document.querySelector('#searchBar');
        expect(searchBar).toBeTruthy();
    
        const placeholderText = 'Search for book or author...';
        expect(searchBar.getAttribute('placeholder')).toBe(placeholderText);
    });
  
    it('sections with main class contain content', () => {
        const mainSections = document.querySelectorAll('section.main');
        expect(mainSections.length).toBeGreaterThan(0);
  
        mainSections.forEach(section => {
            const content = section.textContent;
            expect(content).toBeTruthy();
        });
    });
      
    it('h2 contains the text "Library"', () => {
        const h2 = document.querySelector('h2');
        expect(h2.textContent).toBe('Library');
    });

    it('admin button links to admin.html', () => {
        const adminDiv = document.querySelector('#admin');
        const adminButton = adminDiv.querySelector('#adminBtn');
        const adminLink = adminButton.querySelector('#adminLink');
    
        expect(adminDiv).toBeTruthy();
        expect(adminButton).toBeTruthy();
        expect(adminLink).toBeTruthy();
        expect(adminLink.getAttribute('href')).toBe('./admin.html');
    });

    it('genre dropdown has correct options', () => {
        const genreDropdown = document.querySelector('#genreDropdown');
        expect(genreDropdown).toBeTruthy();

        const options = genreDropdown.querySelectorAll('option');
        expect(options.length).toBeGreaterThan(0);
    });

    it('footer contains the correct copyright text', () => {
        const footer = document.querySelector('footer');
        const copyrightText = footer.textContent;
  
        const expectedCopyrightText = ('BookWiz 2023');
  
        expect(copyrightText).toContain(expectedCopyrightText);
      });
});