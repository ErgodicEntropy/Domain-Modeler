// use OOP to modularize the main.js
class Course{
  constructor(name, chapterList){
    this.name = name;
    this.chapterList = chapterList; 
    this.nbChapters = chapterList.length;
    this.button = {}; //buttons in the action column of the course table (initially empty)
  }

  createUpdate(index){
      const updateBtn = document.createElement('button');
      updateBtn.id = `updateBtn${index}`;
      updateBtn.textContent = "Update";
      updateBtn.setAttribute('type', 'button');
      updateBtn.className = "w-full bg-purple-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
      this.button.update = updateBtn;
  
  }

  createDelete(index){
      const delBtn = document.createElement('button');
      delBtn.id = `delBtn${index}`;
      delBtn.textContent = "Delete";
      delBtn.setAttribute('type', 'button');
      delBtn.className = "w-full bg-red-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
      this.button.delete = delBtn;
  }

  createExaminate(index){
      const exBtn = document.createElement('button');
      exBtn.id = `exBtn${index}`; 
      exBtn.textContent = "Examinate";
      exBtn.setAttribute('type', 'button');
      exBtn.className = "w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
      this.button.examinate = exBtn;
  }

  addEvent(){
    this.handleAdd = this.handleAdd.bind(this);
    document.getElementById('addBtn').addEventListener('click', this.handleAdd)
  }
  handleAdd(addForm){
    let counter = this.nbChapters;
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');

    document.getElementById('auLegend').textContent = 'Add a unit';

    document.getElementById('auBtn').textContent = 'Add';

    addForm.addEventListener('submit', e=>{
      e.preventDefault(); 
      try {
        const name = document.getElementById('unitName').value;
        const def = document.getElementById('unitDef').value;
        const pur = document.getElementById('unitPurpose').value;
        const preqs = document.getElementById('unitPos').value;
        const ref = document.getElementById('unitRef').value;
    
        const tr = document.createElement('tr');
        tr.className = "even:bg-gray-100 hover:bg-gray-200"; 
        tr.id = `tR${counter}`; 
    
        const td1 = document.createElement('td');
        td1.textContent = name;
        td1.className = "px-4 py-2 border border-gray-200";
        td1.id = `knowledgeUnit${counter}`; 
    
        const td2 = document.createElement('td');
        td2.textContent = def;
        td2.className = "px-4 py-2 border border-gray-200";
        td2.id = `definition${counter}`; 
    
        const td3 = document.createElement('td');
        td3.textContent = pur;
        td3.className = "px-4 py-2 border border-gray-200";
        td3.id = `purpose${counter}`; 
    
        const td4 = document.createElement('td');
        td4.textContent = preqs ?? "";
        td4.className = "px-4 py-2 border border-gray-200";
        td4.id = `prerequisites${counter}`; 

    
        const td5 = document.createElement('td');
        const a = document.createElement('a'); 
        a.href = ref; 
        a.textContent = ref; 
        a.target = '_blank';
        td5.appendChild(a);
        td5.className = "px-4 py-2 border border-gray-200";
        td5.id = `reference${counter}`; 
    
    
        //action buttons
        const exBtn = document.createElement('button');
        exBtn.id = `exBtn${counter}`; 
        exBtn.textContent = "Examinate";
        exBtn.setAttribute('type', 'button');
        exBtn.className = "w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
    
        const updateBtn = document.createElement('button');
        updateBtn.id = `updateBtn${counter}`;
        updateBtn.textContent = "Update";
        updateBtn.setAttribute('type', 'button');
        updateBtn.className = "w-full bg-purple-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
    
        const delBtn = document.createElement('button');
        delBtn.id = `delBtn${counter}`;
        delBtn.textContent = "Delete";
        delBtn.setAttribute('type', 'button');
        delBtn.className = "w-full bg-red-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
      
        const td6 = document.createElement('td');
        td6.append(exBtn, updateBtn, delBtn); 
        
        tr.append(td1,td2,td3,td4,td5,td6);
    
        tbody.appendChild(tr); 
    
        course.push({knowledgeUnit: name, definition: def, purpose: pur, prerequisites:preqs, references: ref});
  
        overlay.classList.add('hidden');
        
        setTimeout(()=>{
          Swal.fire({
              title: "Added!",
              text: "New chapter added successfully!",
              icon: "success"
          });            
        },1000)

      } catch (err){
        Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message || 'Something went wrong!',
        });
      } 
    })

  }
  
  get name(){return this.name;}
  get numChapters(){return this.nbChapters;}
  get chapters(){return this.chapterList;}
  get buttons(){return this.buttons;}

  set name(n){this.name = n;}

  renderTable(tableBody){ //HTMLElement type -> more specifically its inherited type is HTMLTableSectionElement
    this.chapterList.forEach((chapter, index) => {
      const tr = document.createElement('tr');
      tr.className = "even:bg-gray-100 hover:bg-gray-200"; 
      tr.id = `tR${index}`; 
  
      const td1 = document.createElement('td');
      td1.textContent = chapter.knowledgeUnit;
      td1.className = "px-4 py-2 border border-gray-200";
      td1.id = `knowledgeUnit${index}`; 
  
      const td2 = document.createElement('td');
      td2.textContent = chapter.definition;
      td2.className = "px-4 py-2 border border-gray-200";
      td2.id = `definition${index}`; 
  
      const td3 = document.createElement('td');
      td3.textContent = chapter.purpose;
      td3.className = "px-4 py-2 border border-gray-200";
      td3.id = `purpose${index}`; 
  
      const td4 = document.createElement('td');
      const preqs = course.filter(c=>c.prerequisites.includes(course.indexOf(chapter))).map(c=>c.knowledgeUnit).toString(); //.join(",")
      td4.textContent = (preqs || "");
      td4.className = "px-4 py-2 border border-gray-200";
      td4.id = `prerequisites${index}`; 
  
      const td5 = document.createElement('td');
      const a = document.createElement('a'); 
      a.href = chapter.references[0]; 
      a.textContent = chapter.references[0]; 
      a.target = '_blank';
      td5.appendChild(a);
      td5.className = "px-4 py-2 border border-gray-200";
      td5.id = `references${index}`; 
  
  
      //action buttons
      const exBtn = document.createElement('button');
      exBtn.id = `exBtn${index}`; 
      exBtn.textContent = "Examinate";
      exBtn.setAttribute('type', 'button');
      exBtn.className = "w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
  
      const updateBtn = document.createElement('button');
      updateBtn.id = `updateBtn${index}`;
      updateBtn.textContent = "Update";
      updateBtn.setAttribute('type', 'button');
      updateBtn.className = "w-full bg-purple-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
    
      const delBtn = document.createElement('button');
      delBtn.id = `delBtn${index}`;
      delBtn.textContent = "Delete";
      delBtn.setAttribute('type', 'button');
      delBtn.className = "w-full bg-red-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";
    
      const td6 = document.createElement('td');
      td6.append(exBtn, updateBtn, delBtn); 
  
      tr.append(td1,td2,td3,td4,td5,td6);
  
      tableBody.appendChild(tr); 
  
  });

  }

  clearTable(){

  }

}

class Chapter{ //composition relation to course
  
  
}

class Table extends Course{
  constructor(course){
    super(this.name, course)
    this.rows = course.length;
    this.cols = 6;
  }

  renderElement(){

  }
  
  ascSortTable(){
    
  }
 
  descSortTable(){
    
  }

  translateTable(targetLang){
    
  }
}

/////////////////////////////////////


