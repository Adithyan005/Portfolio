
import resume from "../assets/resume.jpg"

const Resume = () => {
  return (
    <div className='text-white'>
      <div className='flex justify-center items-center pt-12'>
        <a href="/Adithyan_M.pdf" download>
        <button className='rounded-lg md:px-4 md:py-3 px-5 py-4 text-xl bg-blue'>Download CV</button></a>
      </div>
      <div className='py-12 flex justify-center items-center'>
        <img src={resume} alt="" className='md:w-[50vw] w-[75vw] max-h-fit'/>
      </div>
    </div>
  )
}

export default Resume
