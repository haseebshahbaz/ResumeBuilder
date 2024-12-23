import Image from 'next/image'
import ProfileImg from '../assets/M.Haseeb.png'

const PersonalInfo = () => {
  return (
    <section className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-4">Muhammad Haseeb</h1>
      <div className="mb-4">
        <Image
          src={ProfileImg.src}
          alt="Muhammad Haseeb"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
      </div>
      <p className="mb-2">Email: haseebshahbazpk786@gmail.com</p>
      <p className="mb-2">Phone: (+92) 302-2951029</p>
      <p>Location: Karachi, KHI</p>
    </section>
  )
}

export default PersonalInfo

