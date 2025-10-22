import React from 'react'
import Section1 from './components/section-1/Section1'
import Section2 from './components/section-2/Section2'

const App = () => {

  const users = [
{
img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
intro:"",
color:"royalblue",
tag:"Satisfied"
},
{
img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
intro:"",
color:"lightseagreen",

tag:"UnderServed"
},
{
img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
color:"orange",
intro:"",

tag:"UnderBanked"
},
{
  img:"https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=691",
  intro:"",
  color:"pink",

  tag:"Average",
},
{
  img:"https://plus.unsplash.com/premium_photo-1661741416773-8751741873a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  intro:"",
  color:"black",

  tag:"Average",
},
  ]




  return (
    <div className=''>
    <Section1 users={users}/>
    <Section2/>
    
    </div>
  )
}

export default App
