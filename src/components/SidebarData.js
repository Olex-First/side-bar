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
    path: '/snacks',
    icon: <MdOutlineFastfood />,
    cName: 'nav-text',
    list:['fries', 'nuts', 'chlebicek', 'Mozarella Sticks', 'Nachos', 'Hot-Dog']
  },
  {
    title: 'Beers',
    path: '/beers',
    icon: <IoBeerOutline />,
    cName: 'nav-text',
    list: ['Pilsner', 'Kozel', 'Bernard', 'Unetice', 'Staropramen', 'Hoegarden']
  },
  {
    title: 'Cocktails',
    path: '/cocktails',
    icon: <FaCocktail />,
    cName: 'nav-text',
    list: ['Mojito', 'Gin&Tonic', 'Cuba Libre', 'Caipirinha', 'Pina Colada']

  },
  {
    title: 'HotDrinks',
    path: '/hotdrinks',
    icon: <MdOutlineEmojiFoodBeverage />,
    cName: 'nav-text',
    list: ['Tea', 'Coffee', 'Hot Wine', 'Hot Apple Juice', 'Hot Chocolate']

  },

  {
    title: 'Vegan',
    path: '/vegan',
    icon: <BiSpa />,
    cName: 'nav-text'
  },
  {
    title: 'Favorite',
    path: '/favorite',
    icon: <BiHeart />,
    cName: 'nav-text'
  }
];
