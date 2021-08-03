const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const closeIcon1 = document.querySelector('.menu-icon1');
const closeIcon2 = document.querySelector('.menu-icon2');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  closeIcon1.classList.toggle('d-none');
  closeIcon2.classList.toggle('d-none');
});

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    closeIcon1.classList.toggle('d-none');
    closeIcon2.classList.toggle('d-none');
  });
});

// Organizers Data

const organizers = [
  {
    imgURL: './Images/persons/me.jpg',
    organizerName: 'Hamza Ellaouzi',
    organizerJob: 'Civil engineer and travelling lover, Morocco',
    organizerBio: ' I am passionate about everything related to web development. I follow-up on the most recent changes in web development and I am very active in the open source environment. Besides as a Geotechnical engineer I love travelling! Every year I take my backpack and spend 3 weeks somewhere around my country to edit video and photography.',
  },
  {
    imgURL: './Images/persons/perso1.jpg',
    organizerName: 'Carlos Feliz',
    organizerJob: 'Archticture and travelling lover, dominican republic',
    organizerBio: ' I truly believe that Work and Travel changed my life. And I have been telling this to people for quite some time now. I would not be where I am if not for this experience. ',
  },
  {
    imgURL: './Images/persons/perso2.jpg',
    organizerName: 'Sara Debois',
    organizerJob: 'Full stack developer and Hiker, Paris-France',
    organizerBio: ' I have graduated with my master degree in computer science, and now I am a student in Microverse Program. Being in the France helped me a lot in order to understand how people from different cultures interact, how they see the world, and how their visions [and] language shape the world they see.',
  },
  {
    imgURL: './Images/persons/perso3.jpg',
    organizerName: 'Anna Herbert',
    organizerJob: 'Front end developer and camping lover, Germany',
    organizerBio: ' I am passionate about everything related to web development and new technologies. Besides as a Geotechnical engineer I love travelling! Every year I take my backpack and spend 3 weeks somewhere around my country to edit video and photography.',
  },
  {
    imgURL: './Images/persons/perso4.jpeg',
    organizerName: 'Samantha smith',
    organizerJob: 'Robby on rails developer and travelling lover, Canada',
    organizerBio: 'After I came back from Canada to my home country, Chile, I found a job right away and a great job, because I applied several of my new skills. After one year, I got promoted and I am sure that the Au Pair experience helped me to succeed.',
  },
  {
    imgURL: './Images/persons/perso5.jpeg',
    organizerName: 'Robby Handerson',
    organizerJob: 'World explorer, Colombia',
    organizerBio: ' People sometimes refer to me as an explorer, but I am not. Those who follow maps are adventurers, those who wrote the maps were the explorers. Besides as a Geotechnical engineer I love travelling! Every year I take my backpack and spend 3 weeks somewhere around my country to edit video and photography.',
  },
];

const organizerDiv = document.createElement('div');

const addOrganizer = () => {
  organizerDiv.id = 'organizers';
  for (let i = 0; i < organizers.length; i += 1) {
    organizerDiv.innerHTML += '<article class="organizer d-flex">'
+ `<img src="${organizers[i].imgURL}" alt="organizer image">`
+ '<div class="organizer-info d-flex flex-dir-col">'
+ `<h4 class="organizer-name">${organizers[i].organizerName}</h4>`
+ `<h5 class="organizer-job color-primary">${organizers[i].organizerJob}</h5>`
+ '<hr>'
+ `<p class="organizer-bio">${organizers[i].organizerBio}</p>`
+ '</div>'
+ '</article>';
  }
  document.getElementById('organizers-container').appendChild(organizerDiv);
};

addOrganizer();