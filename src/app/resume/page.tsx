'use client'

import { useEffect, useState } from 'react'
import PersonalInfo from '../components/PersonalInfo'
import Education from '../components/Education'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'


export default function Resume() {
  const [resumeData, setResumeData] = useState<any>(null)

  useEffect(() => {
    const data = localStorage.getItem('resumeData')
    if (data) {
      setResumeData(JSON.parse(data))
    }
  }, [])

  if (!resumeData) {
    return <div>Loading...</div>
  }

  return (
    <main className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <PersonalInfo data={resumeData.personalInfo} />
        <Education data={resumeData.education} />
        <Skills data={resumeData.skills} />
        <WorkExperience data={resumeData.workExperience} />
      </div>
    </main>
  )
}
