import six from './images/six.jpeg';
import seven from './images/seven.jpeg';
import eight from './images/eight.jpg';
import React from 'react';

const Offerings = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Our Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className=" p-6 rounded-lg shadow-lg bg-teal-600 shadow-teal-900/90">
          <img
          alt=""
          src={six}
          className="inline-block size-30 rounded-full ring-2 ring-white"
        />
            <h3 className="text-2xl font-medium">Ayurvedic Treatments</h3>
            <p className="mt-4 text-lg">Holistic healing through time-tested Ayurvedic therapies.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-teal-600 shadow-teal-900/90">
          <img
          alt=""
          src={seven}
          className="inline-block size-30 rounded-full ring-2 ring-white"
        />
            <h3 className="text-2xl font-medium">Herbal Products</h3>
            <p className="mt-4 text-lg">Organic and pure herbal products for natural wellness.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-teal-600 shadow-teal-900/90">
          <img
          alt=""
          src={eight}
          className="inline-block size-30 rounded-full ring-2 ring-white"
        />
            <h3 className="text-2xl font-medium">Mind & Body Wellness</h3>
            <p className="mt-4 text-lg">Guidance for achieving mental clarity and physical health.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
