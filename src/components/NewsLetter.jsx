import React from 'react';

const NewsLetter = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
                <div className='text-center'>
                    <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold px-2 mb-6 lg:leading-snug'>
                        Pellentesque suscipit fringilla libero eu.
                    </h2>
                    <div className='flex items-center justify-center gap-8'>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>
                            Get a Demo
                            {" "}
                            <span>{'-->'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;