/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)

  toggle.addEventListener('click', () => {
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle', 'nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector('.dropdown__button')

  // 2. Select each button click
  dropdownButton.addEventListener('click', () => {
      // 7. Select the current show-dropdown class
      const showDropdown = document.querySelector('.show-dropdown')

      // 5. Call the toggleItem function
      toggleItem(item)

      // 8. Remove the show-dropdown class from other items
      if (showDropdown && showDropdown != item) {
          toggleItem(showDropdown)
      }
  })
})

const toggleItem = (item) => {
  // 3.1. Select each dropdown content
  const dropdownContainer = item.querySelector('.dropdown__container')

  // 6. If the same item contains the show-dropdown class, remove
  if (item.classList.contains('show-dropdown')) {
      dropdownContainer.removeAttribute('style')
      item.classList.remove('show-dropdown')
  } else {
      // 4. Add the maximum height to the dropdown content and add the show-dropdown class
      dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
      item.classList.add('show-dropdown')
  }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
  dropdownContainer = document.querySelectorAll('.dropdown__container')

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
  // Validate if the media query reaches 1118px
  if (mediaQuery.matches) {
      // Remove the dropdown container height style
      dropdownContainer.forEach((e) => {
          e.removeAttribute('style')
      })

      // Remove the show-dropdown class from dropdown item
      dropdownItems.forEach((e) => {
          e.classList.remove('show-dropdown')
      })
  }
}

addEventListener('resize', removeStyle)


/*=============== LIGHT AND DARK MODE ===============*/

   var element = document.body;
   const themeIcon = document.getElementById("theme-icon");

function themeSwitch() {
   element.classList.toggle("dark-mode");


  
            if(themeIcon.classList.contains("ri-sun-fill")){
                
                themeIcon.classList.remove("ri-sun-fill")
                localStorage.setItem("theme", "dark");
                themeIcon.classList.add("ri-moon-fill")
            } else {
                
                localStorage.setItem("theme", "light");
                themeIcon.classList.add("ri-sun-fill")
            }
 
}
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
   element.classList.toggle("dark-mode");
   themeIcon.classList.add("ri-moon-fill");
   themeIcon.classList.remove("ri-sun-fill");

}


/*=============== TRANSLATE ENGLISH AND SPANISH ===============*/




function langChange() {
  var image = document.getElementById("imgClickAndChange");

  if (image.src.endsWith("/assets/Images/us.png")) {
    localStorage.setItem("lang", "spanish");
    image.src = "./assets/Images/es.png";
    changeLang('es');

  } else if (image.src.endsWith("/assets/Images/es.png")) {
    localStorage.setItem("lang", "chinese");
    image.src = "./assets/Images/cn.png";
    changeLang('zh');

  } else {
    localStorage.setItem("lang", "english");
    image.src = "./assets/Images/us.png";
    changeLang('en');
    

  }

}
function changeLang(langKey) {


  var langg = lang[langKey];


  const elements = document.querySelectorAll('[data-lang]');
  
  elements.forEach((element) => {
    const key = element.dataset.lang;
    element.innerText = langg[key];
  });
}
  
const lang = {
  en: {
    // Header
    nav_link_title: 'Super Industries',
    nav_link_about: 'About',
    nav_dropdown_resources: 'Resources',
    // Navbar
    nav_dropdown_title__about_us: 'About Us',
    nav_dropdown_option__support: 'Support',
    nav_dropdown_option__contact_us: 'Contact Us',
    nav_dropdown_title__safety: 'Safety and Quality',
    nav_dropdown_option__cookie: 'Cookies Settings',
    nav_dropdown_option__privacy: 'Privacy Policy',  
    // Page
    welcome_message: 'Welcome to Super Industries!2',

  },
  es: {
    // Header
    nav_link_title: 'Súper Industrias',
    nav_link_about: 'Acerca de',
    nav_dropdown_resources: 'Recursos',
    // Navbar
    nav_dropdown_title__about_us: 'Acerca de Nosotros',
    nav_dropdown_option__support: 'Apoyo',
    nav_dropdown_option__contact_us: 'Contáctanos',
    nav_dropdown_title__safety: 'Seguridad y Calidad',
    nav_dropdown_option__cookie: 'Configuración de Cookies',
    nav_dropdown_option__privacy: 'Política de Privacidad',
    // Page
    welcome_message: 'Bienvenido a Súper Industrias!',
    },
  zh: {
    // Header
    nav_link_title: '超级工业',
    nav_link_about: '关于',
    nav_dropdown_resources: '资源',
    // Navbar
    nav_dropdown_title__about_us: '关于我们',
    nav_dropdown_option__support: '支持',
    nav_dropdown_option__contact_us: '联系我们',
    nav_dropdown_title__safety: '安全和质量',
    nav_dropdown_option__cookie: 'Cookie设置',
    nav_dropdown_option__privacy: '隐私政策',  
    // Page
    welcome_message: '欢迎来到超级工业',

  },
};

const currentLang = localStorage.getItem("lang");
var startupImage = document.getElementById("imgClickAndChange");

if (currentLang == "spanish") {
  startupImage.src = "./assets/Images/es.png";

  changeLang('es');


} if (currentLang == "chinese") {
  startupImage.src = "./assets/Images/cn.png";

  changeLang('zh');

}