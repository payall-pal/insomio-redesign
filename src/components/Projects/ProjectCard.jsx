
import { Link } from 'react-router-dom'


const ProjectCard = ({ title, topic, image, id }) => {


    return (
        <div className='projectCard font-bold flex gap-[1vw]'>

        <div  className=' h-[40vw] w-[42vw]  rounded-2xl'>
            <div className='h-[35vw] w-full '>
                <img className='h-[35vw] w-full object-cover rounded' src={image} alt="" />
            </div>
            <div className='h-[5vw]  flex items-center justify-between px-[0.5vw]'>
                <div className=' tracking-wide'>
                    <h3 className='text-[1.1vw] '>{title}</h3>
                    <h4 className='text-[1vw] font-bold'>{topic}</h4>
                </div>
                 <Link key={id} to={`/aboutProject/${id}`}>
                  <div className='px-[0.4vw] py-[0.15vw] inline-block  active:scale-90 rounded-full text-[0.8vw] font-semibold border-black/80 border-2'>
                    <i class="ri-arrow-right-up-line"></i>
                </div>
                </Link>
                
                
                

                
            </div>

        </div>


        </div>
    )
}

export default ProjectCard
// https://i.pinimg.com/736x/94/28/59/942859a21a06003cc4ce66194bf8075c.jpg