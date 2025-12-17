const courseForm = document.getElementById('courseForm');


courseForm.addEventListener('submit', e=>{
    e.preventDefault(); 
    try {
        Swal.fire({
            title: "Submit",
            text: "Course chosen! Waiting...",
            icon: "success"
        });
        
        const username = window.localStorage.getItem('username');
        
        const a = document.getElementById('userNav');
        a.textContent = username;


        const selectedCourse = document.getElementById('course').value;

        window.localStorage.setItem('selectedCourse', selectedCourse);

        setTimeout(() => {
            window.location.href = 'main.html'}
            
        , 3000); 

    } catch(err){
        console.log(err.messaage);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
            footer: '<a href="#">Why do I have this issue?</a>'
        });

    }
})



class Person {
    constructor(n,a){
        this.name = n;
        this.age = a;
    }   

    getName(){
      return this.name;  
    }
    
    getAge(){
        return this.age;
    }
}