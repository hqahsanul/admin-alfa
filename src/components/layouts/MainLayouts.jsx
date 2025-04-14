'use client';

import React from 'react';
import HorizontalLayout from './Horizontal';
import VerticalLayout from './Vertical';
import { useThemeContext } from '@/context/useThemeContext';
const MainLayouts = ({
  children
}) => {
  const {
    settings: {
      layout
    }
  } = useThemeContext();
  return <>
      {layout.type == 'vertical' ? <VerticalLayout>
            {children}
          </VerticalLayout> : <HorizontalLayout>
            {children}
          </HorizontalLayout>}
    </>;
};
export default MainLayouts;