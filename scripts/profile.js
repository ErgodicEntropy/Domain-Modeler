const profileForm = document.getElementById('profileForm');

profileForm.addEventListener('submit', e=>{
    // e.preventDefault(); 
    try {
        const username = document.getElementById('us').value;

        window.localStorage.setItem('username', username);

        // setTimeout(() => {
        //     window.location.href = 'home.html'}
            
        // , 3000); 


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
