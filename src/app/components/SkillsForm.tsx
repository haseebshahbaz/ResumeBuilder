import { useState } from 'react'

interface SkillsFormProps {
  updateFormData: (section: string, data: string[]) => void
}

const SkillsForm: React.FC<SkillsFormProps> = ({ updateFormData }) => {
  const [skills, setSkills] = useState<string[]>([''])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSkills = skills.map((skill, i) => (i === index ? e.target.value : skill))
    setSkills(updatedSkills)
    updateFormData('skills', updatedSkills.filter((skill) => skill.trim() !== ''))
  }

  const addSkill = () => {
    setSkills([...skills, ''])
  }

  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index)
    setSkills(updatedSkills)
    updateFormData('skills', updatedSkills.filter((skill) => skill.trim() !== ''))
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="flex space-x-2">
          <input
            type="text"
            value={skill}
            onChange={(e) => handleChange(index, e)}
            placeholder="Enter a skill"
            className="flex-grow px-3 py-2 border rounded"
          />
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-sm"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addSkill}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Add Skill
      </button>
    </div>
  )
}

export default SkillsForm

