const course = JSON.parse(window.localStorage.getItem('course'));

const labels = course.map(c => c.knowledgeUnit);
const values = course.map(c => c.references.length);

new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels,
    datasets: [{
      label: "Number of References",
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

// const categories = {
//   "Introduction": 0,
//   "Pointers & Memory": 0,
//   "OOP": 0,
//   "Advanced": 0
// };

// course.forEach(c => {
//   if (/pointeurs|allocation|raii/i.test(c.position)) {
//     categories["Pointers & Memory"]++;
//   } else if (/classe|héritage|polymorphisme/i.test(c.position)) {
//     categories["OOP"]++;
//   } else if (/template|cast|statique|règle/i.test(c.position)) {
//     categories["Advanced"]++;
//   } else {
//     categories["Introduction"]++;
//   }
// });

// new Chart(document.getElementById("pieChart"), {
//   type: "pie",
//   data: {
//     labels: Object.keys(categories),
//     datasets: [{
//       data: Object.values(categories),
//       backgroundColor: [
//         "#ff6384",
//         "#36a2eb",
//         "#ffcd56",
//         "#4caf50"
//       ]
//     }]
//   }
// });


// const totalRefs = course.reduce((sum, c) => sum + c.references.length, 0);

// new Chart(document.getElementById("donutChart"), {
//   type: "doughnut",
//   data: {
//     labels: ["Chapters", "References"],
//     datasets: [{
//       data: [course.length, totalRefs],
//       backgroundColor: ["#8e44ad", "#3498db"]
//     }]
//   }
// });


// let cumulative = 0;
// const progression = course.map(c => {
//   cumulative += c.references.length;
//   return cumulative;
// });

// new Chart(document.getElementById("lineChart"), {
//   type: "line",
//   data: {
//     labels: course.map((_, i) => `Chapter ${i + 1}`),
//     datasets: [{
//       label: "Cumulative References",
//       data: progression,
//       borderColor: "#2ecc71",
//       fill: false,
//       tension: 0.3
//     }]
//   }
// });


// const scatterData = course.map((c, i) => ({
//   x: i + 1,
//   y: c.references.length
// }));

// new Chart(document.getElementById("scatterChart"), {
//   type: "scatter",
//   data: {
//     datasets: [{
//       label: "References per Chapter",
//       data: scatterData,
//       backgroundColor: "#e67e22"
//     }]
//   },
//   options: {
//     scales: {
//       x: { title: { display: true, text: "Chapter Index" } },
//       y: { title: { display: true, text: "References" }, beginAtZero: true }
//     }
//   }
// });
