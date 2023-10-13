import truck from '../assets/truck.png';
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
    return (
        <div className="flex flex-col sm:flex-row bg-gray-200 sm:h-[20rem]">
            <div className='flex py-12 items-center justify-center sm:w-[25%]'>
                {/* <img className='w-[25%] sm:w-[35%]' src={truck} alt="" /> */}
                <img className='w-[75px] sm:w-[131px]' src={truck} alt="" />
            </div>
            <div className='flex flex-col sm:w-[25%] pl-[2rem] py-[2rem] sm:py-[4.5rem]'>
                <h1 className='font-SourceSansPro font-bold mb-[1.5rem] text-[#0E2368] text-lg sm:text-xl'>Contact us</h1>
                <p className='text-[#646874] text-[13px] sm:text-[14px] sm:w-[16rem]'>Lorem ipsum dolor  debitis, explicabo ashlgk </p>
                <p className='text-[#646874] pt-[1.5rem] text-[13px] sm:text-[14px]'>Example2020@gmail.com</p>
                <p className='text-[#646874] pt-[1.5rem] text-[13px] sm:text-[14px]'>[+91]9999999999</p>
            </div>
            <div className="flex flex-col sm:w-[25%] pl-[2rem] py-[2rem] sm:py-[4.5rem]">
                <h1 className='font-SourceSansPro font-bold mb-[1.5rem] text-[#0E2368] text-lg sm:text-xl'>More</h1>
                <a className='text-[#646874] pb-[0.5rem] text-[13px] sm:text-[14px]' href="">About us</a>
                <a className='text-[#646874] py-[0.5rem] text-[13px] sm:text-[14px]' href="">Products</a>
                <a className='text-[#646874] py-[0.5rem] text-[13px] sm:text-[14px]' href="">Careers</a>
                <a className='text-[#646874] py-[0.5rem] text-[13px] sm:text-[14px]' href="">Contact us</a>
            </div>
            <div className="flex flex-col sm:w-[25%] pl-[2rem] py-[2rem] sm:py-[4.5rem] items-center sm:items-start">
                <h1 className='font-SourceSansPro hidden sm:block font-bold mb-[1rem] text-[#0E2368] text-lg sm:text-xl'>Social links</h1>
                <div className="flex">
                    <AiOutlineInstagram className='scale-[1.5] mx-2 text-[#0E2368]' />
                    <AiOutlineTwitter className='scale-[1.5] mx-2 text-[#0E2368]' />
                    <FaFacebookF className='scale-[1.25] mx-2 text-[#0E2368]' />
                </div>
                <p className='font-Roboto text-[#646874] pt-[3rem] text-[13px] sm:text-[12px]'>@2022 Food Truck Example</p>
            </div>
        </div>
    )
}

export default Footer