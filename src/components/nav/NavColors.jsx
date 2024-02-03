'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { name: 'Red', color: '#f00' },
  { name: 'Purple', color: '#b1f' },
  { name: 'Orange', color: '#f90' },
  { name: 'Green', color: '#0c0' },
];

const duration = 0.3;

export function NavColors() {
  const [selected, setSelected] = useState(0);
  const [formerColor, setFormerColor] = useState(tabs[0].color);

  return (
    <div className='relative rounded-3xl bg-[#43ffff33] p-3 flex items-start justify-start '>
      {tabs.map(({ name, color }, i) => (
        <motion.div
          className='h-[30px] relative py-[3px] px-[15px] m-0 font-[20px] text-[#222] cursor-pointer'
          key={i}
          initial={{ color: i === selected ? '#fff' : '#222' }}
          animate={{ color: i === selected ? '#fff' : '#222' }}
          transition={{ duration }}
          onTap={() => {
            setFormerColor(tabs[selected].color);
            setSelected(i);
          }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>{name}</span>
          {i === selected && (
            <motion.div
              className='w-full h-full absolute rounded-[15px] top-0 left-0'
              layoutId='selected'
              initial={{ backgroundColor: formerColor }}
              animate={{ backgroundColor: color }}
              transition={{ duration }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// const containerStyle = {
//   position: 'relative',
//   borderRadius: 21,
//   backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   padding: 6,
//   display: 'flex',
//   alignContent: 'flex-start',
//   alignItems: 'start',
//   justifyContent: 'start',
// };

// const tabStyle = {
//   height: 30,
//   position: 'relative',
//   padding: '3px 15px',
//   margin: 0,
//   fontFamily: 'sans-serif',
//   fontSize: 20,
//   fontWeight: 700,
//   color: '#222',
//   cursor: 'pointer',
// };

// const selectionStyle = {
//   width: '100%',
//   height: '100%',
//   position: 'absolute',
//   borderRadius: 15,
//   top: 0,
//   left: 0,
// };
