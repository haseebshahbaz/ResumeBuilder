import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";


export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <PersonalInfo />
        <Education />
        <Skills />
        <WorkExperience />
      </div>
    </main>
  )
}

