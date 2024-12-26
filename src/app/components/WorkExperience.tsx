interface WorkExperienceProps {
  data: {
    jobTitle: string
    company: string
    startDate: string
    endDate: string
    responsibilities: string
  }[]
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
      {data.map((experience, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-medium">{experience.jobTitle}</h3>
          <p>{experience.company}</p>
          <p className="mb-2">{experience.startDate} - {experience.endDate}</p>
          <p>{experience.responsibilities}</p>
        </div>
      ))}
    </section>
  )
}

export default WorkExperience

