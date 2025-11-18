// src/components/PropertyList.jsx
import React,{useState,useEffect} from "react";
import { AgentCard } from "../pages/AgentCard";
import API from "../api";  // Make sure this path is correct

export const Agents= () => {
 
const[agents,setAgents]=useState([])
 useEffect(()=>{
  async function getAllAgents(){
    try{
      const agents= await API.get("/users/agents/")
      console.log(agents.data,'agentss')
      setAgents(agents.data)

    }catch(error){
      console.log(error)
    }
      
  }
  getAllAgents()
 },[])

  return (
    <div className="bg-[#fffaf7] min-h-screen py-12 px-20">
      <h2 className="text-3xl mt-4 font-bold text-gray-800 mb-10 text-left">
        Some Nearby Good agents
      </h2>
      <div className='flex flex-row mt-4 mb-4'  >
      <input type="email" placeholder='Ente your email' className='py-2 outline  pl-2  mr-2  w-[1000px] rounded-lg bg-white' value="" />
      
        <button className="bg-black text-white text-sm md:text-base font-medium px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300">
        Subscribe
      </button>
         
     </div>

    <div className="flex flex-wrap justify-center gap-8 mt-4">
    {agents.map((agent, index) => (
  <AgentCard key={index} {...agent} />
))}
  </div>
    </div>
  );
};
