import { useState } from 'react'

interface Education {
  degree: string
  institution: string
  graduationDate: string
}

interface EducationFormProps {
  updateFormData: (section: string, data: Education[]) => void
}

const EducationForm: React.FC<EducationFormProps> = ({ updateFormData }) => {
  const [educations, setEducations] = useState<Education[]>([{ degree: '', institution: '', graduationDate: '' }])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const updatedEducations = educations.map((edu, i) => {
      if (i === index) {
        return { ...edu, [name]: value }
      }
      return edu
    })
    setEducations(updatedEducations)
    updateFormData('education', updatedEducations)
  }

  const addEducation = () => {
    setEducations([...educations, { degree: '', institution: '', graduationDate: '' }])
  }

  const removeEducation = (index: number) => {
    const updatedEducations = educations.filter((_, i) => i !== index)
    setEducations(updatedEducations)
    updateFormData('education', updatedEducations)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Education</h2>
      {educations.map((education, index) => (
        <div key={index} className="space-y-2 p-4 border rounded">
          <div>
            <label htmlFor={`degree-${index}`} className="block mb-1">
              Degree
            </label>
            <input
              type="text"
              id={`degree-${index}`}
              name="degree"
              value={education.degree}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor={`institution-${index}`} className="block mb-1">
              Institution
            </label>
            <input
              type="text"
              id={`institution-${index}`}
              name="institution"
              value={education.institution}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor={`graduationDate-${index}`} className="block mb-1">
              Graduation Date
            </label>
            <input
              type="text"
              id={`graduationDate-${index}`}
              name="graduationDate"
              value={education.graduationDate}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-sm"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Add Education
      </button>
    </div>
  )
}

export default EducationForm

