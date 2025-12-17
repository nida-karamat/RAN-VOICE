import React from "react";

/**
 * Props:
 * - src: original image path
 * - alt: alt text
 * - className: optional
 */
const ImageWebP = ({ src, alt = "", className = "", ...props }) => {
  const webpSrc = src.replace(/^\/?assets\/Images\//, "/webp/").replace(/\.(jpg|jpeg|png)$/i, ".webp");

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} className={className} {...props} />
    </picture>
  );
};

export default ImageWebP;
