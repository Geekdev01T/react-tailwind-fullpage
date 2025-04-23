import React from 'react';

const Services = () => {
    const services = [
        { id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/images/banner9.jpg" },
        {id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image :"/src/assets/images/banner11.jpg"},
        { id: 3, title: "Cloubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/images/banner12.jpg" },
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-1'>Our Clients</h2>
                <p className='text-neutralDGrey'>We ahve been working with some fortune 500+ clients</p>
                {/* Company logos */}
                <div className='my-12 flex flex-wrap justify-between items-center gap-4'>
                    <img src="/src/assets/logo/logo1.jpg" alt="" className='w-20 h-20'/>
                    <img src="/src/assets/logo/logo2.png" alt=""  className='w-20 h-20'/>
                    <img src="/src/assets/logo/logo3.jpg" alt=""  className='w-20 h-20'/>
                    <img src="/src/assets/logo/logo4.png" alt=""  className='w-20 h-20'/>
                    <img src="/src/assets/logo/logo11.jpg" alt=""  className='w-20 h-20'/>
                    <img src="/src/assets/logo/logo1.jpg" alt=""  className='w-20 h-20'/>
                    <img src="/src/assets/logo/logo2.png" alt=""  className='w-20 h-20'/>
                </div>
            </div>

            {/* Services cards */}
            <div className='mt-28 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-1'>Manage your entire community in a single system</h2>
                <p className='text-neutralDGrey'>Who is NTM Nextcent suitable for?</p>
            </div>

            {/* Cards */}
            <div className='mt-14 grid lg:grid-cols-3 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => 
                        <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                            <div>
                                <div className='bg-[#E8F5E9] mb-4 h-20 w-20 mx-auto rounded-tl-3xl rounded-br-3xl pt-2'>
                                    <img src={service.image} alt="" className='w-14 h-14 mx-auto ' />
                                </div>
                                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 py-2'>{service.title}</h4>
                                <p className='text-sm text-neutralGrey'>{service.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;