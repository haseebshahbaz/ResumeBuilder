interface SkillsProps {
  data: string[]
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc pl-5">
        {data.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

