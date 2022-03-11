const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//img
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img']

const ctaImg = document.querySelector('#cta-img');

ctaImg.src = siteContent.images['cta-img'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent.images['accent-img'];


//footer link

const footerLink= document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add('bold')

//contact section

const contact = document.querySelector('.contact');
contact.querySelector('h4').textContent = siteContent.contact['contact-h4'];

// you can use children[0] for h4
contact.children[1].textContent = siteContent.contact['address'];
contact.children[2].textContent = siteContent.contact['phone'];
contact.children[3].textContent = siteContent.contact['email'];

//Top 

const topContent = document.querySelector('.top-content')

topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4']
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content']
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4']
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content']

//bottom content

const bottomContent = document.querySelector('.bottom-content')



//It is easier to separate header and p tags
const headerBottom = bottomContent.querySelectorAll('h4')

headerBottom[0].textContent = siteContent['main-content']['services-h4']
headerBottom[1].textContent = siteContent['main-content']['product-h4']
headerBottom[2].textContent = siteContent['main-content']['vision-h4']

//p tags
const pBottom = bottomContent.querySelectorAll('p')

pBottom[0].textContent = siteContent['main-content']['services-content']
pBottom[1].textContent = siteContent['main-content']['product-content']
pBottom[2].textContent = siteContent['main-content']['vision-content']



//CTA


const h1 = document.querySelector('h1')
h1.textContent = siteContent['cta']['h1']

const button = document.querySelector('button')
button.textContent = siteContent['cta']['button']


//NAV

//possible
 const navText = Object.values(siteContent.nav);
 const navLinks = document.querySelectorAll('header nav a')

  navLinks.forEach((link, idx) => {
    link.textContent = navText[idx];
    link.classList.add('italic');
  })



/*
navLinks[0].textContent = siteContent.nav['nav-item-1']
navLinks[1].textContent = siteContent.nav['nav-item-2']
navLinks[2].textContent = siteContent.nav['nav-item-3']
navLinks[3].textContent = siteContent.nav['nav-item-4']
navLinks[4].textContent = siteContent.nav['nav-item-5']
navLinks[5].textContent = siteContent.nav['nav-item-6']



navLinks[0].classList.add('italic')
navLinks[1].classList.add('italic')
navLinks[2].classList.add('italic')
navLinks[3].classList.add('italic')
navLinks[4].classList.add('italic')
navLinks[5].classList.add('italic')
*/
