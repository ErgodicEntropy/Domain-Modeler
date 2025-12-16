import express from "express";
import multer from "multer";
import fs from "fs";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CohereEmbeddings, ChatCohere } from "@langchain/cohere";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RetrievalQAChain } from "langchain/chains";
import { CreateRetriever, ConstructChain, generateK } from "./RAG";

const app = express(); 
const upload = multer({dest:"uploads/"});


app.post("/upload", upload.single("pdf"), async(req,res)=>{
    
    const filepath = req.file.path;
    
    const loader = new PDFLoader(filepath);

    const doc = await loader.load();

    fs.unlinkSync(filepath); 

})


