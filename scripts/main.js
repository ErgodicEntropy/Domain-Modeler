const username = window.localStorage.getItem('username');

const a = document.getElementById('userNav');
a.textContent = username;

const course = JSON.parse(window.localStorage.getItem('course')); 

const courseCopy = course;

const tbody = document.getElementById('knowledgeTableB'); 


function renderRow(chapter, index){
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
      
          const updateBtn = document.createElement('button');
          updateBtn.id = `updateBtn${index}`;
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
          delBtn.id = `delBtn${index}`;
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
      
          const td6 = document.createElement('td');
          td6.append(exBtn, updateBtn, delBtn); 
      
          tr.append(td1,td2,td3,td4,td5,td6);
      
          tbody.appendChild(tr); 
    
}

function renderTable(sc){
  sc.forEach((chapter, index) => {
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
      
          const updateBtn = document.createElement('button');
          updateBtn.id = `updateBtn${index}`;
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
          delBtn.id = `delBtn${index}`;
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
      
          const td6 = document.createElement('td');
          td6.append(exBtn, updateBtn, delBtn); 
      
          tr.append(td1,td2,td3,td4,td5,td6);
      
          tbody.appendChild(tr); 
      
      });
    

}  

renderTable(course);

function clearTable(){
  [...tbody.children].forEach(t => { //tbody.children returns HTMLCollection alors que tbody.childNodes return a NodeList -> convert them to arrays using spread operator
    t.remove();
  })

}

const addBtn = document.getElementById("addBtn");

const auForm  = document.getElementById('auForm');


addBtn.addEventListener('click', e=>{
    e.preventDefault();
    let counter = course.length;
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

})

// action buttons event listeners

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
    clearTable();
    // course.forEach((chapter,index)=>{chapter.index = index;})
    // course.sort((a,b)=> a.index - b.index);
    // course.sort();
    setTimeout(()=>{
      renderTable(courseCopy);
    },2000);


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
    //sort data in descending order
    // course.forEach((chapter,index)=>{chapter.index = index});
    // course.sort((a,b)=>{b.index - a.index});

      clearTable()
      course.reverse();
      renderTable(course);

    Swal.fire({
        title: "Sorted!",
        text: "Sorted Descend",
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


document.getElementById('searchForm').addEventListener('submit', e =>{
    e.preventDefault();
    try {
        clearTable();
        const searchedValue = document.getElementById('searchInput').value;

        for (let k = 0; k < course.length; k++){
            if (searchedValue == course[k].knowledgeUnit){
              renderRow(course[k],k);
            }
        }
        Swal.fire({
              title: "Search!",
              text: "Please wait...",
              icon: "success"
        });            

    } catch(err){
        Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message || 'Something went wrong!',
        });

    }
});

