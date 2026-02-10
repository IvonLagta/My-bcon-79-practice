//Console.log("Notes");
/*
App store
*/
const store = {
  notes: [
    // { id: 1, name: "Peach", body: "Peach is tasty" },
    // { id: 2, name: "Pineapple", body: "Peach is tasty" },
    // { id: 3, name: "Grape", body: "Peach is tasty" },
  ],
  appTheme: "light",
};

//Generate ID instance
const g = new GenerateId();

const STORAGE_KEY = { notes: "notes", appTheme: "appTheme" };

// Elements
const noteList = document.querySelector(".js-notes-list");
const card = document.querySelector(".js-card");
const form = document.querySelector(".js-form");
const btnDelete = document.querySelector(".js-delete-btn");
const themeToggler = document.querySelector(".js-theme-toggler");

setTheme();

//Listeners
form.addEventListener("submit", onFormSubmit);
noteList.addEventListener("click", onBtnDelClick);
themeToggler.addEventListener("click", onTogglerClick);

const notesData = loadLS(STORAGE_KEY.notes);
if (notesData !== undefined) {
  store.notes = [...notesData];
  renderNotes(notesData);
}
//Functions
function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const noteData = {
    id: g.generate(10),
    ...Object.fromEntries(new FormData(form)),
  };

  //   console.log(noteData);

  //Add new items in store
  store.notes = [...store.notes, noteData];
  saveLS(STORAGE_KEY.notes, store.notes);
  //   const noteMarkUp = createNote(noteData);

  // Insert MarkUp to list
  noteList.insertAdjacentHTML("beforeend", createNote(noteData));

  // Reset Form
  form.reset();
}

function renderNotes(notes = []) {
  if (notes === undefined) {
    return;
  }
  if (notes.length === 0) {
    noteList.innerHTML = "";
    return;
  }
  const markUp = notes.map(createNote).join("");
  noteList.innerHTML = markUp;
}

function createNote({ id, name, body }) {
  return `
    <li class="card js-card">
        <h5 class="card-header">${name}</h5>
        <div class="card-body">
        <p class="card-text">
            ${body}
        </p>
        <button
            class="btn btn-primary js-delete-btn"
            type="button"
            data-noteid="${id}"
        >
            Delete
        </button>
        </div>
    </li>`;
}

// Local storage service

function saveLS(key, value) {
  try {
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (error) {
    console.error(error.message);
  }
}

function loadLS(key, value) {
  try {
    const serialisedState = localStorage.getItem(key);
    if (serialisedState === null) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (error) {
    console.error(error.message);
  }
}
function onBtnDelClick(event) {
  const currentEl = event.target;
  if (!currentEl.classList.contains("js-delete-btn")) {
    return;
  }
  const noteID = currentEl.dataset.noteid;
  const filteredNotes = store.notes.filter(note => {
    return note.id !== noteID;
  });
  store.notes = [...filteredNotes];
  renderNotes(filteredNotes);
  saveLS(STORAGE_KEY.notes, store.notes);
}

//Toggler
function setTheme(theme) {
  const currTheme = theme ?? "light";
  currTheme == "light"
    ? themeToggler
    : themeToggler.setAttribute("checked", "");
  document.documentElement.setAttribute("data-bs-theme", currTheme);
  store.appTheme = currTheme;
}
function onTogglerClick(event) {
  // const currTheme = loadLS(STORAGE_KEY.appTheme) ?? "light";
  // if (currTheme === "light") {
  //   document.documentElement.setAttribute("data-bs-theme", "light");
  // } else {
  //   document.documentElement.setAttribute("data-bs-theme", "dark");
  // }
  const currTheme = store.appTheme === "light" ? "dark" : "light";
  setTheme(currTheme);
  saveLS(STORAGE_KEY.appTheme, currTheme);
}
