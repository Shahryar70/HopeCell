import React from 'react'

const States = () => {
    const stats = [
      { value: "10,000+", label: "Patients Supported" },
    { value: "35,000", label: "Donors Registered" },
    { value: "₹2.5Cr+", label: "Treatment Funded" }
    ];
  return (
    <div>
        <section className='py-8 bg-teal-50'>
            <div className='container mx-auto grid grid-cols-3 gap-4 text-center'>
        {stats.map((stat, i)=>(
            <div key={i} className='p-4'>
           <h3 className='text-lg font-bold text-teal-600'>{stat.value}</h3>
           <p className='text-base mt-2 font-normal text-gray-600'>{stat.label}</p>
            </div>
       ))}
            </div>
        </section>
    </div>
  )
}

export default States