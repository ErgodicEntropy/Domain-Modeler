const course = JSON.parse(window.localStorage.getItem('course'));


document.getElementById('barBtn').addEventListener('click', e=>{
  e.preventDefault();
  try {

    const labels = course.map(c => c.knowledgeUnit);
    // const values = course.map(c => c.references.length);
    const values = course.map(c => course.length - course.indexOf(c)); 
    
    new Chart(document.getElementById("chart"), {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "Prerequisite Order",
          data: values,
          backgroundColor: "rgba(54, 162, 235, 0.6)"
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  } catch(err){
      Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message || 'Something went wrong!',
      })
  }

})

document.getElementById('pieBtn').addEventListener('click', e=>{
  e.preventDefault();
  try {

    const categories = {
      "Introduction": 0,
      "Pointers & Memory": 0,
      "OOP": 0,
      "Advanced": 0
    };
    
    course.forEach(c => {
      if (/pointeurs|allocation|raii/i.test(c.position)) {
        categories["Pointers & Memory"]++;
      } else if (/classe|héritage|polymorphisme/i.test(c.position)) {
        categories["OOP"]++;
      } else if (/template|cast|statique|règle/i.test(c.position)) {
        categories["Advanced"]++;
      } else {
        categories["Introduction"]++;
      }
    });
    
    new Chart(document.getElementById("chart"), {
      type: "pie",
      data: {
        labels: Object.keys(categories),
        datasets: [{
          data: Object.values(categories),
          backgroundColor: [
            "#ff6384",
            "#36a2eb",
            "#ffcd56",
            "#4caf50"
          ]
        }]
      }
    });
  } catch(err){
      Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message || 'Something went wrong!',
      })
  }
})

document.getElementById('donutBtn').addEventListener('click', e=>{
  e.preventDefault();
  try {
    const totalRefs = course.reduce((sum, c) => sum + c.references.length, 0);
    
    new Chart(document.getElementById("chart"), {
      type: "doughnut",
      data: {
        labels: ["Chapters", "References"],
        datasets: [{
          data: [course.length, totalRefs],
          backgroundColor: ["#8e44ad", "#3498db"]
        }]
      }
    });

  } catch(err){
      Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message || 'Something went wrong!',
      })
  }
})  


documnet.getElementById('lineBtn').addEventListener('click', e=>{
  e.preventDefault();
  try {

    let cumulative = 0;
    const progression = course.map(c => {
      cumulative += c.references.length;
      return cumulative;
    });
    
    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: course.map((_, i) => `Chapter ${i + 1}`),
        datasets: [{
          label: "Cumulative References",
          data: progression,
          borderColor: "#2ecc71",
          fill: false,
          tension: 0.3
        }]
      }
    });
  } catch(err){
      Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message || 'Something went wrong!',
      })
  }
})


document.getElementById('scatterBtn').addEventListener('click', e=>{
  e.preventDefault();
  try {

    const scatterData = course.map((c, i) => ({
      x: i + 1,
      y: c.references.length
    }));
    
    new Chart(document.getElementById("chart"), {
      type: "scatter",
      data: {
        datasets: [{
          label: "References per Chapter",
          data: scatterData,
          backgroundColor: "#e67e22"
        }]
      },
      options: {
        scales: {
          x: { title: { display: true, text: "Chapter Index" } },
          y: { title: { display: true, text: "References" }, beginAtZero: true }
        }
      }
    });
  } catch(err){
      Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message || 'Something went wrong!',
      })
  }
})
