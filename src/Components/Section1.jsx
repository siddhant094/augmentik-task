import React from 'react';

import s1_svg from '../assets/s1_svg.webp';

const Section1 = () => {
    return (
        <section className=''>
            <div className='flex flex-row justify-center bg-slate-400 bgx max-md:flex-col'>
                <div className='flex flex-col justify-center w-1/2 px-8 text-white max-md:w-full'>
                    <p className='s1_heading text-5xl leading-snug'>
                        Trello brings all your <br />
                        tasks, teammates, and <br /> tools together
                        <br />
                    </p>
                    <br />
                    <p className='text-base'>
                        Keep everything in the same place—even if your team{' '}
                        <br />
                        isn’t.
                    </p>
                    <br></br>
                    <div className='flex flex-row'>
                        <input
                            type='email'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block flex-grow p-3 mr-4'
                            placeholder='Email'
                            required
                        />
                        <button
                            type='submit'
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                            Sign up - it’s free!
                        </button>
                    </div>
                    <br></br>
                    <div className='flex flex-row'>
                        <span>Watch Video</span>
                        <svg
                            fill='none'
                            height='24'
                            viewBox='0 0 24 24'
                            width='24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                clip-rule='evenodd'
                                d='m10.0138 16.3878c-.83597.4912-1.5138.105-1.5138-.8645v-7.04491c0-.97008.6755-1.358 1.5138-.86566l6.465 3.79747c.5548.3261.5589.8517 0 1.1801z'
                                fill='currentColor'
                                fill-rule='evenodd'
                            ></path>
                            <circle
                                cx='12'
                                cy='12'
                                r='11.5'
                                stroke='currentColor'
                            ></circle>
                        </svg>
                    </div>
                </div>
                <div className='w-1/2 max-md:w-full'>
                    <img src={s1_svg} className='' />
                </div>
            </div>
        </section>
    );
};

export default Section1;
