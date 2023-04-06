
function langChange() {
  var image = document.getElementById("imgClickAndChange");

  if (image.src.endsWith("assets/Images/us.png")) {
    localStorage.setItem("lang", "spanish");
    image.src = "/assets/Images/es.png";
    changeLang('es');

  } else if (image.src.endsWith("assets/Images/es.png")) {
    localStorage.setItem("lang", "chinese");
    image.src = "/assets/Images/cn.png";
    changeLang('zh');

  } else {
    localStorage.setItem("lang", "english");
    image.src = "/assets/Images/us.png";
    changeLang('en');
    

  }
  //console.log(image.src)

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
    welcome_message: 'Welcome to Super Industries!',

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
  startupImage.src = "/assets/Images/es.png";

  changeLang('es');


} if (currentLang == "chinese") {
  startupImage.src = "/assets/Images/cn.png";

  changeLang('zh');

}