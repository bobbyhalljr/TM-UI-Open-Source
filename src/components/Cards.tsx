// components/Cards.tsx
import React from 'react';

interface BasicCardProps {
  title: string;
  content: string;
  className?: string;
}

export const BasicCard: React.FC<BasicCardProps> = ({ title, content, className }) => {
  return (
    <div className={`border border-gray-300 my-6 max:w-2/4 min-w-1/4 p-4 rounded-3xl shadow-md ${className}`}>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

interface CardWithImageProps {
  title: string;
  content: string;
  imageUrl: string;
  className?: string;
}

export const CardWithImage: React.FC<CardWithImageProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="border border-gray-300 my-6 max:w-2/4 min-w-1/4 p-4 rounded-xl shadow-md">
      <img src={imageUrl} alt="Card Image" className="mb-4 rounded-3xl object-fit" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

interface CardWithActionsProps {
  title: string;
  content: string;
  onEdit: () => void;
  onDelete: () => void;
  className?: string;
}

export const CardWithActions: React.FC<CardWithActionsProps> = ({ title, content, onEdit, onDelete }) => {
  return (
    <div className="border border-gray-300 my-6 max:w-2/4 min-w-1/4 p-4 rounded-3xl shadow-md">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{content}</p>
      <div className="flex justify-end mt-4">
        <button className="text-blue-500 hover:underline mr-4" onClick={onEdit}>
          Edit
        </button>
        <button className="text-red-500 hover:underline" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

interface CardWithIconsProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  className?: string;
}

export const CardWithIcons: React.FC<CardWithIconsProps> = ({ title, content, icon }) => {
  return (
    <div className="border border-gray-300 my-6 max:w-2/4 min-w-1/4 p-4 rounded-3xl shadow-md">
      <div className="flex items-center mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

interface CardWithBadgesProps {
  title: string;
  content: string;
  badges: string[];
  className?: string;
}

export const CardWithBadges: React.FC<CardWithBadgesProps> = ({ title, content, badges }) => {
  return (
    <div className="border border-gray-300 my-6 max-w-2/4 min-w-1/4 p-4 rounded-3xl shadow-md">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{content}</p>
      <div className="flex mt-4">
        {badges.map((badge, index) => (
          <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};


interface TeamMemberCardProps {
  name: string;
  role: string;
  photoUrl: string;
  className?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, photoUrl }) => (
  <div className="rounded-3xl border border-gray-300 my-6 max-w-2/4 min-w-1/4 p-4 shadow-md">
    <img src={photoUrl} alt={`Photo of ${name}`} className="w-24 h-24 shadow-md object-cover rounded-full mb-4" />
    <h2 className="text-lg font-semibold">{name}</h2>
    <p className="text-gray-500">{role}</p>
  </div>
);

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  actionText: string;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, actionText }) => (
  <div className="rounded-3xl border border-gray-300 my-6 max-w-2/4 min-w-1/4 p-6 shadow-md">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-gray-500 mb-4">{price}</p>
    <ul className="list-disc pl-4 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600">{feature}</li>
      ))}
    </ul>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
      {actionText}
    </button>
  </div>
);

interface ProductCardProps {
  name: string;
  price: string;
  imageSrc: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageSrc }) => {
  return (
    <div className="rounded-3xl border border-gray-300 my-6 max-w-2/4 min-w-1/4 pb-6 shadow-md">
      <img src={imageSrc} alt="Product Image" className="w-full border border-b-gray-300 rounded-t-3xl bg-gray-300 h-40 object-cover" />
      <h1 className="text-2xl font-semibold mt-12 ml-6 mb-2">{name}</h1>
      <p className="text-gray-600 text-lg semi-bold ml-6">{price}</p>
      <button className="bg-blue-500 ml-6 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none">
        Add to Cart
      </button>
    </div>
  );
};