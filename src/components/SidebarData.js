import React from 'react';
import { FaCocktail} from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import { IoBeerOutline } from "react-icons/io5";
import { BiHeart, BiSpa } from "react-icons/bi";
import { MdOutlineFastfood , MdOutlineEmojiFoodBeverage } from 'react-icons/md'

export const SidebarData = [

  {
    title: 'Snacks',
    path: '/',
    icon: <MdOutlineFastfood />,
    cName: 'nav-text',
    list:['fries', 'nuts', 'chlebicek', 'Mozarella Sticks', 'Nachos', 'Hot-Dog']
  },
  {
    title: 'Beers',
    path: '/products',
    icon: <IoBeerOutline />,
    cName: 'nav-text',
    list: ['Pilsner', 'Kozel', 'Bernard', 'Unetice', 'Staropramen', 'Hoegarden']
  },
  {
    title: 'Cocktails',
    path: '/reports',
    icon: <FaCocktail />,
    cName: 'nav-text',
    list: ['Mojito', 'Gin&Tonic', 'Cuba Libre', 'Caipirinha', 'Pina Colada']

  },
  {
    title: 'HotDrinks',
    path: '/team',
    icon: <MdOutlineEmojiFoodBeverage />,
    cName: 'nav-text',

  },

  {
    title: 'Vegan',
    path: '/messages',
    icon: <BiSpa />,
    cName: 'nav-text'
  },
  {
    title: 'Favorite',
    path: '/support',
    icon: <BiHeart />,
    cName: 'nav-text'
  }
];
