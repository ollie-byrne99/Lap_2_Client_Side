const { renderDOM } = require('./helpers');

let dom;
let document;

describe('index.html', () => {
    beforeEach(async () => {
        dom = await renderDOM('./index.html')
        document = await dom.window.document
    })

    it('page title is "Home"', () => {
      const pageTitle = document.querySelector('title');
      expect(pageTitle.textContent).toBe('Home');
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

    it('h2 elements have correct text', () => {
      const h2Elements = document.querySelectorAll('h2');
      h2Elements.forEach(h2 => {
          if (h2.textContent === 'Books We Love') {
              expect(h2.textContent).toBe('Books We Love');
          } else if (h2.textContent === 'Harry Potter') {
              expect(h2.textContent).toBe('Harry Potter');
          } 
      });
    });

    it('ourFavourites section contains content', () => {
      const ourFavouritesSection = document.querySelector('#ourFavourites');
      expect(ourFavouritesSection).toBeTruthy();

      const content = ourFavouritesSection.textContent;
      expect(content).toBeTruthy();
    });

    it('ourFavourites section contains borrowDiv elements', () => {
      const borrowDivs = document.querySelectorAll('#ourFavourites .borrowDiv');
      expect(borrowDivs.length).toBeGreaterThan(0);
    });

    it('ourFavourites section contains elements with class "cover"', () => {
      const coverElements = document.querySelectorAll('#ourFavourites .cover');
      expect(coverElements.length).toBeGreaterThan(0);
    });

    it('section with id "harryPotter" contains content', () => {
      const harryPotterSection = document.querySelector('#harryPotter');
      expect(harryPotterSection).toBeTruthy();

      const content = harryPotterSection.textContent;
      expect(content).toBeTruthy();
    });

    it('harryPotter section contains borrowDiv elements', () => {
      const borrowDivs = document.querySelectorAll('#harryPotter .borrowDiv');
      expect(borrowDivs.length).toBeGreaterThan(0);
    });

    it('harryPotter section contains elements with class "cover"', () => {
      const coverElements = document.querySelectorAll('#harryPotter .cover');
      expect(coverElements.length).toBeGreaterThan(0);
    });

    it('images load', () => {
      const images = document.querySelectorAll('img');

        images.forEach(image => {
            expect(image.complete).toBeTruthy();
        });
    });

    it('images have appropriate alt attributes', () => {
      const images = document.querySelectorAll('img');

      images.forEach(image => {
          const altAttribute = image.getAttribute('alt');
          expect(altAttribute).toBeTruthy();
      });
    });

    it('footer contains the correct copyright text', () => {
      const footer = document.querySelector('footer');
      const copyrightText = footer.textContent;

      const expectedCopyrightText = ('BookWiz 2023');

      expect(copyrightText).toContain(expectedCopyrightText);
    });
})