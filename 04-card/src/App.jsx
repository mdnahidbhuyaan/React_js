import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./Components/Card";
const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Dhaka, Bangladesh",
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1678483789107-6402b5848d95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1528",
    companyName: "Google",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$78/hour",
    location: "Remote, Bangladesh",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "7 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Dhaka, Bangladesh",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Chattogram, Bangladesh",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "12 days ago",
    post: "Data Analyst",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$72/hour",
    location: "Dhaka, Bangladesh",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$70/hour",
    location: "Dhaka, Bangladesh",
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Remote, Bangladesh",
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$88/hour",
    location: "Dhaka, Bangladesh",
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "9 days ago",
    post: "DevOps Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Sylhet, Bangladesh",
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Remote, Bangladesh",
  },
];


  return (
    <div className="parent">
   {jobOpenings.map(function(elem,idx){
    console.log(idx)
    return   <Card key={idx} company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} datePosted={elem.datePosted} />
  
   })}
    </div>
  );
};

export default App;
