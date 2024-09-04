function saveNote() {
    const noteContent = document.getElementById('note').value;
    if (noteContent) {
        localStorage.setItem('savedNote', noteContent);
        document.getElementById('message').innerText = 'Note saved successfully!';
    } else {
        alert('Please write something before saving.');
    }
}

window.onload = function() {
    const savedNote = localStorage.getItem('savedNote');
    if (savedNote) {
        document.getElementById('note').value = savedNote;
    }
};