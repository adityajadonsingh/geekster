document.getElementById('add-note').addEventListener('click', addNote);

function addNote() {
  const noteContent = document.getElementById('note-content').value;
  const noteColor = document.getElementById('note-color').value;

  if (noteContent.trim() === '') {
    alert('Please enter a note.');
    return;
  }

  const notesList = document.getElementById('notes-list');
  
  // Remove the "empty" message if it exists
  if (notesList.classList.contains('empty-notes')) {
    notesList.classList.remove('empty-notes');
    notesList.innerHTML = '';
  }

  const noteElement = document.createElement('div');
  noteElement.className = 'note';
  noteElement.style.backgroundColor = noteColor;

  const noteTextElement = document.createElement('div');
  noteTextElement.className = 'note-content';
  noteTextElement.textContent = noteContent;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => {
    noteElement.remove();
    updateEmptyMessage();
  };

  noteElement.appendChild(noteTextElement);
  noteElement.appendChild(deleteButton);

  notesList.appendChild(noteElement);

  document.getElementById('note-content').value = '';
  document.getElementById('note-color').value = '#ffeb3b';
  updateEmptyMessage();
}

function updateEmptyMessage() {
  const notesList = document.getElementById('notes-list');
  if (notesList.children.length === 0) {
    notesList.classList.add('empty-notes');
    notesList.textContent = 'You have not added a note yet.';
  }
}
