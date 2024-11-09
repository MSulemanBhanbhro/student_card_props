import React from 'react'

import StudentCard from './components/StudentCard'
interface Student {
  name: string;
  age: number;
  rollNumber: string;
  className: string;
}

const Home = () => {
  const students: Student[] = [
    {
      name: 'Suleman', age: 24, rollNumber: '111972' , className: '12th'
    },
    {
      name: 'Usman', age: 22, rollNumber: '1927' , className: '11th'
    },
    {
      name: 'Ahmed', age: 19, rollNumber: '98743' , className: '10th'
    },
  ]
  return (
    
    <div className=' flex md:flex-row flex-col justify-center items-center min-h-screen bg-gray-500 px-4'>
      
      {students.map((student , index) => (
        <StudentCard 
        key={index}
        name={student.name}
        age={student.age}
        rollNumber={student.rollNumber}
        className={student.className}
        />

      ))}
     

</div>
    
    
    
  )
}

export default Home