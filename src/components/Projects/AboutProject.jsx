import  { useEffect } from 'react'
import projects from '../Data/Data'
import { useParams } from 'react-router-dom'


const AboutProject = () => {

    //ScrollToTop  ~ page bottom side pe khul rha tha
    useEffect(() => {
        window.scrollTo(0,0)
    },[])


    // Data Manipulation

    const { id } = useParams()

    const project = projects.find((p)=>p.id === Number(id))
    

    return (
        <div className='min-h-[50vw] w-[99vw] bg-(--primary) p-[6vw] relative'>
            <div className='flex flex-col text-black text-[1.4vw] w-full'>
                <h4 className='text-[5vw] '>{project.title}</h4>
                

                <div className='flex gap-[0.9vw] items-center '>

                    <h3 className='text-[1vw] font-semibold ml-[0.5vw]'>EXPLORE IT</h3>
                    <div className='px-[0.4vw] py-[0.15vw]  rounded-full text-[0.8vw] font-semibold border-black/80 border-2'>
                        <i class="ri-arrow-right-up-line"></i>
                    </div>

                </div>
            </div>

            <div className='mt-[3vw] flex gap-[5vw]'>
                <div>
                    <img className='h-[30vw] w-[45vw] object-cover object-top-right' src={project.projectimage} alt="" />
                
                    <div className='absolute bottom-[1vw] flex gap-[0.9vw] items-center'>
    
                           <h3 className=' text-[1.5vw] font-bold'>CONTACT US</h3>
    
                            <div className='px-[0.4vw] py-[0.15vw]  text-[1.3vw] font-semibold '>
                                <i class="ri-arrow-right-up-line"></i>
                            </div>
    
                    </div>
               
                </div>

                <div>

                    <div className='text-[1.4vw] font-semibold leading-[3vw] mt-[3vw]'>
                        <h4>- {project.projectkeypoints[0]}</h4>
                        <h4>- {project.projectkeypoints[1]}</h4>
                        <h4>- {project.projectkeypoints[2]}</h4>
                    </div>
                    <div className='mt-[11vw]'>
                        <p className='text-[1.1vw] font-semibold leading-[2vw]  w-[40vw]'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
                           {project.projectDescription} </p>
                    </div>


                </div>

               
            </div>



        </div>
    )
}

export default AboutProject
