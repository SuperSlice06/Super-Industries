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
  
  function othemeSwitch() {
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
  
  
  

  
// The main function that changes the image and the language
function themeSwitch() {
    // Get the image element
    var element = document.body;
    const themeIcon = document.getElementById("theme-icon");
   
    // Get the current language from local storage or set it to "english" by default
    var currentLang = localStorage.getItem("theme") || "light";
        
    // Switch statement to change the image source and language based on the current language
    switch (currentLang) {
      case "dark":
        // Set the new language to "spanish" in local storage
        localStorage.setItem("theme", "dark");
        element.classList.toggle("dark-mode");
        themeIcon.classList.add("ri-moon-fill");
        themeIcon.classList.remove("ri-sun-fill");
   
        break;
      case "light":
        // Set the new language to "chinese" in local storage
        localStorage.setItem("theme", "light");
        element.classList.toggle("dark-mode");
        themeIcon.classList.add("ri-moon-fill");
        themeIcon.classList.remove("ri-sun-fill");
   
        break;
      default:
        // Set the new language to "english" in local storage
        localStorage.setItem("theme", "light");   
        break;
    }
  }
  