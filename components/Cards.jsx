import React from 'react';
import cn from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

function Card({ children, title, arrow, href, ...props }) {
  return (
    <NextLink
      href={href}
      className={cn(
        'nextra-focus nextra-card _group _flex _flex-col _justify-start _overflow-hidden _rounded-lg _border _border-gray-200',
        '_text-current _no-underline dark:_shadow-none',
        'hover:_shadow-gray-100 dark:hover:_shadow-none _shadow-gray-100',
        'active:_shadow-sm active:_shadow-gray-200',
        '_transition-all _duration-200 hover:_border-gray-300',
        children
          ? '_bg-gray-100 _shadow dark:_border-neutral-700 dark:_bg-neutral-800 dark:_text-gray-50 hover:_shadow-lg dark:hover:_border-neutral-500 dark:hover:_bg-neutral-700'
          : '_bg-transparent _shadow-sm dark:_border-neutral-800 hover:_bg-slate-50 hover:_shadow-md dark:hover:_bg-neutral-900'
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          '_flex _font-semibold _items-center _gap-2 _p-4 _text-gray-700 hover:_text-gray-900',
          arrow &&
            'after:_content-["→"] after:_transition-transform after:_duration-75 after:group-hover:_translate-x-0.5',
          children
            ? 'dark:_text-gray-300 dark:hover:_text-gray-100'
            : 'dark:_text-neutral-200 dark:hover:_text-neutral-50'
        )}
      >
        {title}
      </span>
    </NextLink>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  arrow: PropTypes.bool,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

function Cards({ children, num = 3, className, style, ...props }) {
  return (
    <div
      className={cn(
        'nextra-cards _mt-4 _gap-4 _grid',
        '_not-prose', // for nextra-theme-blog
        className
      )}
      {...props}
      style={{
        ...style,
        ['--rows']: num
      }}
    >
      {children}
    </div>
  );
}

Cards.propTypes = {
  children: PropTypes.node.isRequired,
  num: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export { Cards, Card };