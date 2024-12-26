interface EducationProps {
  data: {
    degree: string
    institution: string
    graduationDate: string
  }[]
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      {data.map((education, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-medium">{education.degree}</h3>
          <p>{education.institution}</p>
          <p>Graduated: {education.graduationDate}</p>
        </div>
      ))}
    </section>
  )
}

export default Education

