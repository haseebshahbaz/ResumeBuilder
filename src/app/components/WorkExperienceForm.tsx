import { useState } from 'react'

interface WorkExperience {
  jobTitle: string
  company: string
  startDate: string
  endDate: string
  responsibilities: string
}

interface WorkExperienceFormProps {
  updateFormData: (section: string, data: WorkExperience[]) => void
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({ updateFormData }) => {
  const [experiences, setExperiences] = useState<WorkExperience[]>([
    { jobTitle: '', company: '', startDate: '', endDate: '', responsibilities: '' },
  ])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const updatedExperiences = experiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [name]: value }
      }
      return exp
    })
    setExperiences(updatedExperiences)
    updateFormData('workExperience', updatedExperiences)
  }

  const addExperience = () => {
    setExperiences([...experiences, { jobTitle: '', company: '', startDate: '', endDate: '', responsibilities: '' }])
  }

  const removeExperience = (index: number) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index)
    setExperiences(updatedExperiences)
    updateFormData('workExperience', updatedExperiences)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="space-y-2 p-4 border rounded">
          <div>
            <label htmlFor={`jobTitle-${index}`} className="block mb-1">
              Job Title
            </label>
            <input
              type="text"
              id={`jobTitle-${index}`}
              name="jobTitle"
              value={experience.jobTitle}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor={`company-${index}`} className="block mb-1">
              Company
            </label>
            <input
              type="text"
              id={`company-${index}`}
              name="company"
              value={experience.company}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor={`startDate-${index}`} className="block mb-1">
              Start Date
            </label>
            <input
              type="text"
              id={`startDate-${index}`}
              name="startDate"
              value={experience.startDate}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor={`endDate-${index}`} className="block mb-1">
              End Date
            </label>
            <input
              type="text"
              id={`endDate-${index}`}
              name="endDate"
              value={experience.endDate}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor={`responsibilities-${index}`} className="block mb-1">
              Responsibilities
            </label>
            <textarea
              id={`responsibilities-${index}`}
              name="responsibilities"
              value={experience.responsibilities}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
              rows={3}
            />
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-sm"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Add Work Experience
      </button>
    </div>
  )
}

export default WorkExperienceForm

