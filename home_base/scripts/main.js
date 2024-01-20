/////////////////////////////////////////////////////////////////////
// Lukas Hezel
// 10/07/23
// Homebase JS Code 
/////////////////////////////////////////////////////////////////////
// Declarations:

const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const projectModal = document.getElementById("project-modal");
const projectNameInput = document.getElementById("project-name");
const addProjectButton = document.getElementById("add-project");
const projectList = document.getElementById("tab-container");

/////////////////////////////////////////////////////////////////////
// Boar Button:

myButton.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/exploding-boar-boarsplosion.png") {
    myImage.setAttribute("src", "images/boar-wink.png");
  } else {
    myImage.setAttribute("src", "images/exploding-boar-boarsplosion.png");
  }
};

/////////////////////////////////////////////////////////////////////
// Collapsing Tabs:

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.style.display = "none";
    });
    tabContents[index].style.display = "block";
  });
});
tabContents[0].style.display = "block";

/////////////////////////////////////////////////////////////////////
// New Project Button:

function openModal() {
  projectModal.style.display = "block";
}

function closeModal() {
  projectModal.style.display = "none";
  projectNameInput.value = ""; 
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    closeModal();
  }
});

projectNameInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addProject();
    closeModal(); 
  }
});

/////////////////////////////////////////////////////////////////////
// Add New Project Function:

function addProject() {
  const projectName = projectNameInput.value.trim();
  const projectDesc = projectDescInput.value.trim();

  if (projectName !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = projectName;
    projectList.appendChild(listItem);

    projectNameInput.value = "";
  }
}

addProjectButton.addEventListener("click", addProject);

projectNameInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addProject();
  }
});

/////////////////////////////////////////////////////////////////////