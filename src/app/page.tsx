import Link from "next/link";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";


export default function Home() {
  // This is just sample data. In a real application, you'd fetch this from an API or database
  const sampleData = {
    personalInfo: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '(123) 456-7890',
      location: 'New York, NY'
    },
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        graduationDate: 'May 2022'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
    workExperience: [
      {
        jobTitle: 'Software Developer',
        company: 'Tech Solutions Inc.',
        startDate: 'June 2022',
        endDate: 'Present',
        responsibilities: 'Developed and maintained web applications using React and Node.js.'
      }
    ]
  }

  return (
    <main className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <PersonalInfo data={sampleData.personalInfo} />
        <Education data={sampleData.education} />
        <Skills data={sampleData.skills} />
        <WorkExperience data={sampleData.workExperience} />
        <div className="mt-8 text-center">
          <Link href="/build" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Build Your Own Resume
          </Link>
        </div>
      </div>
    </main>
  )
}

