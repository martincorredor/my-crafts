import React from 'react';
import CustomIcon from './CustomIcon';
import { COLORS } from '../constants';

const HomeMenu = () => {
  return (
    <div className='home-menu-container'>
      <CustomIcon icon={'whatsApp'} color={COLORS.black} />
    </div>
  );
};

export default HomeMenu;
