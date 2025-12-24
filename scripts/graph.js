const course = JSON.parse(window.localStorage.getItem('course') || '[]'); 

if (!course.length){
    Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No Course',
    });
    alert("empty course list");
}

const nodes = course.map((chapter,index) => (
    {
        id: index, 
        label: chapter.knowledgeUnit,
        title: `
            <b>${chapter.knowledgeUnit}</b><br>
            ${chapter.definition}<br><br>
            <i>${chapter.purpose}</i>
        `,
        shape: "box"
    }
));

if (!nodes.length){
    Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No Nodes',
    });
    alert("empty nodes list");

}


//this function determines if there is an edge between two nodes or not -> prerequisite logic

const edges = []

course.forEach((chapter, index) => {
        const preqs  = chapter.prerequisites; //chapter object key with a value as an array of indices of prerequisite chapters ('before' relationship)
        for (let k = 0; k < preqs.length; k++){
            edges.push({
                from:preqs[k],
                to: index,
                arrows: "to"
            })
        }
});

if (!edges.length){
    Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No Edges',
    });
    alert("empty edges list");
}


//construction
const container = document.getElementById('graph');

const data = {
    nodes: new vis.DataSet(nodes),
    edges: new vis.DataSet(edges)
}

const options = {
    autoResize: true,
    height: '100%',
    width: '100%',
    layout: {
        hierarchical: {
            direction: "UD",
            sortMethod: "directed"
        }
    },
    physics: false,
    interaction: {
        hover:true
    },
    // manipulation:{

    // }
}

new vis.Network(container, data, options);