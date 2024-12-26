import Image from 'next/image'

interface PersonalInfoProps {
  data: {
    name: string
    email: string
    phone: string
    location: string
  }
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data }) => {
  return (
    <section className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>

      <p className="mb-2">Email: {data.email}</p>
      <p className="mb-2">Phone: {data.phone}</p>
      <p>Location: {data.location}</p>
    </section>
  )
}

export default PersonalInfo

