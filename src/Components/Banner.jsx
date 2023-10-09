import React from 'react';
import { Popover } from '@headlessui/react';

import logo from '../assets/logo.svg';

const Banner = () => {
    return (
        <div className='sticky top-0 bg-white'>
            <div className='flex flex-row items-center h-24 justify-between px-5 py-4'>
                <div>
                    <img src={logo} alt='img' className='w-48' />
                </div>
                <div className='mr-10'>
                    <a className='font7 text-[#2e7ac5d1] font-bold border-solid border-4 border-[#2e7ac5d1] rounded-lg text-sm px-5 py-2.5 mr-7 mb-2 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 pointer max-md:hidden'>
                        ELECTRONIC INVOICING 2024
                    </a>
                    <button className='font4 mr-9 text-lg z-50 pointer div1 max-md:hidden'>
                        Expertise
                    </button>
                    <div class='div2 submenu absolute group-hover:transition duration-300 shadow-xl'>
                        <div class='bg-white text-gray-700 w-auto rounded-lg mt-[15px] p-12'>
                            <div class='flex gap-5'>
                                <div class='w-[270px] border-r pr-4'>
                                    <label class='text-xl font-semibold font-heading '>
                                        NOTRE
                                        <br />
                                        EXPERTISE
                                    </label>
                                    <p class='text-base text-gray-600 font-heading mt-2'>
                                        Optimize your B2B data exchanges to
                                        benefit your productivity in line with
                                        your sectoral requirements
                                    </p>
                                </div>
                                <div class='text-base font-heading pl-4 flex flex-col justify-center'>
                                    <ul class='leading-8 text-esalink-orange'>
                                        <li class='font-semibold hover:opacity-90'>
                                            <a href='/expertise/edi/'>
                                                EDI - Electronic Data
                                                Interchange
                                            </a>
                                        </li>
                                        <li class='font-semibold hover:opacity-90 mt-2'>
                                            <a href='/expertise/facturation-electronique/'>
                                                Electronic invoicing
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='div3 font4 mr-9 text-lg z-50 pointer max-md:hidden'>
                        Solutions
                    </button>
                    <div class='div4 submenu absolute group-hover:transition duration-300 shadow-xl'>
                        <div class='bg-white text-gray-700 w-auto rounded-lg mt-[15px] p-12'>
                            <div class='flex gap-5'>
                                <div class='w-[270px] border-r pr-4'>
                                    <label class='text-xl font-semibold font-heading '>
                                        NOTRE
                                        <br />
                                        EXPERTISE
                                    </label>
                                    <p class='text-base text-gray-600 font-heading mt-2'>
                                        Optimize your B2B data exchanges to
                                        benefit your productivity in line with
                                        your sectoral requirements
                                    </p>
                                </div>
                                <div class='text-base font-heading pl-4 flex flex-col justify-center'>
                                    <ul class='leading-8 text-esalink-orange'>
                                        <li class='font-semibold hover:opacity-90'>
                                            <a href='/expertise/edi/'>
                                                EDI - Electronic Data
                                                Interchange
                                            </a>
                                        </li>
                                        <li class='font-semibold hover:opacity-90 mt-2'>
                                            <a href='/expertise/facturation-electronique/'>
                                                Electronic invoicing
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='div5 font4 mr-9 text-lg z-50 pointer max-md:hidden'>
                        Services
                    </button>
                    <div class='div6 submenu absolute group-hover:transition duration-300 shadow-xl'>
                        <div class='bg-white text-gray-700 w-auto rounded-lg mt-[15px] p-12'>
                            <div class='flex gap-5'>
                                <div class='w-[270px] border-r pr-4'>
                                    <label class='text-xl font-semibold font-heading '>
                                        NOTRE
                                        <br />
                                        EXPERTISE
                                    </label>
                                    <p class='text-base text-gray-600 font-heading mt-2'>
                                        Optimize your B2B data exchanges to
                                        benefit your productivity in line with
                                        your sectoral requirements
                                    </p>
                                </div>
                                <div class='text-base font-heading pl-4 flex flex-col justify-center'>
                                    <ul class='leading-8 text-esalink-orange'>
                                        <li class='font-semibold hover:opacity-90'>
                                            <a href='/expertise/edi/'>
                                                EDI - Electronic Data
                                                Interchange
                                            </a>
                                        </li>
                                        <li class='font-semibold hover:opacity-90 mt-2'>
                                            <a href='/expertise/facturation-electronique/'>
                                                Electronic invoicing
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='div9 font4 mr-9 text-lg z-50 pointer max-md:hidden'>
                        Blog
                    </button>
                </div>
                <div>
                    <button className='font4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white max-md:hidden dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                        GET A DEMO
                    </button>
                    <button className='font4 ml-5 text-lg z-50 max-md:hidden'>
                        FR
                    </button>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Banner;
