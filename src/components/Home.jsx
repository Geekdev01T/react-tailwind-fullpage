import { Carousel } from 'flowbite-react';
import React from 'react';
import Banner1 from '../assets/images/banner2.jpg';
import Banner2 from '../assets/images/banner3.jpg';
import Banner3 from '../assets/images/banner4.jpg';

const Home = () => {
    return (
        <div className='bg-neutralSilver' id='home'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center  justify-between gap-12">
                        <div>
                            <img src={Banner1} alt="" />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights
                                <span className='text-brandPrimary leading-snug'> from 8 Years</span>
                            </h1>
                            <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media</p>
                            <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center  justify-between gap-12">
                        <div>
                            <img src={Banner2} alt="" />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Learn and Earn Money
                                <span className='text-brandPrimary leading-snug'> in 4 Months</span>
                            </h1>
                            <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media</p>
                            <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center  justify-between gap-12">
                        <div>
                            <img src={Banner3} alt="" />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights
                                <span className='text-brandPrimary leading-snug'> from 8 years</span>
                            </h1>
                            <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media</p>
                            <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Register</button>
                        </div>
                    </div> 
                </Carousel>
            </div>
        </div>
    );
};

export default Home;