


const ServiceCard = ({ title, id, image1, image2, image3, image4, index, active, setActive}) => {

    
    
    const isActive = active === index
    
    
    const handleHover=()=>{
        setActive(isActive? null : index)
        
    }
    const handleLeave=()=>{
        setActive(isActive? null : index)
        
    }



    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleLeave}  className={`transition-all ease-out duration-500 relative  w-full ${isActive ? "h-[16vw]": "h-[7vw]"}`}>
            <div  className={`cursor-pointer  h-[5vw]  text-black/40 w-full flex justify-center items-center  ${isActive ? "opacity-0": "opacity-100"} `}>
                <h1 className="text-[5.4vw] cursor-pointer">{title}</h1>
                <h5 className="text-[1vw] mt-[2vw]">{id}</h5>

            </div>

            <div  className={`absolute top-0  h-[16vw] w-full  ${isActive ? "opacity-100": "opacity-0"}`}>
                <h1 className="text-[4.5vw]">{title}</h1>
                <div className="flex items-center justify-center gap-[2vw]">
                    <img className="h-[8vw] w-[10vw] object-cover rounded-xl" src={image1} alt="" />
                    <img className="h-[8vw] w-[10vw] object-cover rounded-xl" src={image2} alt="" />
                    <img className="h-[8vw] w-[10vw] object-cover rounded-xl" src={image3} alt="" />
                    <img className="h-[8vw] w-[10vw] object-cover rounded-xl" src={image4} alt="" />
                </div>
            </div>

        </div>

    )
}

export default ServiceCard
