import React from 'react';

import novaInsightImage from '../assets/novalinsight.png';
import novaInventImage from '../assets/novainvent.png';
import gritZarvImage from '../assets/giritzarv.png';
import propGritzImage from '../assets/propgiritz.png';

export default function DashboardVisual({ product }) {
  const imageByProduct = {
    novainsight: novaInsightImage,
    novainvent: novaInventImage,
    gritzarv: gritZarvImage,
    propgritz: propGritzImage
  };

  const activeImage =
    imageByProduct[product?.id] || novaInsightImage;

  return (
    <div className="product-image-preview">
      <img
        src={activeImage}
        alt={`${product?.title || 'Product'} preview`}
      />
    </div>
  );
}