'use client';

import React, { useState } from 'react';
import css from './TagsMenu.module.css';
import Link from 'next/link';

type Props = {
  categories: string[]; 
};

const CategoryMenu = ({ categories }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {categories.map((category) => (
            <li key={category} className={css.menuItem}>
              <Link href={`/notes/filter/${category}`} onClick={toggle}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* <h1>TagsMenu</h1> */}
    </div>
  );
};

export default CategoryMenu;
