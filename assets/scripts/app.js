// Header
const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");

sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

// DarkMod
function setDarkMode() {
  body.classList.add("dark");
  darkLight.classList.replace("bx-sun", "bx-moon");
  localStorage.setItem("theme", "dark");
}
function setLightMode() {
  body.classList.remove("dark");
  darkLight.classList.replace("bx-moon", "bx-sun");
  localStorage.setItem("theme", "light");
}
darkLight.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    setLightMode()
  } else {
    setDarkMode();
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }
});

// Afficher/enlever fichier 
let documentOuvert = false;
let documentActuel = '';

function toggleDocument(documentURL) {
  const documentEmbed = document.getElementById('documentEmbed');
  
  if (documentOuvert && documentActuel === documentURL) {
    documentEmbed.style.display = 'none';
    documentOuvert = false;
    documentActuel = '';
  } else {
    documentEmbed.setAttribute('src', documentURL);
    documentEmbed.style.display = 'block';
    documentOuvert = true;
    documentActuel = documentURL;
  }
}


// Autre
submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

