const addButton = document.querySelector('#add');
const updateLSDate=()=>{
    const textareaData = document.querySelectorAll('textarea');
     const notes = [];
     textareaData.forEach((note)=>{
         return notes.push(note.value);
     })
     localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote = (text = '')=>{
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData =`
    <div class="operation">
         <button class="edit"><i class="fas fa-edit"></i></button>
         <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
     <div class="main ${text ? "":"hidden"} "></div>
         <textarea class="${text ? "hidden":""}"></textarea> `;

         note.insertAdjacentHTML('afterbegin',htmlData);
         console.log(note);
         document.body.appendChild(note)
         //it appeds a node as the last child of a node


        

         //getting the reference
         const editButton =note.querySelector('.edit');
         const deleteButton =note.querySelector('.delete');
         const mainDiv =note.querySelector('.main');
         const textarea =note.querySelector('textarea');
        
        
         //deleteing  the note
         deleteButton.addEventListener('click',()=>{
             note.remove();
             updateLSDate();
         });
         editButton.addEventListener('click',()=>{
             mainDiv.classList.toggle('hidden');
             textarea.classList.toggle('hidden');
         })

          //toggle using edit button
          textarea.value = text;
          mainDiv.value = text;
          textarea.addEventListener('change',(event)=>{
                   const value = event.target.value;
                   console.log(value);
                   mainDiv.value = value;
                    updateLSDate();
          })


}
//getting data back from localstorage
const notes =JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note)=>addNewNote(note))
};

addButton.addEventListener('click',()=>addNewNote());