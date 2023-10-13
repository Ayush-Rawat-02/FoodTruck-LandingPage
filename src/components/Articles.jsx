import GT from '../assets/GrilledTomatoes.jpg'
import Snacks from '../assets/Salad.jpg'
import Protein from '../assets/ProteinRich.jpg'
import Grill from '../assets/grilledCorn.jpg'
import Burger from '../assets/Burger.jpg'
import Soup from '../assets/Soup.jpg'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from 'react'

function Articles() {
    const [val, setVal] = useState(1);
    const slideLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 1400;
        setVal(1);
    }
    const slideRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 1400;
        setVal(2);
    }
    return (
        <div className='flex flex-col items-center sm:items-center px-6 sm:px-[4rem] py-[2rem]'>
            <h1 className='font-SourceSansPro text-[#0E2368] text-center sm:text-start w-full text-4xl font-extrabold'>Latest Articles</h1>
            <div id='slider' className="flex items-center overflow-x-hidden scroll scroll-smooth w-[18rem] sm:w-[79.4rem] my-8 sm:my-16">
                <div className="flex flex-col sm:flex-row mr-2 sm:mr-0 my-6 sm:my-0 ">
                    <div className='flex flex-col items-center sm:items-start border-2 border-gray-300 rounded-2xl p-[1.5rem] min-w-[18rem] w-[18rem] sm:w-[24rem] sm:mx-5 hover:shadow-4xl hover:bg-gray-100 my-6 sm:my-0'>
                        <img className='rounded-2xl mb-[1.5rem]' src={GT} alt="" />
                        <h1 className='text-[#0E2368] font-bold text-md sm:text-xl'>Grilled Tomatoes at Home</h1>
                        <p className='text-[13px] sm:text-[16px] sm:text-start text-center text-[#444957] my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, pariatur molestiae? Voluptatem nam quibusdam dolorem hic accusamus dignissimos sed itaque!</p>
                        <button className='text-[13px] font-semibold sm:text-[16px] text-[#444957] border-2 border-[#444957] w-[10rem] sm:w-[8rem] py-[0.1rem] sm:px-2 sm:py-1 rounded-3xl hover:bg-white my-2'>
                            Read More
                        </button>
                    </div>
                    <div className='flex flex-col items-center sm:items-start border-2 border-gray-300 rounded-2xl p-[1.5rem] min-w-[18rem] w-[18rem] sm:w-[24rem] sm:mx-5 hover:shadow-4xl hover:bg-gray-100 my-6 sm:my-0'>
                        <img className='rounded-2xl mb-[1.5rem]' src={Snacks} alt="" />
                        <h1 className='text-[#0E2368] font-bold text-md sm:text-xl'>Snacks for Travel</h1>
                        <p className='text-[13px] sm:text-[16px] sm:text-start text-center text-[#444957] my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, pariatur molestiae? Voluptatem nam quibusdam dolorem hic accusamus dignissimos sed itaque!</p>
                        <button className='text-[13px] font-semibold sm:text-[16px] text-[#444957] border-2 border-[#444957] w-[10rem] sm:w-[8rem] py-[0.1rem] sm:px-2 sm:py-1 rounded-3xl hover:bg-white my-2'>
                            Read More
                        </button>
                    </div>
                    <div className='flex flex-col items-center sm:items-start border-2 border-gray-300 rounded-2xl p-[1.5rem] min-w-[18rem] w-[18rem] sm:w-[24rem] sm:mx-5 hover:shadow-4xl hover:bg-gray-100 my-6 sm:my-0'>
                        <img className='rounded-2xl mb-[1.5rem]' src={Protein} alt="" />
                        <h1 className='text-[#0E2368] font-bold text-md sm:text-xl'>Post-Workout Recipes</h1>
                        <p className='text-[13px] sm:text-[16px] sm:text-start text-center text-[#444957] my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, pariatur molestiae? Voluptatem nam quibusdam dolorem hic accusamus dignissimos sed itaque!</p>
                        <button className='text-[13px] font-semibold sm:text-[16px] text-[#444957] border-2 border-[#444957] w-[10rem] sm:w-[8rem] py-[0.1rem] sm:px-2 sm:py-1 rounded-3xl hover:bg-white my-2'>
                            Read More
                        </button>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row my-6 sm:my-0">
                    <div className='flex flex-col items-center sm:items-start border-2 border-gray-300 rounded-2xl p-[1.5rem] min-w-[18rem] w-[18rem] sm:w-[24rem] sm:mx-5 hover:shadow-4xl hover:bg-gray-100 my-6 sm:my-0'>
                        <img className='rounded-2xl mb-[1.5rem]' src={Grill} alt="" />
                        <h1 className='text-[#0E2368] font-bold text-md sm:text-xl'>How to Grill Corn</h1>
                        <p className='text-[13px] sm:text-[16px] sm:text-start text-center text-[#444957] my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, pariatur molestiae? Voluptatem nam quibusdam dolorem hic accusamus dignissimos sed itaque!</p>
                        <button className='text-[13px] font-semibold sm:text-[16px] text-[#444957] border-2 border-[#444957] w-[10rem] sm:w-[8rem] py-[0.1rem] sm:px-2 sm:py-1 rounded-3xl hover:bg-white my-2'>
                            Read More
                        </button>
                    </div>
                    <div className='flex flex-col items-center sm:items-start border-2 border-gray-300 rounded-2xl p-[1.5rem] min-w-[18rem] w-[18rem] sm:w-[24rem] sm:mx-5 hover:shadow-4xl hover:bg-gray-100 my-6 sm:my-0'>
                        <img className='rounded-2xl mb-[1.5rem]' src={Burger} alt="" />
                        <h1 className='text-[#0E2368] font-bold text-md sm:text-xl'>Crunchwrap Supreme</h1>
                        <p className='text-[13px] sm:text-[16px] sm:text-start text-center text-[#444957] my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, pariatur molestiae? Voluptatem nam quibusdam dolorem hic accusamus dignissimos sed itaque!</p>
                        <button className='text-[13px] font-semibold sm:text-[16px] text-[#444957] border-2 border-[#444957] w-[10rem] sm:w-[8rem] py-[0.1rem] sm:px-2 sm:py-1 rounded-3xl hover:bg-white my-2'>
                            Read More
                        </button>
                    </div>
                    <div className='flex flex-col items-center sm:items-start border-2 border-gray-300 rounded-2xl p-[1.5rem] min-w-[18rem] w-[18rem] sm:w-[24rem] sm:mx-5 hover:shadow-4xl hover:bg-gray-100 my-6 sm:my-0'>
                        <img className='rounded-2xl mb-[1.5rem]' src={Soup} alt="" />
                        <h1 className='text-[#0E2368] font-bold text-md sm:text-xl'>Broccoli Cheese Soup</h1>
                        <p className='text-[13px] sm:text-[16px] sm:text-start text-center text-[#444957] my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, pariatur molestiae? Voluptatem nam quibusdam dolorem hic accusamus dignissimos sed itaque!</p>
                        <button className='text-[13px] font-semibold sm:text-[16px] text-[#444957] border-2 border-[#444957] w-[10rem] sm:w-[8rem] py-[0.1rem] sm:px-2 sm:py-1 rounded-3xl hover:bg-white my-2'>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <AiOutlineLeft className='text-[#444957] border-[#444957] border-2 w-5 h-5 mx-1 cursor-pointer hover:bg-gray-400' onClick={slideLeft} />
                <p>{val}/2</p>
                <AiOutlineRight className='text-[#444957] border-[#444957] border-2 w-5 h-5 mx-1 cursor-pointer hover:bg-gray-400' onClick={slideRight} />
            </div>
        </div>
    )
}

export default Articles