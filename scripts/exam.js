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

// Create chain
const chain = new LLMChain({
  llm: cohere,
  prompt: prompt,
});

(async () => {
  try {
    const response = await chain.call({ chapter });
    console.log("Generated Questions:\n", response.text);
  } catch (err) {
    console.error("Error generating questions:", err);
  }
})();

const questions  = response.text;

// const questions = [
//       "What is C++ mainly used for?",
//       "Explain the difference between a pointer and a reference.",
//       "What is RAII and why is it important?"
//     ];

questions.forEach((q, i) => {
    const span = document.getElementById(`q${i+1}`);
    if(span) span.textContent = q;
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
