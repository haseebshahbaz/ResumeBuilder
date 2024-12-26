'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PersonalInfoForm from '../components/PersonalInfoForm'
import EducationForm from '../components/EducationForm'
import WorkExperienceForm from '../components/WorkExperienceForm'
import SkillsForm from '../components/SkillsForm'

export default function BuildResume() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    personalInfo: {},
    education: [],
    workExperience: [],
    skills: [],
  })

  const updateFormData = (section: string, data: any) => {
    setFormData((prev) => ({ ...prev, [section]: data }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store the form data in localStorage
    localStorage.setItem('resumeData', JSON.stringify(formData))
    // Redirect to the resume page
    router.push('/resume')
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Build Your Resume</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <PersonalInfoForm updateFormData={updateFormData} />
        <EducationForm updateFormData={updateFormData} />
        <WorkExperienceForm updateFormData={updateFormData} />
        <SkillsForm updateFormData={updateFormData} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Generate Resume
        </button>
      </form>
    </div>
  )
}