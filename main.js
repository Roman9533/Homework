let tasks = ["Выучить основы JS", "Помыть посуду", "Купить продукты"];
 function addTask(list, taskName) {
    if (list.indexOf(taskName) !== -1) {
        console.log("Задача уже существует");
    } else {
        list.push(taskName);
    }
 }

 function completeTask(list, taskName) {
    const index = list.indexOf(taskName);
    if (index !== -1) {
        list.splice(index, 1);
 } else {
    console.log("Задача не найдена");
 }
 }
addTask(tasks, "Пойти на улицу");
addTask(tasks, "Помыть посуду");
addTask(tasks, "Позвонить другу");

completeTask(tasks, "Помыть посуду");

console.log(tasks);

const names = ["иван", "АННА", "петр", "ОЛЬГА"];

function formatNames(namesArray) {
    return namesArray.map(name => {
         const lowerName = name.toLowerCase();
         const firstLetter = lowerName.charAt(0).toUpperCase();
         const tail = lowerName.slice(1);
         return firstLetter + tail;
});
}
const formattedNames = formatNames(names);
console.log(formattedNames);

const students = [
  { name: "Иван", score: 120 },
  { name: "Мария", score: 95 },
  { name: "Алексей", score: 150 },
  { name: "Светлана", score: 80 },
  { name: "Дмитрий", score: 101 }
];

 function getPassingStudents(studentsList, passingScore) {
    return studentsList.filter(student => student.score > passingScore);

 }

    const passingStudents = getPassingStudents(students, 100);
    console.log(passingStudents);
    
function changeText() {
    document.getElementById("text-element").textContent = "Текст был изменен!";
}

function addText() {
    const p = document.getElementById("text-element");
    p.textContent += " (дополнено)";
}

function resetText() {
    document.getElementById("text-element").textContent = originalText;
}

let originalText = "Исходный текст этого параграфа";

function safeOutput() {
    const input = document.getElementById("user-input").value;
    document.getElementById("safe-output").textContent = "Безопасная зона: " + input;
}

function unsafeOutput() {
    const input = document.getElementById("user-input").value;
    document.getElementById("unsafe-output").innerHTML = "Небезопасная зона: " + input;
}
//////////////////
function addSimpleContent() {
    const container = document.getElementById("dynamic-content");
    const p = document.createElement("p");
    p.textContent = "Новый текстовый блок";
    container.appendChild(p);
}

function addHTMLContent() {
    const container = document.getElementById("dynamic-content");

    const block = document.createElement("div");
    block.innerHTML = `
        <h3>Заголовок блока</h3>
        <p>Это динамически добавленный HTML-контент</p>
        <ul>
            <li>Элемент 1</li>
            <li>Элемент 2</li>
            <li>Элемент 3</li>
        </ul>
    `;
    container.appendChild(block);
}

function clearContent() {
    document.getElementById("dynamic-content").innerHTML = "";
}
//////////////////////////

const styleDemo = document.getElementById("style-demo");

const originalStyles = {
    background: styleDemo.style.background,
    width: styleDemo.style.width,
    height: styleDemo.style.height,
    borderRadius: styleDemo.style.borderRadius,
    boxShadow: styleDemo.style.boxShadow
};

function changeColor() {
    styleDemo.style.background = "lightblue";
}

function changeSize() {
    styleDemo.style.width = "300px";
    styleDemo.style.height = "100px";
}

function addBorder() {
    styleDemo.style.borderRadius = "10px";
    styleDemo.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
}

function resetStyles() {
    styleDemo.style.background = originalStyles.background;
    styleDemo.style.width = originalStyles.width;
    styleDemo.style.height = originalStyles.height;
    styleDemo.style.borderRadius = originalStyles.borderRadius;
    styleDemo.style.boxShadow = originalStyles.boxShadow;
}
//////////////////////////////

const defaultProfile = {
    name: "Иван Иванов",
    title: "Студент",
    bio: "Люблю изучать JavaScript"
};

function updateName() {
    const value = document.getElementById("name-input").value;
    if (value.trim() !== "") {
        document.getElementById("user-name").textContent = value;
    }
}

function updateTitle() {
    const value = document.getElementById("title-input").value;
    if (value.trim() !== "") {
        document.getElementById("user-title").textContent = value;
    }
}

function updateBio() {
    const value = document.getElementById("bio-input").value;
    if (value.trim() !== "") {
        document.getElementById("user-bio").textContent = value;
    }
}

function highlightProfile() {
    const profile = document.getElementById("user-profile");
    profile.style.border = "2px solid blue";
    profile.style.padding = "10px";
    profile.style.background = "rgba(173, 216, 230, 0.3)";
    profile.style.borderRadius = "10px";
}

