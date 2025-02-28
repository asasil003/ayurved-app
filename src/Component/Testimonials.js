
import React from 'react';
import eleven from './images/eleven.webp';
import twelve from './images/twelve.jpg';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-300 border-1 border-solid border-gray-400 m-1 mb-0 rounded-md">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Customer Testimonials</h2>
        <div className="mt-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
          alt=""
          src={eleven}
          className="inline-block size-30 rounded-full ring-2 ring-white border-1 border-solid border-gray-500"
        />
            <p className="text-lg italic">"Kaayakalpam’s treatments changed my life. I feel healthier and more energized."</p>
            <span className="block mt-4 text-md font-semibold">- Aditi Sharma</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
          alt=""
          src={twelve}
          className="inline-block size-30 rounded-full ring-2 ring-white border-1 border-solid border-gray-500"
        />
            <p className="text-lg italic">"The herbal products are a game-changer. My skin has never felt this good!"</p>
            <span className="block mt-4 text-md font-semibold">- Ramesh Kumar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
