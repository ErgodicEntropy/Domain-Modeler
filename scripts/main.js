const domainModel = JSON.parse(window.localStorage.getItem('data'));
const username = window.localStorage.getItem('username');

const a = document.getElementById('userNav');
a.textContent = username;

const courseDir = {
    "cpp":0, 
    "php":1,
    "uml":2,
    "net":3, 
    "webdev":4,
    "comp":5,
    "sql":6,
    "unix":7
}

const selectedCourse = window.localStorage.getItem('selectedCourse');

const courseIndex = courseDir[selectedCourse];

const course = domainModel[courseIndex]; 

window.localStorage.setItem('course', JSON.stringify(course));

const tbody = document.getElementById('knowledgeTableB'); 

let counter = 0; //number of chapters in our course

course.forEach(k => {
    const tr = document.createElement('tr');
    tr.className = "even:bg-gray-100 hover:bg-gray-200"; 
    tr.id = `tR${counter}`; 

    const td1 = document.createElement('td');
    td1.textContent = k.knowledgeUnit;
    td1.className = "px-4 py-2 border border-gray-200";
    td1.id = `knowledgeUnit${counter}`; 

    const td2 = document.createElement('td');
    td2.textContent = k.definition;
    td2.className = "px-4 py-2 border border-gray-200";
    td2.id = `definition${counter}`; 

    const td3 = document.createElement('td');
    td3.textContent = k.purpose;
    td3.className = "px-4 py-2 border border-gray-200";
    td3.id = `purpose${counter}`; 

    const td4 = document.createElement('td');
    td4.textContent = k.position;
    td4.className = "px-4 py-2 border border-gray-200";
    td4.id = `position${counter}`; 

    const td5 = document.createElement('td');
    const a = document.createElement('a'); 
    a.href = k.references[0]; 
    a.textContent = k.references[0]; 
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

  //   updateBtn.addEventListener('click', e=>{
  //   e.preventDefault();
  //   try {  
  //     const overlay = document.getElementById('overlay');
  //     overlay.classList.remove('hidden');
  
  //     document.getElementById('auLegend').textContent = 'Update a unit';
  
  //     document.getElementById('auBtn').textContent = 'Update';

  //     document.getElementById('auForm').addEventListener('submit', e=>{
  //     e.preventDefault();   
  //     try {
  //       //user submitted form
  //       const name = document.getElementById('unitName').value;
  //       const def = document.getElementById('unitDef').value;
  //       const pur = document.getElementById('unitPurpose').value;
  //       const pos = document.getElementById('unitPos').value;
  //       const ref = document.getElementById('unitRef').value;
          
  //       td1.textContent = name;
  //       td2.textContent = def;
  //       td3.textContent = pur; 
  //       td4.textContent = pos;
  //       td5.textContent = ref; 


  //       Swal.fire({
  //         title: "Update!",
  //         text: "Chapter updated successfully!",
  //         icon: "success"
  //       });
        
  //       overlay.classList.add('hidden');

  //     } catch(err){
  //       Swal.fire({
  //             icon: 'error',
  //             title: 'Oops...',
  //             text: err.message || 'Something went wrong!',
  //       });

  //     }

  //   })  
  //   } catch(err){
  //       Swal.fire({
  //             icon: 'error',
  //             title: 'Oops...',
  //             text: err.message || 'Something went wrong!',
  //       });
  //   }
  
  // })


    const delBtn = document.createElement('button');
    delBtn.id = `delBtn${counter}`;
    delBtn.textContent = "Delete";
    delBtn.setAttribute('type', 'button');
    delBtn.className = "w-full bg-red-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200";

    // delBtn.addEventListener('click', e=>{
    // e.preventDefault();
    // try {
    //   const id  = tr.dataset.id;

    //   tr.remove();

    //   course.filter(c => c.id !== id); 

    //   Swal.fire({
    //       title: "Deletion!",
    //       text: "Chapter deleted successfully!",
    //       icon: "success"
    //     });  

    // } catch(err){
    //     Swal.fire({
    //           icon: 'error',
    //           title: 'Oops...',
    //           text: err.message || 'Something went wrong!',
    //     });

    //   }
    // })

    const invBtn = document.createElement('button');
    invBtn.id = `invBtn${counter}`;
    invBtn.textContent = "👥"; //👥
    invBtn.setAttribute('type','button');
    invBtn.className = "bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"; 

    const td6 = document.createElement('td');
    td6.append(exBtn, updateBtn, delBtn, invBtn); 

    tr.append(td1,td2,td3,td4,td5,td6);

    tbody.appendChild(tr); 

    ++counter; 
});



