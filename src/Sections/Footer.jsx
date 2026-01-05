import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Footer = () => {
    return (
        <div className='bg-[#E7DAB5]'>
            <footer className="relative p-6 sm:p-20 w-full">
                <div className="w-full flex justify-around sm:text-sm flex-wrap">
                    <div className="flex flex-col md:col-span-6 lg:col-span-6">
                        <span className="flex font-bold uppercase text-textlight pb-1">Navigation</span>
                        <div className='w-full h-[1px] bg-textlight mx-auto mb-3'></div>
                        <div className="flex flex-col gap-y-2">
                            <a className="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <ArrowRightIcon /><span className="link1">Home</span>
                            </a>
                            <a className="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#about">
                                <ArrowRightIcon /><span className="link1">About</span>
                            </a>
                            <a className="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#experience">
                                <ArrowRightIcon /><span className="link1">Experience</span>
                            </a>
                            <a className="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#projects">
                                <ArrowRightIcon /><span className="link1">Projects</span>
                            </a>
                            <a className="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#coding">
                                <ArrowRightIcon /><span className="pr-[10px] link1">Coding Profiles</span>
                            </a>
                            <a className="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#certificates">
                                <ArrowRightIcon /><span className="link1">Certificates</span>
                            </a>
                            <a className="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#contact">
                                <ArrowRightIcon /><span className="link1">Contact</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col md:col-span-6 lg:col-span-6">
                        <span className="flex font-bold uppercase text-textlight pb-1">Socials</span>
                        <div className='w-full h-[1px] bg-textlight mx-auto mb-3'></div>
                        <div className="flex flex-col gap-y-2">
                            <a className="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="https://www.linkedin.com/in/karthikeya-velivela/" target='_blank'>
                                <ArrowRightIcon /><span className="link1">LinkedIn</span>
                            </a>
                            <a className="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="https://github.com/karthikeyavelivela" target='_blank'>
                                <ArrowRightIcon /><span className="link1">Github</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col md:col-span-6 lg:col-span-6">
                        <span className="flex font-bold uppercase text-textlight pb-1">Resources</span>
                        <div className='w-full h-[1px] bg-textlight mx-auto mb-3'></div>
                        <div className="flex flex-col gap-y-2">
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
