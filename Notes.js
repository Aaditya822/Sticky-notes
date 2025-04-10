const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes) {
        notesContainer.innerHTML = notes;
    }
}
showNotes();

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    img.className = "delete-btn";

    // Append elements
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    // Delete functionality
    img.addEventListener("click", () => {
        inputBox.remove();
    });
});
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault(); 
        let notes = notesContainer.innerHTML;
        localStorage.setItem("notes", notes);
    }
})