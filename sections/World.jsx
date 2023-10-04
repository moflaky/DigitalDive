'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    > 
      <TypingText title="| Players in the World on Digital Dive" textStyles='text-center' />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles='text-center'/>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img src='/map.png' alt='map' className='w-full h-full object-cover'/>
        <div className='absolute lg:bottom-20 bottom-[25rem] lg:right-20 right-0 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-01.png'alt='people'className='w-full h-full'/>
        </div>
        <div className='absolute top-0 lg:right-20 right-20'>
          <img src='hawkins-lab.png' alt='hawkins-lab' className='md:w-full md:h-full w-[300px]' />
        </div>

        <div className='absolute bottom-20 lg:left-20 left-0'>
          <img src='upside-down.png' alt='hawkins-lab' className='md:w-full md:h-full w-[300px]' />
        </div>
        <div className='absolute lg:top-10 top-[13rem] lg:left-20 left-0 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-02.png'alt='people'className='w-full h-full'/>
        </div>
      </motion.div>
    </motion.div>
    </section>
);

export default World;
