import { BarChart2, ClipboardList, DatabaseBackup, Users } from 'lucide-react';
import React from 'react'

const Features = () => {


    const features = [
  {
    icon: Users,
    title: "User Management",
    description:
      "Manage user accounts, roles, permissions, and access levels efficiently across the platform."
  },
  {
    icon: ClipboardList,
    title: "Task Tracking",
    description:
      "Create, assign, monitor, and update tasks while improving team productivity and collaboration."
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description:
      "Visualize key metrics, generate reports, and track business performance through interactive charts."
  },
  {
    icon: DatabaseBackup,
    title: "Data Storage",
    description:
      "Store, organize, and retrieve important records securely with reliable database management tools."
  }
]

return (
    <section className='px-20 py-32'>
        <div>
            <h2 className ='text-5xl font-bold mb-24 text-center'>Features</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                features.map((feature, index)=>{
                    return (
                        <div key={index} className='flex flex-col items-center gap-4 text-center 
                            p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                            <feature.icon className='w-12 h-12 text-blue-700' />

                            <h3 className='text-xl font-medium my-2'>{feature.title}</h3>

                            <p className='text-gray-600'>{feature.description}</p>
                        </div>
                    )
                })
            }
        </div>


    </section>
  )
}

export default Features



