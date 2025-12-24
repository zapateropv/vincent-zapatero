import React, { forwardRef } from 'react';
import TopSkills from '../components/TopSkills';
import BottomSkills from '../components/BottomSkills';

const Skills = forwardRef((props, ref) => {
  return (
    <div className='w-full p-5' ref={ref}>
      <TopSkills />
      <BottomSkills />
    </div>
  );
});

export default Skills;
