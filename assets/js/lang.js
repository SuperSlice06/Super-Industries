
// The main function that changes the image and the language
function langChange() {
  // Get the image element
  var image = document.getElementById("imgClickAndChange");
  
  // Get the current language from local storage or set it to "english" by default
  var currentLang = localStorage.getItem("lang") || "english";
  
  // Get the new path for the image source
  var newPath = pathLocation();
  
  // Switch statement to change the image source and language based on the current language
  switch (currentLang) {
    case "spanish":
      // Set the new language to "spanish" in local storage
      localStorage.setItem("lang", "spanish");
      // Change the image source to the Spanish flag
      image.src = newPath + "assets/Images/es.png";
      // Call the changeLang function with the language key "es"
      changeLang('es');
      break;
    case "chinese":
      // Set the new language to "chinese" in local storage
      localStorage.setItem("lang", "chinese");
      // Change the image source to the Chinese flag
      image.src = newPath + "assets/Images/cn.png";
      // Call the changeLang function with the language key "zh"
      changeLang('zh');
      break;
    default:
      // Set the new language to "english" in local storage
      localStorage.setItem("lang", "english");
      // Change the image source to the English flag
      image.src = newPath + "assets/Images/us.png";
      // Call the changeLang function with the language key "en"
      changeLang('en');
      break;
  }
}

// The function that determines the new path for the image source
function pathLocation() {
  // Get the current URL path
  var path = window.location.pathname;
  
  // Split the path into an array of subdirectories
  var pathArray = path.split("/");
  
  // Initialize the new path
  var newPath = "";
  
  // Get the index of the "Super-Industries" directory in the path array
  var barIndex = pathArray.indexOf("Super-Industries");
  
  // If the "Super-Industries" directory is found, concatenate the subdirectories
  // into a new path, including the "Super-Industries" directory
  if (barIndex !== -1) {
    for (var i = 0; i < barIndex; i++) {
      newPath += pathArray[i] + "/";
    }
    newPath += "Super-Industries/";
  } 
  // If the "Super-Industries" directory is not found, set the new path to the root directory
  else {
    newPath = "/";
  }
  
  // Return the new path
  return newPath;
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
var newPath = pathLocation();

if (currentLang == "spanish") {
  startupImage.src = newPath + "assets/Images/es.png";
  changeLang('es');


}
if (currentLang == "chinese") {
  startupImage.src = newPath + "assets/Images/cn.png";
  changeLang('zh');

}
