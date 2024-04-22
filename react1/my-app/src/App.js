import React, { useState } from 'react'
import Card from '../src/components/Card'
function App() {
  const data = [
    {Name:"rahul",profession:"students",img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",freinds:false},
    {Name:"khushi",profession:"coder",img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXRzfGVufDB8fDB8fHww",freinds:false},
    {Name:"gopal",profession:"master",img:"https://images.unsplash.com/photo-1527082395-e939b847da0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",freinds:false},
    {Name:"ranjan",profession:"singer",img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",freinds:false}
  ]

   const[realdata,setrealdara] = useState(data);
   
  return (
    <>
    <div className="w-full h-screen bg-zinc-400 flex gap-4 items-center justify-center">
      {
        realdata.map((item, index)=>{
          // const {Name, profession, img} = item;
          return <>
          <div>
            <Card imag={item.img} name={item.Name} profession={item.profession} />
          </div>
          </>
        })
      }


    </div>

    </>
  )
}

export default App