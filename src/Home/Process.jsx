import React from 'react'

const Process = () => {
    const step = [
  {
    icon: "🩺", 
    title: "Register",
    desc: "Join our donor database"
  },
  {
    icon: "🧬",
    title: "Get Matched",
    desc: "We connect compatible donors"
  },
  {
    icon: "❤️",
    title: "Save Lives",
    desc: "Your donation gives hope"
  }
    ];
  return (
    <div>
 <section className='py-4 bg-gray-50'>
<div className='container mx-auto grid md:grid-cols-3 gap-8'>
 {step.map((steps , i)=>(
    <div key={id}>
        
    </div>
 ))}
</div>
 </section>
    </div>
  )
}

export default Process