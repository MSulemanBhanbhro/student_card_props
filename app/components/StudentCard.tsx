import React from 'react'

interface StudentCardProps {
    name: string;
    age: number;
    rollNumber: string;
    className: string;
}

const StudentCard : React.FC<StudentCardProps> = ({name,age,rollNumber,className}) => {
  return (
    <>
    <div className='bg-gray-800 text-white shadow-md rounded-lg p-4 m-2  h-[180px] w-full   md:w-1/4'>
    <h1 className='text-xl font-bold  mb-2 text-white-800'>{name}</h1>
    <p className='text-gray-600 text-lg'>Age: {age}</p>
    <p className='text-gray-600 text-lg'>Roll Number: {rollNumber}</p>
    <p className='text-gray-600 text-lg'>Class: {className} </p>

    </div>
    </>
  )
}

export default StudentCard;