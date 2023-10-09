import React from 'react';
import Lottie from 'react-lottie-player';

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import lottie from '../assets/lottie.json';

const Section2 = () => {
    return (
        <div className='flex flex-row s25 pt-24 pl-16 max-md:flex-col'>
            <div className='w-1/2 mb-10 max-md:w-full'>
                <h1 className='text-4xl	p-1'>All Your Leads In One Place</h1>
                <br />
                <div>
                    <div className='absolute border border-solid border-[#FFCED0] rounded-full w-16 h-10 flex items-center justify-center mt-[100px] -ml-[30px] -rotate-45 bg-white'>
                        <img src={icon1} className='h-5 w-5 rotate-45' />
                    </div>
                    <div className='hover:border hover:border-solid border border-transparent hover:border-[#E2D9FC] transition hover:rounded-lg py-8 pr-8 pl-12'>
                        <span className='text-2xl'>Integrate your Leads</span>
                        <br />
                        <br />
                        <p className='text-lg'>
                            Jaldi integrates with your Facebook and Instagram
                            ads - new leads are auto-assigned to your sales
                            agents who receive instant mobile notifications.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='absolute border border-solid border-[#3ff171] rounded-full w-16 h-10 flex items-center justify-center mt-[100px] -ml-[30px] -rotate-45 bg-white'>
                        <img src={icon2} className='h-5 w-5 rotate-45' />
                    </div>
                    <div className='hover:border hover:border-solid border border-transparent hover:border-[#E2D9FC] transition hover:rounded-lg py-8 pr-8 pl-12'>
                        <span className='text-2xl'>Distribute easily</span>
                        <br />
                        <br />
                        <p className='text-lg'>
                            Jaldi allows you to upload files and distribute your
                            leads with a few simple clicks.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='absolute border border-solid border-[#E2D9FC] rounded-full w-16 h-10 flex items-center justify-center mt-[100px] -ml-[30px] -rotate-45 bg-white'>
                        <img src={icon3} className='h-5 w-5 rotate-45' />
                    </div>
                    <div className='hover:border hover:border-solid border border-transparent hover:border-[#E2D9FC] transition hover:rounded-lg py-8 pr-8 pl-12'>
                        <span className='text-2xl'>
                            Call, WhatsApp, SMS or Email with one click
                        </span>
                        <br />
                        <br />
                        <p className='text-lg'>
                            Instantly respond to your leads through any channel
                            with a simple click.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 border border-solid border-[#E2D9FC] rounded-[40px] max-md:w-full'>
                <Lottie
                    animationData={lottie}
                    style={{ width: '100%', height: '100%' }}
                    play
                />
            </div>
        </div>
    );
};

export default Section2;
