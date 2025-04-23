import React from 'react';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Creating Streamlined safeguarding Processes with One",
            image: "/src/assets/logo/logo7.jpg"
        },
        {
            id: 2,
            title: "What are you safeguarding responsabilities and how can you manage them?",
            image: "/src/assets/logo/logo8.jpg"
        },
        {
            id: 3,
            title: "Revamping the Memberships Model with Triathlon Australia",
            image: "/src/assets/logo/logo9.jpg"
        }
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto'>
                    The Nextcent blog is the best place to read about the latest memberships insights, trends and more.
                    See who is joining the community, read about how our community and increasing their membership
                    income and lot more...
                </p>
            </div>

            {/* all blogs */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog =>
                        <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                            <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300'/>
                            <div className='text-center px py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute 
                            left-0 right-0 -bottom-16'>
                                <h3 className='text-neutralGrey mb-3 font-semibold'>{blog.title}</h3>
                                <div className='flex justify-center gap-8'>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>
                                        Readmore {" "}
                                        <span>{'-->'}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Blog;