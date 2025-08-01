const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Initialize array from localStorage or empty array if none exists
let chaptersArray = getChapterList() || [];

// Populate list from stored array
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

// Add click event for adding a chapter
button.addEventListener("click", () => {
  if (input.value !== "") {
    displayList(input.value); // Add to UI
    chaptersArray.push(input.value); // Add to array
    setChapterList(); // Save to localStorage
    input.value = ""; // Clear input
    input.focus(); // Refocus input
  }
});

// Function to build and display list items
function displayList(item) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

// Save chapters array to localStorage
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Get chapter list from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// Remove chapter from array and update localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // Remove ❌
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
