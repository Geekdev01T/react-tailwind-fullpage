import React from 'react';
import abouting from '../assets/images/banner7.jpg';
import maecenas from '../assets/images/banner9.jpg';

const Product = () => {
    return (
        <div>
            {/* About text */}
            <div className='py-4 px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-14'>
                    <div>
                        <img src={abouting} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold px-2 mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8 px-2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis doloribus numquam atque obcaecati saepe, at iure vitae iusto quam voluptas hic veritatis asperiores enim excepturi ducimus fugit incidunt dolores! Qui vitae assumenda placeat nulla laborum, eos dolores quos modi fugiat!
                        </p>
                        <button className='px-7 py-2 mx-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* Company stats */}
            <div className='lg:px-14 px-4 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img src={maecenas} alt="" />
                    </div>

                    {/* stats */}
                    <div className='md:w-2/3 mx-auto'>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, at enim repellendus
                                voluptates quodet vitae magni excepturi repudiandae maxime, consequatur fuga nobis
                                placeat atque commodi itaque eos nostrum ratione ex. Sequi corrupti quasi praesentium
                                saepe sapiente fugiat atque accusamus voluptas doloribus! Sit necessitatibus, commodi
                                voluptate libero asperiores repellendus iure fugit tenetur exercitationem, rerum ut
                                itaque excepturi odio nihil esse nisi deserunt quidem, optio corporis officia vero ea
                                molestiae ab? Optio est ut voluptas officia et, suscipit fugiat corporis
                                exercitationem quo sapiente dolorum nemo cum deleniti omnis sint autem accusamus
                                nihil enim iure reprehenderit consequatur mollitia rem officiis?</p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                            <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                            <div>
                                <div className='flex items-center gap-7 flex-wrap'>
                                    <img src="/assets/logo/logo10.jpg" alt="" className='w-12 h-12 cursor-pointer' />
                                    <img src="/assets/logo/logo12.jpg" alt="" className='w-12 h-12 cursor-pointer' />
                                    <img src="/assets/logo/logo13.jpg" alt="" className='w-12 h-12 cursor-pointer' />
                                    <img src="/assets/logo/logo5.jpg" alt="" className='w-12 h-12 cursor-pointer' />
                                    <img src="/assets/logo//logo7.jpg" alt="" className='w-12 h-12 cursor-pointer' />
                                    <img src="/assets/logo/logo6.jpg" alt="" className='w-12 h-12 cursor-pointer' />

                                    <div className='flex items-center gap-8'>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers{" "} <span>{'-->'}</span></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
