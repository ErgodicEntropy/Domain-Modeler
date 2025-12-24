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
  template: "Generate 3 clear, concise questions based on the following chapter:\n\n{chapter}\n\nQuestions:",
  inputVariables: ["chapter"],
});

const chain = new LLMChain({
  llm: cohere,
  prompt: prompt,
});

async function genQuest(chap){
  try{
    const response = await chain.call({chap});
    return response.text;
  } catch(err){
    console.log(err.message);
  }
}

const questions  = await genQuest(chapter);

// const questions = [
//       "What is C++ mainly used for?",
//       "Explain the difference between a pointer and a reference.",
//       "What is RAII and why is it important?"
//     ];

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