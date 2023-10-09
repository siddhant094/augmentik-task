import React from 'react';

import s4_monday_logo from '../assets/s4_monday_logo.png';
import reddit from '../assets/reddit.svg';
import facebook from '../assets/facebook.svg';
import insta from '../assets/instagram.svg';
import linkedin from '../assets/linkedin-in.svg';
import x from '../assets/x-twitter.svg';
import youtube from '../assets/youtube.svg';
import tiktok from '../assets/tiktok.svg';
import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.webp';
import l4 from '../assets/l4.png';

const Footer = () => {
    return (
        <div>
            <section className='flex flex-col bg-[#181B34] text-white h-80 justify-center s3_font py-16'>
                <p className='text-3xl text-center mb-5'>
                    Deliver your best work <b>with monday.com</b>
                </p>
                <p className='text-lg text-center mb-5'>
                    No credit card needed ✦ Unlimited time on Free plan
                </p>
                <div className='flex flex-col items-center'>
                    <button className='bg-[#6161FF] hover:bg-blue-700 text-white py-4 px-5 rounded-full max-w-max items-center'>
                        <span>Get Started</span>
                    </button>
                </div>
            </section>
            {/* Sections ends */}
            <section className='s3_font text-[#333]'>
                <div className='flex flex-row font-light text-[12px] mx-8 mt-20 max-md:flex-col'>
                    {' '}
                    <div className='flex grow flex-col cursor-pointer'>
                        {/* <p className='mb-[18px] hover:text-[#6161FF] text-[14px]'>
                            LOGO
                        </p> */}
                        <img
                            src={s4_monday_logo}
                            alt='logo'
                            className='h-8 w-fit mb-[14px]'
                        />
                        <p className='mb-4 hover:text-[#6161FF]'>Pricing</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Contact us</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Templates</p>
                        <p className='mb-4 hover:text-[#6161FF]'>SMB</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Enterprise</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Nonprofits</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            App marketplace
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            24/7 support
                        </p>
                    </div>
                    <div className='flex grow flex-col cursor-pointer'>
                        <a className='mb-6 mt-2.5 hover:text-[#6161FF] font-medium text-[14px]'>
                            Features
                        </a>
                        <p className='mb-4 hover:text-[#6161FF]'>Docs</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Integrations
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>Automations</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Files</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Dashboards</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Kanban</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Gantt</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            App marketplace
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            24/7 support
                        </p>
                    </div>
                    <div className='flex grow flex-col'>
                        <p className='mb-6 mt-2 hover:text-[#6161FF] text-[#333] text-[14px]'>
                            monday products
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            monday work management
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            monday sales CRM
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>monday dev</p>
                        <p className='mb-6 mt-2 hover:text-[#6161FF] font-medium text-[14px]'>
                            More by Monday.com
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>WorkCanvas</p>
                        <p className='mb-4 hover:text-[#6161FF]'>WorkForms</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            App marketplace
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            24/7 support
                        </p>
                    </div>
                    <div className='flex grow flex-col'>
                        <p className='mb-6 mt-2 hover:text-[#6161FF] font-medium text-[14px]'>
                            Use cases
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>Marketing</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Project management
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>Sales</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Developers</p>
                        <p className='mb-4 hover:text-[#6161FF]'>HR</p>
                        <p className='mb-4 hover:text-[#6161FF]'>IT</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Operations</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Construction
                        </p>
                    </div>
                    <div className='flex grow flex-col '>
                        <p className='mb-6 mt-2 hover:text-[#6161FF] font-medium text-[14px]'>
                            Company
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>About us</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Careers - We're hiring!
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>monday-U</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Press</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Customer stories
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Become a partner
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Sustainability & ESG
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>Affiliates</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Digital Lift
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Investor relations
                        </p>
                    </div>
                    <div className='flex grow flex-col'>
                        <p className='mb-6 mt-2 hover:text-[#6161FF] font-medium text-[14px]'>
                            Resources
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>Help Center</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Community</p>
                        <p className='mb-4 hover:text-[#6161FF]'>Blog</p>
                        <p className='mb-4 hover:text-[#6161FF]'>What's new</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            monday spaces
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>Webinars</p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Startup for startup
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Global events
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            App development
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>
                            Find a partner
                        </p>
                        <p className='mb-4 hover:text-[#6161FF]'>Compare</p>
                    </div>
                </div>
            </section>

            <hr className='mx-8' />

            <section className='mx-8 mt-10 mb-12 flex flex-row justify-between'>
                <div className='flex flex-row flex-grow'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row myc flex-grow'>
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 20 20'
                                fill='white'
                                xmlns='http://www.w3.org/2000/svg'
                                // className='myc'
                            >
                                <path
                                    d='M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18z'
                                    stroke='#323338'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                ></path>
                                <path
                                    d='M7.831 18.737C6.613 16.95 5.8 13.707 5.8 10c0-3.706.813-6.951 2.031-8.737M1 10h18M2.386 14.8h15.229M2.386 5.2h15.229M12.169 1.263C13.386 3.05 14.2 6.293 14.2 10c0 3.706-.813 6.951-2.031 8.737'
                                    stroke='#323338'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                ></path>
                            </svg>
                            English
                        </div>
                        <br></br>
                        <div className='flex flex-row max-md:hidden'>
                            <img src={l1} className='w-8 h-8 mr-2' />
                            <img src={l2} className='w-8 h-8 mr-2' />
                            <img src={l3} className='w-8 h-8 mr-2' />
                            <img src={l4} className='w-8 h-8 mr-2' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-between flex-grow max-md:hidden'>
                        <div className='flex flex-row h-5 justify-start'>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                                className='myc mx-2'
                            >
                                <path
                                    d='M9.593 12c-.602 0-1.093.491-1.093 1.093s.491 1.093 1.093 1.093 1.093-.491 1.093-1.093S10.195 12 9.593 12zM12.012 16.777c.418 0 1.843-.049 2.592-.798.11-.11.11-.282.024-.405a.289.289 0 0 0-.405 0c-.479.466-1.474.638-2.198.638-.725 0-1.732-.172-2.198-.638a.289.289 0 0 0-.406 0 .289.289 0 0 0 0 .405c.737.737 2.174.798 2.591.798zM13.314 13.093c0 .602.492 1.093 1.093 1.093.602 0 1.093-.491 1.093-1.093S15.01 12 14.407 12c-.601 0-1.093.491-1.093 1.093z'
                                    fill='#535768'
                                ></path>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm-5.035-1.535c.848 0 1.535.688 1.535 1.535a1.59 1.59 0 0 1-.884 1.412c.025.148.037.295.037.455 0 2.357-2.739 4.261-6.128 4.261-3.39 0-6.128-1.904-6.128-4.261 0-.16.012-.32.037-.467a1.536 1.536 0 0 1 .626-2.935c.405 0 .786.172 1.056.43 1.056-.774 2.518-1.253 4.15-1.302l.775-3.66a.299.299 0 0 1 .122-.172.306.306 0 0 1 .21-.036l2.541.54c.172-.369.54-.614.97-.614.602 0 1.093.491 1.093 1.093s-.49 1.093-1.093 1.093c-.589 0-1.068-.467-1.093-1.044l-2.271-.479-.7 3.279c1.596.061 3.045.553 4.089 1.302.27-.27.639-.43 1.056-.43z'
                                    fill='#535768'
                                ></path>
                            </svg>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                class='mx-2'
                            >
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M6.45 3.773C6.422 2.483 5.495 1.5 3.99 1.5c-1.506 0-2.49.983-2.49 2.273 0 1.263.955 2.274 2.432 2.274h.028c1.535 0 2.49-1.011 2.49-2.274zm-.29 4.07h-4.4V21h4.4V7.842zm10.803-.309c2.895 0 5.066 1.88 5.066 5.922V21h-4.4v-7.039c0-1.768-.637-2.975-2.23-2.975-1.215 0-1.94.814-2.258 1.6-.116.281-.145.673-.145 1.066V21h-4.4s.058-11.922 0-13.157h4.4v1.864c.585-.896 1.63-2.173 3.967-2.173z'
                                    fill='#535768'
                                ></path>
                            </svg>

                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                class='mx-2'
                            >
                                <path
                                    d='M12 1.5c5.8 0 10.5 4.729 10.5 10.564 0 5.274-3.84 9.644-8.86 10.436v-7.382h2.447l.466-3.054H13.64v-1.98c0-.836.406-1.651 1.71-1.651h1.325v-2.6s-1.202-.206-2.35-.206c-2.4 0-3.967 1.462-3.967 4.11v2.327H7.693v3.054h2.666V22.5C5.34 21.708 1.5 17.338 1.5 12.064 1.5 6.229 6.2 1.5 12 1.5z'
                                    fill='#535768'
                                ></path>
                            </svg>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                class='mx-2'
                            >
                                <path
                                    d='M23.506 6.529a3.007 3.007 0 0 0-2.116-2.115C19.512 3.9 12 3.9 12 3.9s-7.512 0-9.39.494A3.069 3.069 0 0 0 .494 6.529C0 8.407 0 12.302 0 12.302s0 3.914.494 5.772A3.007 3.007 0 0 0 2.61 20.19c1.897.514 9.39.514 9.39.514s7.512 0 9.39-.494a3.007 3.007 0 0 0 2.116-2.115C24 16.216 24 12.32 24 12.32s.02-3.914-.494-5.792zm-13.898 9.37V8.704l6.247 3.599L9.608 15.9z'
                                    fill='#535768'
                                ></path>
                            </svg>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                class='mx-2'
                            >
                                <path
                                    d='M14.23 10.892L21.878 2h-1.813l-6.642 7.72L8.119 2H2l8.022 11.675L2 23h1.813l7.014-8.153L16.43 23h6.118l-8.32-12.108h.001zm-2.484 2.886l-.813-1.162-6.467-9.251H7.25l5.22 7.465.813 1.163 6.784 9.704h-2.785l-5.536-7.918z'
                                    fill='#535768'
                                ></path>
                            </svg>
                            <svg
                                width='25'
                                height='24'
                                viewBox='0 0 25 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                class='mx-2'
                            >
                                <g clip-path='url(#clip0_1251_527)'>
                                    <g
                                        clip-path='url(#clip1_1251_527)'
                                        fill='#535768'
                                    >
                                        <path d='M11.75 2.028c3.006 0 3.358.013 4.546.067 1.1.049 1.693.232 2.09.388.528.206.903.447 1.296.84.393.393.638.768.84 1.295.151.397.339.991.388 2.09.053 1.188.067 1.54.067 4.546 0 3.006-.014 3.359-.067 4.547-.05 1.099-.232 1.693-.389 2.09a3.491 3.491 0 0 1-.84 1.295 3.437 3.437 0 0 1-1.294.84c-.398.152-.992.34-2.09.388-1.189.054-1.541.067-4.547.067s-3.358-.013-4.546-.067c-1.1-.049-1.693-.232-2.09-.388a3.491 3.491 0 0 1-1.296-.84 3.437 3.437 0 0 1-.84-1.295c-.151-.397-.339-.991-.388-2.09-.053-1.188-.067-1.54-.067-4.546 0-3.006.014-3.359.067-4.547.05-1.099.232-1.693.389-2.09.205-.527.446-.902.84-1.295a3.437 3.437 0 0 1 1.294-.84c.398-.152.992-.34 2.09-.388 1.189-.058 1.546-.067 4.547-.067zm0-2.028C8.695 0 8.311.013 7.11.067 5.913.121 5.096.313 4.38.59a5.484 5.484 0 0 0-1.992 1.3 5.58 5.58 0 0 0-1.3 1.991C.814 4.596.622 5.413.568 6.614.513 7.811.5 8.195.5 11.25s.013 3.439.067 4.64c.054 1.197.246 2.014.523 2.733a5.484 5.484 0 0 0 1.3 1.992 5.579 5.579 0 0 0 1.991 1.3c.715.277 1.532.469 2.733.523 1.202.053 1.581.067 4.64.067 3.06 0 3.44-.014 4.64-.067 1.198-.054 2.015-.246 2.734-.523a5.483 5.483 0 0 0 1.992-1.3 5.58 5.58 0 0 0 1.3-1.991c.276-.715.468-1.532.522-2.734.053-1.201.067-1.58.067-4.64 0-3.06-.014-3.439-.067-4.64-.054-1.197-.246-2.014-.523-2.733a5.484 5.484 0 0 0-1.3-1.992 5.581 5.581 0 0 0-1.991-1.3c-.715-.277-1.532-.469-2.733-.522C15.189.013 14.805 0 11.75 0z'></path>
                                        <path d='M11.75 5.475a5.78 5.78 0 1 0 .002 11.56 5.78 5.78 0 0 0-.002-11.56zm0 9.526a3.751 3.751 0 1 1 0-7.502 3.751 3.751 0 0 1 0 7.502zM17.757 6.592a1.349 1.349 0 1 0 0-2.697 1.349 1.349 0 0 0 0 2.697z'></path>
                                    </g>
                                </g>
                            </svg>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                class='mx-2'
                            >
                                <path
                                    d='M21.211 6.393c-1.3-.04-2.48-.663-3.369-1.496a4.867 4.867 0 0 1-1.51-3.595H12.71v13.953c0 2.279-1.366 3.622-3.044 3.622a3.046 3.046 0 1 1 .984-5.917V9.276a4.466 4.466 0 0 0-.984-.104 6.665 6.665 0 1 0 6.662 6.664v-7.51c1.404.971 3.081 1.43 4.871 1.462l.012-3.395z'
                                    fill='#535768'
                                ></path>
                            </svg>
                        </div>
                        <div className='flex flex-row justify-between text-[#808080] max-md:hidden'>
                            <div className='s3_font flex flex-row justify-around flex-grow'>
                                <a className='underline clr'>Security</a>
                                <a>|</a>
                                <a className='underline clr'>
                                    Terms and privacy
                                </a>
                                <a>|</a>
                                <a className='underline clr'>Privacy policy</a>
                                <a>|</a>
                                <a className='underline clr'>Cookie settings</a>
                                <a>|</a>
                                <a className='underline clr'>Status</a>
                            </div>
                            <a className='s3_font'>
                                All Rights Reserved © monday.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between max-md:flex-row'>
                    <div className='flex flex-row max-md:hidden'>
                        <a
                            target='_blank'
                            href='https://play.google.com/store/apps/details?id=com.monday.monday'
                            title='Download the monday android App from Google Play'
                            class='jsx-3477892871 app-icon'
                        >
                            <svg
                                width='135'
                                height='40'
                                viewBox='0 0 135 40'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.7-2.2 5-5 5z'
                                    fill='#000'
                                ></path>
                                <path
                                    d='M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125zm0-.8H5C2.2 0 0 2.2 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z'
                                    fill='#A6A6A6'
                                ></path>
                                <path
                                    d='M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.5.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.7h2.9v.3zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zM55.3 13h-.8V7.7h-1.7V7H57v.7h-1.7V13zM59.9 13V7h.8v6h-.8zM64.1 13h-.8V7.7h-1.7V7h4.1v.7H64V13h.1zM73.6 12.2c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zM75.6 13V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z'
                                    fill='#fff'
                                    stroke='#fff'
                                    stroke-width='.2'
                                    stroke-miterlimit='10'
                                ></path>
                                <path
                                    d='M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8 0-2.7 2.1-4.8 4.7-4.8 1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z'
                                    fill='#fff'
                                ></path>
                                <path
                                    d='M10.4 7.5c-.3.3-.5.8-.5 1.4V31c0 .6.2 1.1.5 1.4l.1.1 12.4-12.4v-.2L10.4 7.5z'
                                    fill='url(#paint0_linear)'
                                ></path>
                                <path
                                    d='M27 24.3l-4.1-4.1V19.9l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z'
                                    fill='url(#paint1_linear)'
                                ></path>
                                <path
                                    d='M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4z'
                                    fill='url(#paint2_linear)'
                                ></path>
                                <path
                                    d='M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z'
                                    fill='url(#paint3_linear)'
                                ></path>
                                <path
                                    opacity='.2'
                                    d='M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z'
                                    fill='#000'
                                ></path>
                                <path
                                    opacity='.12'
                                    d='M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zM32 21.3l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z'
                                    fill='#000'
                                ></path>
                                <path
                                    opacity='.25'
                                    d='M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L12.5 7.5C11.1 6.7 10 7.4 10 9v.1c0-1.6 1.1-2.3 2.5-1.5z'
                                    fill='#fff'
                                ></path>
                                <defs>
                                    <linearGradient
                                        id='paint0_linear'
                                        x1='21.8'
                                        y1='8.71'
                                        x2='5.017'
                                        y2='25.492'
                                        gradientUnits='userSpaceOnUse'
                                    >
                                        <stop stop-color='#00A0FF'></stop>
                                        <stop
                                            offset='.007'
                                            stop-color='#00A1FF'
                                        ></stop>
                                        <stop
                                            offset='.26'
                                            stop-color='#00BEFF'
                                        ></stop>
                                        <stop
                                            offset='.512'
                                            stop-color='#00D2FF'
                                        ></stop>
                                        <stop
                                            offset='.76'
                                            stop-color='#00DFFF'
                                        ></stop>
                                        <stop
                                            offset='1'
                                            stop-color='#00E3FF'
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id='paint1_linear'
                                        x1='33.834'
                                        y1='20.001'
                                        x2='9.637'
                                        y2='20.001'
                                        gradientUnits='userSpaceOnUse'
                                    >
                                        <stop stop-color='#FFE000'></stop>
                                        <stop
                                            offset='.409'
                                            stop-color='#FFBD00'
                                        ></stop>
                                        <stop
                                            offset='.775'
                                            stop-color='#FFA500'
                                        ></stop>
                                        <stop
                                            offset='1'
                                            stop-color='#FF9C00'
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id='paint2_linear'
                                        x1='24.827'
                                        y1='22.296'
                                        x2='2.069'
                                        y2='45.054'
                                        gradientUnits='userSpaceOnUse'
                                    >
                                        <stop stop-color='#FF3A44'></stop>
                                        <stop
                                            offset='1'
                                            stop-color='#C31162'
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id='paint3_linear'
                                        x1='7.297'
                                        y1='.176'
                                        x2='17.46'
                                        y2='10.339'
                                        gradientUnits='userSpaceOnUse'
                                    >
                                        <stop stop-color='#32A071'></stop>
                                        <stop
                                            offset='.069'
                                            stop-color='#2DA771'
                                        ></stop>
                                        <stop
                                            offset='.476'
                                            stop-color='#15CF74'
                                        ></stop>
                                        <stop
                                            offset='.801'
                                            stop-color='#06E775'
                                        ></stop>
                                        <stop
                                            offset='1'
                                            stop-color='#00F076'
                                        ></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        <a
                            target='_blank'
                            href='https://itunes.apple.com/app/id1290128888'
                            title='Download the monday iOS App from the App Store'
                            class='ml-3'
                        >
                            <svg
                                width='120'
                                height='40'
                                viewBox='0 0 120 40'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013C6.85.023 6.18.082 5.517.19a6.665 6.665 0 0 0-1.9.627A6.438 6.438 0 0 0 .193 5.521a12.993 12.993 0 0 0-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921.008.671.068 1.34.18 2.002.11.663.32 1.306.624 1.905.303.598.701 1.143 1.179 1.614.473.477 1.019.875 1.618 1.179.599.304 1.24.517 1.901.63.663.11 1.333.168 2.004.177.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.359 0 .724 0 1.084-.002.304 0 .617-.004.922-.01.67-.01 1.338-.068 2-.178a6.808 6.808 0 0 0 1.908-.63A6.296 6.296 0 0 0 117.666 38a6.405 6.405 0 0 0 1.182-1.614c.302-.6.51-1.242.619-1.905.111-.661.173-1.33.185-2.002.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.57 13.57 0 0 0-.185-2.003 6.648 6.648 0 0 0-.619-1.903 6.469 6.469 0 0 0-2.799-2.8 6.77 6.77 0 0 0-1.908-.627c-.661-.11-1.33-.169-2-.176-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z'
                                    fill='#A6A6A6'
                                ></path>
                                <path
                                    d='M8.445 39.125c-.305 0-.602-.004-.904-.01a12.696 12.696 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.321 5.321 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.414 12.414 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.756 5.756 0 0 1 .544-1.662c.26-.518.603-.99 1.015-1.398A5.565 5.565 0 0 1 5.667 1.05C6.287.95 6.915.895 7.543.887l.902-.012h102.769l.913.013a12.37 12.37 0 0 1 1.858.162 5.933 5.933 0 0 1 1.671.548 5.589 5.589 0 0 1 2.415 2.42 5.74 5.74 0 0 1 .535 1.649c.104.624.162 1.255.174 1.887.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93-.011.62-.069 1.24-.171 1.853a5.716 5.716 0 0 1-.54 1.67 5.47 5.47 0 0 1-1.015 1.386 5.414 5.414 0 0 1-1.4 1.022 5.855 5.855 0 0 1-1.668.55c-.618.101-1.243.156-1.869.163-.293.007-.599.011-.897.011l-1.084.002-101.69-.002z'
                                    fill='#000'
                                ></path>
                                <path
                                    d='M24.769 20.3a4.947 4.947 0 0 1 2.356-4.151 5.065 5.065 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.727c-1.934 3.349-.492 8.27 1.361 10.977.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.963 10.963 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4zM22.037 12.21a4.873 4.873 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.637 4.637 0 0 0-1.143 3.361 4.1 4.1 0 0 0 3.236-1.53zM42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356zm-4.243-1.55h3.752l-1.85-5.446h-.051l-1.85 5.447zM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484H46.63V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zM65.124 25.97c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zM71.71 27.036c.138 1.232 1.335 2.04 2.97 2.04 1.566 0 2.693-.809 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3h1.867zM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106zM96.186 21.442h1.772v1.541h.043a2.16 2.16 0 0 1 2.178-1.635c.214-.001.428.022.637.069v1.738a2.591 2.591 0 0 0-.835-.112 1.872 1.872 0 0 0-1.937 2.083v5.37h-1.858v-9.054zM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.353 2.353 0 0 0 .639 1.832 2.364 2.364 0 0 0 1.797.732 2.045 2.045 0 0 0 2.091-1.273h1.764zm-6.282-2.702h4.526a2.167 2.167 0 0 0-.608-1.634 2.168 2.168 0 0 0-1.612-.664 2.291 2.291 0 0 0-2.306 2.298zM37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73h2.155zm-1.228 5.123h1.125a1.876 1.876 0 0 0 1.967-2.146 1.882 1.882 0 0 0-1.967-2.134h-1.125v4.28zM41.68 12.444a2.132 2.132 0 1 1 4.248 0 2.135 2.135 0 1 1-4.247 0zm3.334 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM51.573 14.698h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889l-1.237 4.503zM53.853 10.195h.856v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.464 1.464 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.03 1.03 0 0 0-1.075 1.141v2.635h-.889v-4.503zM59.094 8.437h.888v6.26h-.888v-6.26zM61.218 12.444a2.134 2.134 0 1 1 4.247 0 2.133 2.133 0 1 1-4.247 0zm3.333 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM66.4 13.424c0-.81.604-1.277 1.676-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.496 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.06 1.06 0 0 0 1.166-.983zM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zM79.23 12.444a2.132 2.132 0 1 1 4.247 0 2.135 2.135 0 1 1-4.247 0zm3.333 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM84.67 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.464 1.464 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.03 1.03 0 0 0-1.075 1.141v2.635h-.889v-4.503zM93.515 9.074v1.141h.976v.749h-.976v2.315c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.029-.322.044-.484.046-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.749h.715V9.074h.89zM95.705 8.437h.88v2.482h.07a1.385 1.385 0 0 1 1.374-.807 1.482 1.482 0 0 1 1.55 1.678v2.908h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.05 1.05 0 0 0-1.134 1.142v2.63h-.888V8.437zM104.761 13.482a1.823 1.823 0 0 1-1.951 1.303 2.045 2.045 0 0 1-2.08-2.325 2.077 2.077 0 0 1 2.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.199 1.29 1.08 1.08 0 0 0 1.072-.546h.855zm-3.126-1.451h2.275a1.09 1.09 0 0 0-1.109-1.167 1.15 1.15 0 0 0-1.166 1.167z'
                                    fill='#fff'
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className='flex hover:text-[#595ad4] s3_font max-md:hidden'>
                        <svg
                            className='hover:text-[#595ad4]'
                            width='21'
                            height='21'
                            viewBox='0 0 21 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M6 8l4.035.913v3.155L8.142 17M15.216 8l-4.035.913v3.155L13.074 17'
                                stroke='#000'
                                stroke-width='1.2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            ></path>
                            <circle
                                cx='10.5'
                                cy='10.5'
                                r='9.5'
                                stroke='#000'
                                stroke-linecap='round'
                            ></circle>
                            <circle
                                cx='10.5'
                                cy='5.5'
                                r='1.5'
                                stroke='#000'
                            ></circle>
                        </svg>
                        <a className='clr'>Accessibility statement</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
