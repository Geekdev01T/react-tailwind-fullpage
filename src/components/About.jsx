import React from 'react';
import abouting from '../assets/images/banner6.jpg'

const About = () => {
    return (
        <div>
            {/* About text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-14'>
                    <div>
                        <img src={abouting} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrader</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis doloribus numquam atque obcaecati saepe, at iure vitae iusto quam voluptas hic veritatis asperiores enim excepturi ducimus fugit incidunt dolores! Qui vitae assumenda placeat nulla laborum, eos dolores quos modi fugiat!
                        </p>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* Company stats */}
            <div className='lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold px-2 mb-4 md:w-2/3'>
                            Helping a local <br />
                            <span className='text-brandPrimary'>businesss reinvent itself</span>
                        </h2>
                        <p className='px-2'>
                            We reached here with our work and dedication
                        </p>
                    </div>

                    {/* stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'> 
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/logo/logo11.jpg" alt="" className='w-12 h-12'/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/logo/logo1.jpg" alt="" className='w-12 h-12' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                                    <p>Events Bookings</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/logo/logo2.png" alt="" className='w-12 h-12' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>46,326</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/logo/logo3.jpg" alt="" className='w-12 h-12' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,436</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;