let notes = [];
const checkForData = () => {
    notes = JSON.parse(localStorage.getItem("myData")) || [];
    createNotes();
};


const handleForm = () => {
    let note = new Object();
    note.taskName = document.getElementById("taskName").value;
    note.date = document.getElementById("date").value;
    note.time = document.getElementById("time").value;

    notes.push(note);
    localStorage.setItem("myData", JSON.stringify(notes));
    createNotes();
    fadeInNote()
    document.getElementById("myForm").reset();
}


const createNotes = () => {
    let elNotes = document.getElementById("notes");
    let data = "";
    notes.map((item, index) => {
        data += `<div class="note" id="${index}"><button class="btn" onclick="removeNote(${index})"><img src="img/close.png" alt="close" width="15px" ></button><p>${item.taskName}</p> 
        <div class="dateTime">${prettifyDate(item.date)}
        <br/>
        ${item.time}
        </div>
        </div>`
    });
    elNotes.innerHTML = data;

}

const fadeInNote = () => {
    let last = notes.length - 1;
    let elNote = document.getElementById(`${last}`);
    elNote.classList.add("fade");
}

const removeNote = (index) => {
    notes.splice(index, 1)
    localStorage.setItem("myData", JSON.stringify(notes));
    createNotes();
}
const prettifyDate = (date) => {
    const myNewDate = date.split("-");

    return `${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`;
};
checkForData()
