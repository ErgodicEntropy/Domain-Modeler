import { CohereEmbeddings, ChatCohere } from "@langchain/cohere";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RetrievalQAChain } from "langchain/chains";


export async function CreateRetriever(chunkSize=300, chunkOverlap=50){ 
    
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: chunkSize,
      chunkOverlap: chunkOverlap
    });
    
    const splitDocs = await splitter.splitDocuments(file);
    
    const embeddings = new CohereEmbeddings({
      model: "embed-english-v3.0"
    });
    
    
    const vectorStore = await MemoryVectorStore.fromDocuments(
      splitDocs,
      embeddings
    );
    
    const retriever = vectorStore.asRetriever({
      k: 3 // top-k relevant chunks
    });

}    

export function ConstructChain(T){
    const llm = new ChatCohere({
      model: "command-r-plus",
      temperature: T
    });    
    const chain = RetrievalQAChain.fromLLM(
      llm,
      retriever,
      {
        returnSourceDocuments: true
      }
    );

    return chain;
}


export async function generateK(chain){
    const response = await chain.call({
      query: "Generate a list of concepts from this course document!"
    });
    response.sourceDocuments.forEach(doc => {
        console.log("-", doc.metadata.source);
    });

    return response.result;

}

