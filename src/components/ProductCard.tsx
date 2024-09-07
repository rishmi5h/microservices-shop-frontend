import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  price,
}) => {
  return (
    <Link className="group" to={`/product/${id}`}>
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          src={image}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        ${price.toFixed(2)}
      </p>
    </Link>
  );
};

export default ProductCard;
