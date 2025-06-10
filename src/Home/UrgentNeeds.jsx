import React from 'react'

const UrgentNeeds = () => {
    const needs = [
  { type: "AB+ Blood", neededBy: "15 July" },
    { type: "Bone Marrow", neededBy: "Urgent" }
    ]
  return (
    <div>
   <section className='py-8 bg-rose-50-50'>
 <h2 className='text-3xl font-bold text-center mb-8'>Urgent Needs</h2>
 <div className='container mx-auto grid gap-4 max-w-2xl'>
{needs.map ((need, i) => (
    <div key={i} className='p-4 border borde-rose-200 rounded-lg bg-white'>
        <div className='flex justify-between'>
            <span className='font-bold'>{need.type}</span>
            <span className='text-rose-600'>{need.neededBy}</span>
            </div>
            <button className='mt-2 btn btn-sm btn-error'>Need By</button>
        </div>
))}
 </div>
   </section>
    </div>
  )
}

export default UrgentNeeds