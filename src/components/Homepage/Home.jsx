
import HomeNav from '../Nav/HomeNav'
import Navbar from '../Nav/Navbar'
import HomeHeading from './HomeHeading'

const Home = () => {


    return (
        <div className='relative  page1 lg:h-[50vw] h-[150vw] w-[99vw] bg-(--primary) text-black/90 flex flex-col justify-between lg:px-[6vw] py-[5vw] lg:py-[3vw]'>

            <section>
                <HomeNav />
            </section>

            <section className='flex items-center justify-center w-full'>

                <HomeHeading />
            </section>

            <section>
                <Navbar />
            </section>

            

        </div>
    )
}

export default Home
