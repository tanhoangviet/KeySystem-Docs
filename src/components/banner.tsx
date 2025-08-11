'use client';

import React from 'react';

interface BannerProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Banner({ src, alt = '', className = '', ...rest }: BannerProps) {
  const finalSrc = `${basePath}${src}`;
  
  return (
    <img
      src={finalSrc}
      alt={alt}
      className={`rounded-lg ${className}`}
      {...rest}
    />
  );
}