function resetProfile() {
    const profile = document.getElementById("user-profile");

    document.getElementById("user-name").textContent = defaultProfile.name;
    document.getElementById("user-title").textContent = defaultProfile.title;
    document.getElementById("user-bio").textContent = defaultProfile.bio;

    profile.style.border = "";
    profile.style.padding = "";
    profile.style.background = "";
    profile.style.borderRadius = "";
}


let photos = [];
const likes = new Map();
const tagsMap = new Map();


const gallery = document.getElementById("gallery");

const searchTitle = document.getElementById("search-title");
const yearFilter = document.getElementById("year-filter");
const tagsList = document.getElementById("tags-list");


const addPopup = document.getElementById("add-popup");
const viewPopup = document.getElementById("view-popup");


const addForm = document.getElementById("add-photo-form");


document.getElementById("open-add-form").addEventListener("click", () => {
  addPopup.classList.remove("hidden");
});
document.getElementById("close-add").addEventListener("click", () => {
  addPopup.classList.add("hidden");
});
document.getElementById("close-view").addEventListener("click", () => {
  viewPopup.classList.add("hidden");
});


addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const url = document.getElementById("photo-url").value.trim();
  const title = document.getElementById("photo-title").value.trim();
  const location = document.getElementById("photo-location").value.trim();
  const year = document.getElementById("photo-year").value;
  const tagsInput = document.getElementById("photo-tags").value;
  const desc = document.getElementById("photo-description").value.trim();

 
  const tags = tagsInput
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);

 
  const photo = { url, title, location, year, tags, desc };
  photos.push(photo);

  
  likes.set(url, 0);

  
  tags.forEach((tag) => {
    if (!tagsMap.has(tag)) tagsMap.set(tag, new Set());
    tagsMap.get(tag).add(url);
  });


  updateYearFilter();
  updateTags();
  renderGallery();

  addPopup.classList.add("hidden");
  addForm.reset();
});


function updateYearFilter() {
  const years = [...new Set(photos.map((p) => p.year))].sort();
  yearFilter.innerHTML = `<option value="all">Все годы</option>` +
    years.map((y) => `<option value="${y}">${y}</option>`).join("");
}


function updateTags() {
  const allTags = [...tagsMap.keys()].sort();
  tagsList.innerHTML = allTags.map((tag) => `<li data-tag="${tag}">${tag}</li>`).join("");

  document.querySelectorAll("#tags-list li").forEach((li) => {
    li.addEventListener("click", () => {
      document.querySelectorAll("#tags-list li").forEach(el =>
        el.classList.remove("active")
      );
      li.classList.add("active");
      renderGallery();
    });
  });
}


function renderGallery() {
  gallery.innerHTML = "";

  const text = searchTitle.value.toLowerCase();
  const year = yearFilter.value;
  const activeTag = document.querySelector("#tags-list .active")?.dataset.tag;

  photos.forEach((photo) => {
    if (text && !photo.title.toLowerCase().includes(text)) return;
    if (year !== "all" && photo.year !== year) return;
    if (activeTag && !photo.tags.includes(activeTag)) return;

    const card = document.createElement("div");
    card.className = "photo-card";
    card.innerHTML = `
      <img src="${photo.url}" alt="${photo.title}">
      <h4>${photo.title}</h4>
      <small>${photo.year}</small>
    `;
    card.addEventListener("click", () => openViewPhoto(photo));
    gallery.append(card);
  });
}


function openViewPhoto(photo) {
  document.getElementById("popup-image").src = photo.url;
  document.getElementById("popup-title").textContent = photo.title;
  document.getElementById("popup-location").textContent = photo.location;
  document.getElementById("popup-year").textContent = photo.year;
  document.getElementById("popup-description").textContent = photo.desc;

  const tagsContainer = document.getElementById("popup-tags");
  tagsContainer.innerHTML = photo.tags.map(t => `<span class="tag">${t}</span>`).join("");

 
  document.getElementById("popup-like-count").textContent = likes.get(photo.url);

  const likeBtn = document.getElementById("popup-like");
  likeBtn.onclick = () => {
    likes.set(photo.url, likes.get(photo.url) + 1);
    document.getElementById("popup-like-count").textContent = likes.get(photo.url);
  };

  viewPopup.classList.remove("hidden");
}


searchTitle.addEventListener("input", () => {
  document.querySelectorAll("#tags-list li").forEach((li) =>
    li.classList.remove("active")
  );
  renderGallery();
});

yearFilter.addEventListener("change", () => {
  document.querySelectorAll("#tags-list li").forEach((li) =>
    li.classList.remove("active")
  );
  renderGallery();
});
