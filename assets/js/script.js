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
    image.src = "./assets/Images/es.png";
    changeLang('es');

  } else if (image.src.endsWith("/assets/Images/es.png")) {
    image.src = "./assets/Images/cn.png";
    changeLang('zh');

  } else {
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
    welcome_message: 'Welcome to Super Industries!',
    aboutTitle: 'About me',
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    contactTitle: 'Contact me',
    contactNameLabel: 'Name',
    contactEmailLabel: 'Email',
    contactMessageLabel: 'Message',
    contactSubmitButton: 'Submit',
  },
  es: {
    welcome_message: '¡Bienvenidos a Super Industries!',
    aboutTitle: 'Sobre mí',
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    contactTitle: 'Contáctame',
    contactNameLabel: 'Nombre',
    contactEmailLabel: 'Email',
    contactMessageLabel: 'Mensaje',
    contactSubmitButton: 'Enviar',
  },
  zh: {
    welcome_message: '欢迎来到超级工业',
    aboutTitle: '关于我',
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    contactTitle: '联系我',
    contactNameLabel: '姓名',
    contactEmailLabel: '电子邮件',
    contactMessageLabel: '消息',
    contactSubmitButton: '提交',
  },
};







const langZH = {
  // Navbar
  'nav_logo': '超级工业',
  'nav_toggle_menu': '菜单',
  'nav_toggle_close': '关闭',
  'nav_link_about': '关于',
  'nav_dropdown_resources': '资源',
  'about_us': '关于我们',
  'nav_dropdown_support': '支持',
  'nav_dropdown_contact_us': '联系我们',
  'nav_dropdown_safety': '安全和质量',
  'nav_dropdown_cookie': 'Cookie设置',
  'nav_dropdown_privacy': '隐私政策',

  // Main Content
  'main_title': '欢迎来到超级工业！',
  'main_text': '我们是一家领先的技术和创新公司。我们的目标是创建尖端的产品，满足客户的需求并超越他们的期望。联系我们以了解更多关于我们的服务。'
};

const langES = {
  "welcome_message": "¡Bienvenidos a Super Industries!",
  "We are a leading company in the field of technology and innovation. Our goal is to create cutting-edge products that meet the needs of our customers and exceed their expectations. Contact us to learn more about our services.": "Somos una empresa líder en el campo de la tecnología y la innovación. Nuestro objetivo es crear productos de vanguardia que satisfagan las necesidades de nuestros clientes y superen sus expectativas. Contáctanos para obtener más información sobre nuestros servicios.",
  "About": "Sobre nosotros",
  "Resources": "Recursos",
  "about_us": "Sobre nosotros",
  "Support": "Soporte",
  "Contact us": "Contáctanos",
  "Safety and quality": "Seguridad y calidad",
  "Cookie settings": "Configuración de cookies",
  "Privacy Policy": "Política de privacidad",

};

