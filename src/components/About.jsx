import about from '../assets/about.png'

function About() {
    return (
        <div className="sm:flex bg-gray-200 h-[28rem]">
            <div className="hidden sm:flex w-[50%] justify-center">
                <img src={about} alt="" />
            </div>
            <div className="flex flex-col sm:w-[50%] text-center items-center sm:items-start sm:text-start px-[2.5rem] sm:pl-0 sm:pr-[15rem] py-[4rem]">
                <h1 className='font-Poppins text-[#0E2368] text-[1.5rem] sm:text-4xl font-bold'>About us</h1>
                <p className='text-[#444957] text-[13px] sm:text-[1rem] sm:leading-[1.5rem] my-[1.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perferendis molestias adipisci blanditiis. Cum fugit labore aperiam illo nemo explicabo vero voluptatibus quos error voluptas nesciunt perspiciatis recusandae enim consequuntur beatae quod ducimus nihil minima, quasi tempora reprehenderit? Odit est, corrupti dolorum pariatur doloribus nobis praesentium tempore. Optio, ducimus expedita!</p>
                <button className="text-sm sm:text-md text-white bg-[#E23744] w-[35%] sm:w-[28%] font-semibold p-1 sm:p-2 rounded-3xl">
                    Read more
                </button>
            </div>
        </div>
    )
}

export default About