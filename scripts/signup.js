const loginForm = document.getElementById('signupForm');

const email = document.getElementById('em');
const password = document.getElementById('ps');

loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    try{
        if (email.value == "emsi123@app.com" && password.value == "emsi123"){
            Swal.fire({
                title: "Sign up!",
                text: "You signed up successfully!",
                icon: "success"
            });  
            window.localStorage.setItem('email', email);
            window.localStorage.setItem('password', password);
    
        }
    } catch(err){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Email or Password!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    } finally {
        setTimeout(() => {
            window.location.href = 'profile.html'}
            
        , 3000); 
    }
    } 
)