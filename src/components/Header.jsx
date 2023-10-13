import v1 from '../assets/Vector1.svg'
import pizza from '../assets/pizza.png'
import truck from '../assets/truck.png'

function Header() {
    return (
        <div className="flex max-w-screen w-screen flex-col-reverse sm:h-[60rem] sm:flex-row">
            <div className="flex flex-col sm:w-[50%] px-[4rem] pb-[6rem] pt-[2rem] sm:py-[1.5rem] items-center text-center sm:text-start sm:items-start">
                <img className="w-[106px] hidden sm:block" src={truck} alt="" />
                {/* <h1 className="text-[#0E2368] text-3xl sm:text-5xl sm:leading-[3.5rem] sm:w-[50%] sm:mt-[6rem] font-extrabold">Discover the <span className="text-[#E23744]">Best</span> Food and Drinks</h1> */}
                <h1 className="font-SourceSansPro text-[#0E2368] text-3xl sm:text-[58px] sm:leading-[65px] sm:w-[350px] sm:font-[700] sm:mt-[6rem] font-[700] sm:font-extrabold">Discover the <span className="text-[#E23744]">Best</span> Food and Drinks</h1>
                {/* <p className='text-[#444957] text-sm sm:text-lg sm:w-[55%] my-[2rem]'>Naturally made Healthcare Products for the better care & support of your body.</p> */}
                <p className='font-OpenSans text-[#444957] text-[13px] sm:text-[17.5px] sm:leading-[27.41px] sm:w-[350px] sm:h-[55px] my-[2rem]'>Naturally made Healthcare Products for the better care & support of your body.</p>
                {/* <button className="bg-[#E23744] w-[80%] py-1 sm:py-4 sm:w-[30%] rounded-[5rem] text-white font-bold"> */}
                <button className="text-sm sm:text-lg bg-[#E23744] w-[120px] sm:py-4 sm:w-[190px] h-[40px] sm:h-[63px] rounded-[34px] text-white font-bold">
                    Explore now!
                </button>
            </div>
            <div className="flex justify-end sm:w-[50%] min-[340px]:h-[25rem] min-[400px]:h-[35rem] min-[500px]:h-[44rem] sm:h-[50rem]">
                <img className='absolute top-0 sm:w-[53%] z-10' src={v1} alt="" />
                <img className='absolute top-0 z-1' src={pizza} alt="" />
                <button className='text-[10px] sm:text-lg text-white absolute top-4 right-5 sm:top-6 sm:right-12 z-10 border-2 border-white rounded-3xl px-2 py-1 sm:px-4 sm:py-2 font-semibold'>
                    Get In Touch
                </button>
            </div>
        </div>
    )
}

export default Header