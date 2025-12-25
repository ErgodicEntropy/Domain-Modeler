import { Cohere } from "langchain/llms/cohere";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const chapter = window.localStorage.getItem('chapter');


const cohere = new Cohere({
  apiKey: "",
  model: "xlarge", 
  temperature: 0.7,
  maxTokens: 300,
});

const prompt = new PromptTemplate({
  template: "Generate 3 clear, concise questions in the form of an array based on the following chapter:\n\n{chapter}\n\nQuestions:",
  inputVariables: ["chapter"],
});

const chain = new LLMChain({
  llm: cohere,
  prompt: prompt,
});

async function genQuest(ch){
  try{
    const response = await chain.call({ch});
    return response.text;
  } catch(err){
    console.log(err.message);
    return null;
  }
}

async function quiz(ch){
  const response = await genQuest(ch);

  const questions = [...response];

  alert(questions);

  if (questions.length){
    
    alert(Array.isArray(questions));
    questions.forEach((q, i) => {
        const quizDiv = document.getElementById('questionsContainer');
    
        const div = document.createElement('div');
        div.className = "p-4 bg-white rounded-lg shadow-md";
        const label = document.createElement('label');  
        label.className = "block font-medium text-gray-700 mb-2";
        label.textContent = `Question${i}`;
        div.appendChild(label);
        const span = document.createElement('span');  
        span.id = `q${i+1}`;
        span.className = "text-gray-400";
        span.textContent = q;
        label.appendChild(span);
        const inp = document.createElement('textarea');  
        inp.type = "text";
        inp.placeholder = "Your answer...";
        inp.className = "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400";
        div.appendChild(inp);
        
        quizDiv.appendChild(div);
    });
  } else {
    console.log("No questions have been generated!");
  }

}  

quiz(chapter);

document.getElementById('quizForm').addEventListener('submit', e => {
    e.preventDefault();
    try {
        const answers = Array.from(document.querySelectorAll('#quizForm input')).map(input => input.value);
        Swal.fire({
            title: "Good Job!",
            text: "Answers submitted! Check console for values.",
            icon: "success"
      });  

    }catch(err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message || 'Something went wrong!',
        });

    }
});

// const questionsByField = {
//     0: [
//       "What is the difference between C and C++?",
//       "Explain object-oriented programming in C++.",
//       "What are pointers and references in C++?"
//     ]
//   ,
//     1: [
//       "What is the difference between PHP and JavaScript?",
//       "Explain how sessions work in PHP.",
//       "What is PDO and why is it used in PHP?"
//     ]
//   ,
//     2: [
//       "What is UML used for?",
//       "Explain the difference between a class diagram and a sequence diagram.",
//       "What is an association in UML?"
//     ]
//   ,
//     3: [
//       "What is the .NET framework?",
//       "What is the difference between .NET and .NET Core?",
//       "Explain CLR in .NET."
//     ]
//   ,
//     4: [
//       "What is the difference between HTML, CSS, and JavaScript?",
//       "What is responsive web design?",
//       "Explain client-side vs server-side rendering."
//     ]
//   ,
//     5: [
//       "What is a compiler?",
//       "What is the difference between compilation and interpretation?",
//       "What are the main phases of compilation?"
//     ],
//     6: [
//       "What is a primary key in SQL?",
//       "What is the difference between DELETE and TRUNCATE?",
//       "Explain normalization in databases."
//     ],
//     7: [
//       "What is Unix?",
//       "What is the difference between Unix and Linux?",
//       "Explain file permissions in Unix."
//     ]
// };

// const cI= JSON.parse(window.localStorage.getItem('courseIndex'));

// const questions = questionsByField[cI];

// if (questions.length){
//         questions.forEach((q, i) => {
//         const quizDiv = document.getElementById('questionsContainer');
    
//         const div = document.createElement('div');
//         div.className = "p-4 bg-white rounded-lg shadow-md";
//         const label = document.createElement('label');  
//         label.className = "block font-medium text-gray-700 mb-2";
//         // label.textContent = `Question${i}`;
//         div.appendChild(label);
//         const span = document.createElement('span');  
//         span.id = `q${i+1}`;
//         span.className = "text-black-400 font-extrabold";
//         span.textContent = `${i+1}-` + q;
//         label.appendChild(span);
//         const inp = document.createElement('textarea');  
//         inp.type = "text";
//         inp.placeholder = "Your answer...";
//         inp.className = "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400";
//         div.appendChild(inp);
        
//         quizDiv.appendChild(div);
//     });
//   } else {
//     alert("No questions have been generated!");
//   }
// document.getElementById('answerBtn').addEventListener('click', e=>{
//   e.preventDefault();
//   try{
//         Swal.fire({
//             title: "Good Job!",
//             text: "Answers submitted! Check console for values.",
//             icon: "success"
//       });  

//         setTimeout(() => {
//                 window.location.href = 'main.html'}
                
//             , 3000); 

//   } catch(err){
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: err.message || 'Something went wrong!',
//         });
//   }
// })
