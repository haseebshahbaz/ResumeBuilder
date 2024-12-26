import { useState } from 'react'

interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: string
}

interface PersonalInfoFormProps {
  updateFormData: (section: string, data: PersonalInfo) => void
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ updateFormData }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    email: '',
    phone: '',
    location: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPersonalInfo((prev) => ({ ...prev, [name]: value }))
    updateFormData('personalInfo', { ...personalInfo, [name]: value })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Personal Information</h2>
      <div>
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={personalInfo.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="location" className="block mb-1">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={personalInfo.location}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
    </div>
  )
}

export default PersonalInfoForm

