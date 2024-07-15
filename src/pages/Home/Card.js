import React from 'react';
import card1 from './homePage/card1.jpg';

export const Card = () => {
    return (
        <div className="w-[175px] mb-16 mt-5 mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="/">
                <img className="rounded-t-lg w-full" src={card1} alt="product" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">DressBerry</h5>
                    <p className='text-[#959595]'>Hyperbrights Crop Shirt</p>
                </a>
                <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-500 line-through">$699</span>
                    <span className="text-lg font-bold text-gray-900">$599</span>
                </div>
            </div>
        </div>
    );
};
