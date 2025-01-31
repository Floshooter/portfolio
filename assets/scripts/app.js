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
  darkLight.classList.toggle("dark-mode-animation");
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
  
  
  documentEmbed.setAttribute('src', documentURL);
  documentEmbed.style.display = 'block';
  closeBtn.style.display = "block";
  closeBtn1.style.display = "block";
  closeBtn2.style.display = "block";
  documentOuvert = true;
  documentActuel = documentURL;
  
}
function closeDocument() {
  const documentEmbed = document.getElementById('documentEmbed');
  const closeBtn = document.getElementById('closeBtn');
  const closeBtn1 = document.getElementById('closeBtn1'); 
  const closeBtn2 = document.getElementById('closeBtn2'); 

  documentEmbed.style.display = 'none';
  closeBtn.style.display = 'none';
  closeBtn1.style.display = 'none'; 
  closeBtn2.style.display = 'none';
  documentOuvert = false;
  documentActuel = '';
}

// Affichage de l'entreprise
const entreprises = document.querySelectorAll('.entreprise');
let currentIndex = 0;

function showEntreprise(index) {
    entreprises.forEach((entreprise, i) => {
        if (i === index) {
            entreprise.style.display = 'block';
        } else {
            entreprise.style.display = 'none';
        }
    });
}

function previousEntreprise() {
    currentIndex = (currentIndex - 1 + entreprises.length) % entreprises.length;
    showEntreprise(currentIndex);
}

function nextEntreprise() {
    currentIndex = (currentIndex + 1) % entreprises.length;
    showEntreprise(currentIndex);
}

// Afficher la première entreprise par défaut
showEntreprise(currentIndex);

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

// Afficher l'âge
const dateOfBirth = new Date('2002-09-26');
function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
    age--;
  }
  return age;
}
const age = calculateAge(dateOfBirth);
const ageDisplay = document.getElementById('ageDisplay');
ageDisplay.innerHTML = `<span>Âge:</span> ${age} ans`;

// Veille technologique
function showPDF(pdfPath) {
  document.getElementById('pdfViewer').src = pdfPath;
}