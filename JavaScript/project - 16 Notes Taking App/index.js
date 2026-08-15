let btn = document.getElementsByClassName("btn")[0];
let removeall = document.getElementsByClassName("removeall")[0];

let data = JSON.parse(localStorage.getItem("notes")) || [];


// ==========================================
// DISPLAY NOTES
// ==========================================

function displayNote() {

    let allNote = document.getElementById("allNote");
    allNote.innerHTML = "";

    data.forEach((singleNote, index) => {
        addNote(singleNote.text, singleNote.date, index);
    });
}

displayNote();


// ==========================================
// MAIN ADD NOTE BUTTON
// ==========================================

btn.addEventListener("click", () => {
    addNote();
});


// ==========================================
// ADD NOTE
// ==========================================

function addNote(note = "", oldDate = null, index = null) {

    let divEle = document.createElement("div");

    divEle.className = "singleNote";

    divEle.innerHTML = `
        <div class="btnlist">

            <button class="editbtn">
                <span class="add">Add</span>
                <span class="save hidden">Save</span>
            </button>

            <button class="removebtn">
                Remove
            </button>

        </div>

        <div class="text">

            <div class="note divTag hidden"></div>

            <textarea
                class="note textTag"
                title="you can type here"
            ></textarea>

        </div>

        <div class="date"></div>
    `;


    // ==========================================
    // ELEMENTS
    // ==========================================

    let editbtn = divEle.querySelector(".editbtn");
    let removebtn = divEle.querySelector(".removebtn");

    let addbtn = divEle.querySelector(".add");
    let savebtn = divEle.querySelector(".save");

    let date = divEle.querySelector(".date");

    let divTag = divEle.querySelector(".divTag");
    let textTag = divEle.querySelector(".textTag");


    // ==========================================
    // KEEP INDEX
    // ==========================================

    let noteIndex = index;


    // ==========================================
    // PUT TEXT
    // ==========================================

    textTag.value = note;


    // ==========================================
    // MARKDOWN
    // ==========================================

    divTag.innerHTML = marked(note);


    // ==========================================
    // EXISTING NOTE
    // ==========================================

    if (note.trim() !== "") {

        // Show rendered note

        divTag.classList.remove("hidden");
        textTag.classList.add("hidden");


        // Existing note starts with SAVE

        addbtn.classList.add("hidden");
        savebtn.classList.remove("hidden");


        // Keep original date

        date.textContent = oldDate;

    }


    // ==========================================
    // NEW EMPTY NOTE
    // ==========================================

    else {

        // Show textarea

        textTag.classList.remove("hidden");
        divTag.classList.add("hidden");


        // Show ADD

        addbtn.classList.remove("hidden");
        savebtn.classList.add("hidden");


        // New date

        date.textContent = new Date().toLocaleString();

    }


    // ==========================================
    // ADD / SAVE BUTTON
    // ==========================================

    editbtn.addEventListener("click", () => {


        // ======================================
        // ADD
        // ======================================

        if (!addbtn.classList.contains("hidden")) {

            if (textTag.value.trim() === "") {
                return;
            }


            let newDate = new Date().toLocaleString();


            // Add new note

            data.push({
                text: textTag.value,
                date: newDate
            });


            // Get new note's index

            noteIndex = data.length - 1;


            // Save

            localStorage.setItem(
                "notes",
                JSON.stringify(data)
            );


            // Render Markdown

            divTag.innerHTML = marked(textTag.value);


            // Textarea → DIV

            textTag.classList.add("hidden");
            divTag.classList.remove("hidden");


            // ADD → SAVE

            addbtn.classList.add("hidden");
            savebtn.classList.remove("hidden");


            date.textContent = newDate;

        }


        // ======================================
        // SAVE
        // ======================================

        else {

            if (textTag.value.trim() === "") {
                return;
            }


            let newDate = new Date().toLocaleString();


            // Update THIS note

            data[noteIndex].text = textTag.value;
            data[noteIndex].date = newDate;


            // Save

            localStorage.setItem(
                "notes",
                JSON.stringify(data)
            );


            // Render Markdown

            divTag.innerHTML = marked(textTag.value);


            // Textarea → DIV

            textTag.classList.add("hidden");
            divTag.classList.remove("hidden");


            // SAVE → ADD

            savebtn.classList.add("hidden");
            addbtn.classList.remove("hidden");


            // Update date

            date.textContent = newDate;

        }

    });


    // ==========================================
    // CLICK NOTE TO EDIT
    // ==========================================

    divTag.addEventListener("click", () => {

        // Show textarea

        textTag.classList.remove("hidden");

        // Hide rendered note

        divTag.classList.add("hidden");


        // SAVE should be visible

        addbtn.classList.add("hidden");
        savebtn.classList.remove("hidden");


        // Put cursor inside textarea

        textTag.focus();

    });


    // ==========================================
    // REMOVE ONE NOTE
    // ==========================================

    removebtn.addEventListener("click", () => {

        if (noteIndex !== null) {

            data.splice(noteIndex, 1);

            localStorage.setItem(
                "notes",
                JSON.stringify(data)
            );
        }


        displayNote();

    });


    // ==========================================
    // ADD TO PAGE
    // ==========================================

    document
        .getElementById("allNote")
        .append(divEle);
}


// ==========================================
// REMOVE ALL
// ==========================================

removeall.addEventListener("click", () => {

    data = [];

    localStorage.removeItem("notes");

    displayNote();

});