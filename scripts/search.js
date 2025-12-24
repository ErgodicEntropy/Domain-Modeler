const course = JSON.parse(window.localStorage.getItem('course')); 

document.getElementById('searchForm').addEventListener('submit', e =>{
    e.preventDefault();
    try {
        const searchedValue = document.getElementById('searchInput').value;

        for (let k = 0; k < course.length; k++){
            if (searchedValue == course[k].knowledgeUnit){
                const tr = document.createElement('tr');
                tr.className = "even:bg-gray-100 hover:bg-gray-200"; 
                tr.id = `tR${index}`; 
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
