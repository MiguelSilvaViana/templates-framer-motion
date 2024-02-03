'use client';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';

const CuverdAwwards = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        className='button-curverd'
      >
        <div className={`${isActive && 'active'} burger-awwards`}></div>
      </div>
      <AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default CuverdAwwards;