const addBtn = document.getElementById("addBtn");

const auForm  = document.getElementById('auForm');


addBtn.addEventListener('click', e=>{
    e.preventDefault();
    counter++;
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');

    document.getElementById('auLegend').textContent = 'Add a unit';

    document.getElementById('auBtn').textContent = 'Add';

    auForm.addEventListener('submit', e=>{
      e.preventDefault(); 
      try {
        const name = document.getElementById('unitName').value;
        const def = document.getElementById('unitDef').value;
        const pur = document.getElementById('unitPurpose').value;
        const pos = document.getElementById('unitPos').value;
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
        td4.textContent = pos;
        td4.className = "px-4 py-2 border border-gray-200";
        td4.id = `position${counter}`; 
    
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
  
        const invBtn = document.createElement('button');
        invBtn.id = `invBtn${counter}`;
        invBtn.textContent = "👥"; //👥
        invBtn.setAttribute('type','button');
        invBtn.className = "bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"; 
  
    
        const td6 = document.createElement('td');
        td6.append(exBtn, updateBtn, delBtn, invBtn); 
        
        tr.append(td1,td2,td3,td4,td5,td6);
    
        tbody.appendChild(tr); 
    
        course.push({knowledgeUnit: name, definition: def, purpose: pur, position: pos, references: ref});
  
        overlay.classList.add('hidden');

        Swal.fire({
            title: "Added!",
            text: "New chapter added successfully!",
            icon: "success"
        });  

      } catch (err){
        Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message || 'Something went wrong!',
        });
      }

    })

})

// action buttons event listeners

// const exb = document.getElementById(`exBtn${bc}`); 
// exb.addEventListener('click', e=>{
//     e.preventDefault();
//     try {
//       const idArr = exb.id.split(',');
//       // const index = Number(idArr[-1]); //exBtn0 -> 0  
//       const index = parseInt(idArr[-1]); //exBtn0 -> 0  

//       const chapter = course[index];

//       window.localStorage.setItem('chapter', JSON.stringify(chapter));

//       Swal.fire({
//         title: "Quiz!",
//         text: "Preparing Exam...Please Wait",
//         icon: "success"
//       });  
      
//       setTimeout(()=>{
//         window.location.href = 'exam.html'; 
//       }, 3000)
      
//     } catch(err){
//         Swal.fire({
//               icon: 'error',
//               title: 'Oops...',
//               text: err.message || 'Something went wrong!',
//         });

//     }
//   })

const visBtn = document.getElementById("visBtn");

visBtn.addEventListener('click', e=>{
  e.preventDefault();    
  try{
    Swal.fire({
        title: "Knowledge Graph!",
        text: "Preparing Knowledge Graph...Please Wait",
        icon: "success"
      });  
    
    setTimeout(()=>{
      window.location.href = 'graph.html'; 
    }, 3000)

  } catch(err){
        Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message || 'Something went wrong!',
        });
  }

})

const ascBtn = document.getElementById("ascSortBtn");
ascBtn.addEventListener('click', e=>{
  e.preventDefault()
  try{
    //sort data in ascending order
    course.sort((a,b)=>{
      if (a.knowledgeUnit < b.knowledgeUnit) return -1;
      if (a.knowledgeUnit > b.knowledgeUnit) return 1;
      return 0;
    });     

    Swal.fire({
        title: "Sorted!",
        text: "Sorted Ascend",
        icon: "success"
      });  
  }catch(err){
      Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message || 'Something went wrong!',
      });
  }
})


const descBtn = document.getElementById("descSortBtn");
descBtn.addEventListener('click', e=>{
  e.preventDefault()
  try{
    //sort data in ascending order
    course.sort((a,b)=>{
      if (a.knowledgeUnit > b.knowledgeUnit) return -1;
      if (a.knowledgeUnit < b.knowledgeUnit) return 1;
      return 0;
    });     

    Swal.fire({
        title: "Sorted!",
        text: "Sorted Ascend",
        icon: "success"
      });  
  }catch(err){
      Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message || 'Something went wrong!',
      });
  }
})

//refactor this codebase: fix data variable redundancy, add error handling in event blocks