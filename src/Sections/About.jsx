import Education from '../components/Education';
import { motion } from 'framer-motion';
import { textVariant } from '../constants/motion';
import { SectionWrapper } from '../hoc';
import AnimatedTitle from '../components/AnimatedTitle';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Skills from '../components/Skills';

const CustomBullet = ({ children }) => (
    <li className="text-textdark2 sm:text-xl sm:leading-9 px-0 py-2 sm:py-2 sm:px-20 flex items-start">
        <DoubleArrowIcon className="text-[#C97D60] mr-2 sm:mt-[6px]" size={10} />
        <span>{children}</span>
    </li>
);

const About = () => {
    return (
        <motion.div variants={textVariant()} className='bg-[#2C1810] flex flex-col justify-center rounded-[50px] p-8 pt-12 sm:p-20 sm:pb-8 relative overflow-hidden'>
            <AnimatedTitle text={"ABOUT ME"} />
            <motion.div variants={textVariant(0.8)} className='bg-gradient-to-b from-[#D4A574DD] to-transparent rounded-full w-[15rem] sm:w-[35rem] h-[15rem] sm:h-[35rem] absolute top-[25rem] sm:top-72 -right-10 sm:right-10 z-10 overflow-hidden'></motion.div>
            <motion.div variants={textVariant(0.4)} className='bg-gradient-to-b from-[#7A8471DD] to-transparent rounded-full w-[25rem] sm:w-[40rem] h-[25rem] sm:h-[40rem] absolute top-[20rem] sm:top-40 -right-28 sm:-right-20 z-10 overflow-hidden'></motion.div>
            <motion.div variants={textVariant(1.4)} className='bg-gradient-to-b from-[#7A8471DD] to-transparent rounded-full w-[20rem] sm:w-[50rem] h-[20rem] sm:h-[50rem] absolute -bottom-32 sm:-bottom-36 -left-32 sm:-left-44 z-10'></motion.div>
            <motion.div variants={textVariant(1.8)} className='bg-gradient-to-b from-[#C9A9A6DD] to-transparent rounded-full w-[15rem] sm:w-[35rem] h-[15rem] sm:h-[35rem] absolute -bottom-28 sm:-bottom-12 -left-28 sm:-left-20 z-10'></motion.div>
            <div className='flex flex-col lg:flex-row gap-8 p-8 z-20'>
                <motion.div variants={textVariant(0.5)} className='lg:w-1/3 flex justify-center items-start'>
                    <div className='w-[250px] h-[250px] rounded-2xl bg-gradient-to-br from-[#D4A574]/20 via-[#8B6F47] to-[#3D2817] flex items-center justify-center border-2 border-[#C97D60]/30 shadow-2xl'>
                        <span className='text-[#F5E6D3] text-6xl font-bold'>KV</span>
                    </div>
                </motion.div>
                <motion.div variants={textVariant(0.5)} className='lg:w-2/3 flex flex-col justify-center'>
                    <div className='space-y-6'>
                        <div className='bg-[#3D2817]/50 rounded-xl p-6 border border-[#C97D60]/20'>
                            <h3 className='text-[#D4A574] text-2xl font-bold mb-4 flex items-center gap-2'>
                                <span>👤</span> Personal & Academic
                            </h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-textdark2'>
                                <div><span className='font-semibold text-[#C97D60]'>Name:</span> <span className='ml-2'>Karthikeya Velivela</span></div>
                                <div><span className='font-semibold text-[#C97D60]'>Email:</span> <span className='ml-2 break-all'>velivelakarthikeya@gmail.com</span></div>
                                <div><span className='font-semibold text-[#C97D60]'>Phone:</span> <span className='ml-2'>7416191169</span></div>
                                <div><span className='font-semibold text-[#C97D60]'>University:</span> <span className='ml-2'>KL University</span></div>
                                <div><span className='font-semibold text-[#C97D60]'>Degree:</span> <span className='ml-2'>B.Tech</span></div>
                                <div><span className='font-semibold text-[#C97D60]'>Year:</span> <span className='ml-2'>2023–2027</span></div>
                                <div><span className='font-semibold text-[#C97D60]'>Graduation:</span> <span className='ml-2'>2027</span></div>
                                <div><span className='font-semibold text-[#C97D60]'>CGPA:</span> <span className='ml-2'>9.24</span></div>
                            </div>
                        </div>
                        
                        <div className='bg-[#3D2817]/50 rounded-xl p-6 border border-[#C97D60]/20'>
                            <h3 className='text-[#D4A574] text-2xl font-bold mb-4 flex items-center gap-2'>
                                <span>🔗</span> Profiles
                            </h3>
                            <div className='flex flex-col gap-3'>
                                <a href='https://www.linkedin.com/in/karthikeya-velivela/' target='_blank' rel='noopener noreferrer' className='text-[#C97D60] hover:text-[#D4A574] hover:underline transition-colors'>
                                    LinkedIn Profile
                                </a>
                                <a href='https://github.com/karthikeyavelivela' target='_blank' rel='noopener noreferrer' className='text-[#C97D60] hover:text-[#D4A574] hover:underline transition-colors'>
                                    GitHub Profile
                                </a>
                            </div>
                        </div>
                        
                        <div className='bg-[#3D2817]/50 rounded-xl p-6 border border-[#C97D60]/20'>
                            <h3 className='text-[#D4A574] text-2xl font-bold mb-4 flex items-center gap-2'>
                                <span>💻</span> Skills & Interests
                            </h3>
                            <ul className='space-y-2'>
                                <CustomBullet>
                                    Strong interest in <span className='text-[#C97D60] font-semibold'>Software Engineering</span>
                                </CustomBullet>
                                <CustomBullet>
                                    Focus on <span className='text-[#C97D60] font-semibold'>Cybersecurity / Ethical Hacking / White-Hat Hacking</span>
                                </CustomBullet>
                                <CustomBullet>
                                    Actively learning <span className='text-[#C97D60] font-semibold'>Python</span> (basic → advanced, problem-solving focused)
                                </CustomBullet>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div variants={textVariant(1)} className='sm:p-12 z-20'>
                <motion.h1 className='text-textdark1 text-5xl sm:text-6xl font-semibold text-center p-0 sm:p-8'>Education</motion.h1>
                <Education />
            </motion.div>
            <motion.div variants={textVariant(1)} className='sm:p-12 z-20'>
                <motion.h1 className='text-textdark1 text-5xl sm:text-6xl font-semibold text-center p-0 sm:p-8'>Skills</motion.h1>
                <Skills />
            </motion.div>
        </motion.div>
    );
}

export default SectionWrapper(About, 'about');
