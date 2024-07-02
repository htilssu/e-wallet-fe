// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaCaretDown } from "react-icons/fa6";//icon

// eslint-disable-next-line react/prop-types
const UnAuthHeader = ({UnAuthHeader,LoginRegister}) => {   
    return (
        <div className='w-auto h-144'>
            
        <header id='unauth-header' className='flex fixed bg-white min-w-full h-24 text-black items-center border-b border-gray-300 shadow z-50'>
            <div className='container flex mx-9 px-5 h-full items-center'>
                <div className='header-row flex items-center max-h-full flex-1'>
                    <div className='header-column flex flex-grow items-center'>
                        <a className='header-logo' onClick={UnAuthHeader}>
                            <img alt='e-wallet' width={75} height={75} src='src/assets/e-wallet.png'></img>
                        </a>
                    </div>
                    <div className='header-column flex flex-grow items-center justify-end'>
                        <div className='header-nav flex'>
                            <div className='header-main flex mr-9'>
                                <ul className='flex items-center mr-3'>
                                    <li className='h-11 w-full items-center flex p-6 mr-12 hover:bg-customGray hover:text-white rounded-t-lg cursor-pointer'>                           
                                        <a className='px-3 text-1xl font-bold text-nowrap'>
                                            TEST 1
                                        </a>
                                    </li>
                                    <li className='h-11 w-full items-center flex p-6 mr-12  hover:bg-customGray hover:text-white rounded-t-lg hover:visible group cursor-pointer'>                           
                                        <a className='pl-3 pr-1 text-1xl font-bold text-nowrap'>
                                            TEST 2
                                        </a>
                                        <div className='mr-2'><FaCaretDown /></div>
                                        <ul className='drop-menu bg-customGray absolute -bottom-29 right-93 h-auto w-52 rounded-b-lg rounded-tr-lg border-t-1 border-t-slate-500 invisible group-hover:visible'>
                                            <li className='mt-4 ml-4'>
                                                <a>
                                                    list 1
                                                </a>
                                            </li>
                                            <li className='mt-4 ml-4'>
                                                <a>
                                                    list 2
                                                </a>
                                            </li>
                                            <li className='mt-4 ml-4 mb-4'>
                                                <a>
                                                    list 3
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='h-11 w-full items-center flex p-6 mr-12  hover:bg-customGray hover:text-white rounded-t-lg cursor-pointer'>                           
                                        <a className='px-3 text-1xl font-bold text-nowrap'>
                                            TEST 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='account-link flex items-center mr-3'>
                                <div className='' onClick={LoginRegister}>
                                    <a className='flex px-3 py-2 text-1xl font-bold border-2 rounded-3xl items-center border-black hover:bg-slate-200 cursor-pointer'>
                                        Tài khoản
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </div>
    );
};

export default UnAuthHeader;