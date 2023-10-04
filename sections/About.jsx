'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'></div>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Digital Dive' textStyles='text-center'/>
      <motion.p
        variants={fadeIn('up','tween', 0.2, 1)}
        className='mt-[8px] font-normal text-center sm:text-[32px] text-[20px] text-secondary-white'
      >
        <span className='font-extrabold text-white'>Digiverse</span> is a new idea coming in the near future, where you can enjoy a virtual world by feeling like it's reality, you can feel what you feel in this digiverse world, because this is really the <span className='font-extrabold text-white'>madness of the digiverse</span>. As of today, using only <span className='font-extrabold text-white'>VR</span> devices you can easily explore any digiverse world you want and turn your dreams into reality. Let's <span className='font-extrabold text-white'>explore</span> the madness of the digiverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn('up','tween', 0.3, 1)}
        className='w-[18px] h-[28px] mt-[28px] object-contain'
        src='/arrow-down.svg'
      >

      </motion.img>
    </motion.div>
  </section>
);

export default About;
