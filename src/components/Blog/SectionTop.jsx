import React from 'react';
import { Link } from 'react-router-dom';

const SectionTop = ({ title, description ,link}) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="font-poppins font-bold text-2xl md:text-4xl text-gray-900">
            {title}
          </h2>
          {
            description && <p className="font-poppins text-gray-500 text-base mt-2 md:mt-3">
            {description}
          </p>
          }
        </div>
        <div className="mt-4 md:mt-0">
          <Link to={link}>
            <button className="bg-[#1C1E53] text-white font-medium py-3 px-6 rounded-lg transition duration-300">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionTop;
