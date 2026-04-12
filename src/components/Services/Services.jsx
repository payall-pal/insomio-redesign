import ServiceCard from "./ServiceCard"
import { useState } from "react"

const Services = () => {

    const [active, setActive ] = useState(null)

    const services = [
        {
            id: "01",
            "title": "MEDIA MARKETING",
            "image1": "https://i.pinimg.com/736x/37/ab/43/37ab437d82ecae1eee607c88af256eff.jpg",
            "image2": "https://i.pinimg.com/736x/48/5b/99/485b99ed163fa20b24e3d06245b04052.jpg",
            "image3": "https://i.pinimg.com/736x/3b/1c/99/3b1c99f7e0ceb9b97be7f2333d2d1a0a.jpg",
            "image4": "https://i.pinimg.com/736x/7b/86/98/7b8698753145d4cbf7412dad3cc1c56d.jpg",
            // https://i.pinimg.com/736x/a4/78/f1/a478f120b1ba7198efc878145a45d386.jpg
        },
        {
            id: "02",
            "title": "EMAIL MARKETING",
            "image1": "https://i.pinimg.com/736x/68/5b/bf/685bbfdd5a1e2e523f42a42a8b930648.jpg",
            "image2": "https://i.pinimg.com/1200x/ac/be/7f/acbe7fbee632f7ade3223ea097963d68.jpg",
            "image3": "https://i.pinimg.com/1200x/09/24/aa/0924aa7aa27d7fb7594e4d6982e0ef57.jpg",
            "image4": "https://i.pinimg.com/1200x/98/95/7f/98957f65f8fa941f140e47fa1a2367e8.jpg",
        },
        {
            id: "03",
            "title": "CONSULTANCY",
            "image1": "https://i.pinimg.com/736x/7d/af/6a/7daf6a89eb882864b9bc5cac9c3acf98.jpg",
            "image2": "https://i.pinimg.com/1200x/0c/16/ab/0c16ab7276c1af22dbceb6f4675e2e6a.jpg",
            "image3": "https://i.pinimg.com/1200x/a6/99/bd/a699bd954c4af015f2d81ce5286f9e2e.jpg",
            "image4": "https://i.pinimg.com/736x/42/71/a8/4271a8ce26fb33788af6c663fd340921.jpg",
        },
        {
            id: "04",
            "title": "LOGO DESIGN",
            "image1": "https://i.pinimg.com/736x/6e/9b/e4/6e9be47f42ded55d0a69c26c2fc88e90.jpg",
            "image2": "https://i.pinimg.com/1200x/7a/b4/52/7ab45287862a3265c5579911700abbb8.jpg",
            "image3": "https://i.pinimg.com/736x/30/43/15/304315cea972c2f4c0e1dee9d03fc096.jpg",
            "image4": "https://i.pinimg.com/736x/09/0d/9c/090d9c1c347cd4e8bc382b5a6ceee935.jpg",
        },
        {
            id: "05",
            "title": "WEB DESIGN",
            "image1": "https://i.pinimg.com/736x/32/01/0b/32010b5cfe0d5e35ecea604bb886127d.jpg",
            "image2": "https://i.pinimg.com/1200x/6f/76/b5/6f76b5e5db9047cecbb1e129948a62ae.jpg",
            "image3": "https://i.pinimg.com/736x/51/f1/d4/51f1d4ad1a9371560be8d632e67b4f92.jpg",
            "image4": "https://i.pinimg.com/736x/94/59/98/945998a1ecb47f5ddeb4a1daacd21fc4.jpg",
        }
        

        
    ]

  return (
    <div className='h-[50vw] w-[99vw] text-black bg-(--primary) flex flex-col items-center tracking-widest'>
        <h1 className="text-[1.5vw] font-bold">SERVICES</h1>
      
      
      
      
      
      <div className="flex flex-col items-center text-center w-full transition-all ease-out duration-500 mt-[2vw] ">

        
        {
        services.map((service, index)=>(
            <ServiceCard key={index} index={index} id={service.id} active={active} setActive={setActive} title={service.title} service={service} image1={service.image1} image2={service.image2} image3={service.image3} image4={service.image4}/>
        ))
      }
      </div>




    </div>
  )
}

export default Services
