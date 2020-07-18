/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// Getting `Nav Bar List` Element.
const navBarElement = document.querySelector('#navbar__list');
// Gettiing Sections Elements.
const sectionsList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Get current position of current section
const getSectionPosition = (section) => {
    return section?.getBoundingClientRect();
}

const isSectionInViewPort = (section) => {
    const currentSectionPosition = getSectionPosition(section);
    return currentSectionPosition.top < 50 && currentSectionPosition.bottom > 50;
}

const removeActiveClassFromSection = (section) => {
    section.classList.remove('your-active-class')
}

const addActiveClassToSection = (section) => {
    section.classList.add('your-active-class');
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const addHomeItem = () => {
    
    // Create Item Element & add it's attributes
    const homeItem = document.createElement('li');
    homeItem.className = 'navbar__item';

    // Create ItemAnchor Element & add it's attributes
    const homeAnchorElement = document.createElement('a');
    homeAnchorElement.className = 'menu__link';
    homeAnchorElement.textContent = 'Home';
    homeAnchorElement.setAttribute('href', '#navbar__list');
    homeAnchorElement.onclick = () => window.scroll(0, 0);

    // Add Anchor Element To List Item Element,
    // then add Home Element to Nav Bar
    homeItem.appendChild(homeAnchorElement);
    navBarElement.appendChild(homeItem);
}

// Call the method to execute
addHomeItem();

const navBarItemsBuilder = () => {
    // Create temp container.
    const tempDoc = document.createDocumentFragment();

    // Initialize some variables
    let sectionID;
    let sectionDataNav;
    let navBarItem;

    let itemAnchorElement;

    // Loop through `sections`
    sectionsList.forEach(section => {
        // get required section's data
        sectionID = section.id;
        sectionDataNav = section.getAttribute('data-nav');

        // Create Item Element & add it's attributes
        navBarItem = document.createElement('li');
        navBarItem.className = 'navbar__item';

        // Create ItemAnchor Element & add it's attributes
        itemAnchorElement = document.createElement('a');
        itemAnchorElement.className = 'menu__link';
        itemAnchorElement.setAttribute('href', `#${sectionID}`);
        itemAnchorElement.textContent = sectionDataNav;

        // Add Anchor Element To List Item Element,
        // then add Item Element to container
        navBarItem.appendChild(itemAnchorElement);
        tempDoc.appendChild(navBarItem);
    });

    // add that container to Nav Bar List
    navBarElement.appendChild(tempDoc);
}

// Call the method to execute
navBarItemsBuilder();

// Add class 'active' to section when near top of viewport

const handleSectionsActiveState = () => {

    sectionsList.forEach(section => {

        removeActiveClassFromSection(section);
        
        if (isSectionInViewPort(section)) {
            addActiveClassToSection(section);
        }
    });
}

window.addEventListener('scroll', handleSectionsActiveState);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


