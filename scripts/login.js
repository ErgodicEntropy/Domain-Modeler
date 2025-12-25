const loginForm = document.getElementById('loginForm');

const email = document.getElementById('em');
const password = document.getElementById('ps');

loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    try{
        if (email.value == "emsi123@app.com" && password.value == "emsi123"){
            Swal.fire({
                title: "Log In!",
                text: "You logged in successfully!",
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



const stars = document.querySelectorAll("#starRating .star");
const ratingInput = document.getElementById("ratingValue");
const form = document.getElementById("ratingForm");

let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener("click", () => {
        selectedRating = Number(star.dataset.value);
        ratingInput.value = selectedRating;

        stars.forEach(s => {
            s.classList.toggle("text-yellow-400", s.dataset.value <= selectedRating);
            s.classList.toggle("text-gray-400", s.dataset.value > selectedRating);
        });
    });
});

// Handle form submit
form.addEventListener("submit", e => {
    e.preventDefault();
    try {
        if (!selectedRating) {
            alert("Please select a rating first");
            return;
        }

        console.log("User rating:", selectedRating);

        Swal.fire({
            title: "Feedback",
            text: "Thanks for your feedback!",
            icon: "success"
        });  

        form.querySelector("button").disabled = true;

    } catch(err){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
        });

    }

});
