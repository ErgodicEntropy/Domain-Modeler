const course = JSON.parse(window.localStorage.getItem('course'));

const nodes = course.map((item, index) => ({
  id: index,
  label: item.knowledgeUnit,
  title: `
    <b>${item.knowledgeUnit}</b><br>
    ${item.definition}<br><br>
    <i>${item.purpose}</i>
  `,
  shape: "box"
}));

const edges = [];

function findIndexByName(name) {
  return course.findIndex(c =>
    c.knowledgeUnit.toLowerCase() === name.toLowerCase()
  );
}

course.forEach((item, index) => {
  if (!item.position) return;

  const match = item.position.match(/Après (les |la |l’|l')?(.*)\./i); //using regex

  if (match) {
    const dependencyName = match[2];
    const fromIndex = findIndexByName(dependencyName);

    if (fromIndex !== -1) {
      edges.push({
        from: fromIndex,
        to: index,
        arrows: "to"
      });
    }
  }
});

const container = document.getElementById("graph");
const data = {
  nodes: new vis.DataSet(nodes),
  edges: new vis.DataSet(edges)
};

const options = {
  layout: {
    hierarchical: {
      direction: "UD",
      sortMethod: "directed"
    }
  },
  physics: false,
  interaction: {
    hover: true
  }
};

new vis.Network(container, data, options);


