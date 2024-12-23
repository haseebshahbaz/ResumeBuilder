'use client'

import { useState } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <button
          onClick={toggleVisibility}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          {isVisible ? 'Hide Skills' : 'Show Skills'}
        </button>
      </div>
      {isVisible && (
        <ul className="list-disc pl-5">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      )}
    </section>
  )
}

export default Skills

