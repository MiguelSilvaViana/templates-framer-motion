'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { menuSlide, slide, scale } from './curverdAnim';
import Link from 'next/link';
import Curve from './Curve';

const navItems = [
  {
    title: 'Home',

    href: '/',
  },

  {
    title: 'Work',

    href: '/work',
  },

  {
    title: 'About',

    href: '/about',
  },

  {
    title: 'Contact',

    href: '/contact',
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className='curverd-menu'
    >
      <div className='body'>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={'nav'}
        >
          <div className='header'>
            <p>Navigation</p>
          </div>

          {navItems.map((data, index) => {
            return (
              <Links
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Links>
            );
          })}
        </div>

        <div className='footer'>
          <a>Awwwards</a>

          <a>Instagram</a>

          <a>Dribble</a>

          <a>LinkedIn</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

const Links = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;
  return (
    <motion.div
      className='curved-link'
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className='indicator'
      ></motion.div>

      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default Nav;
