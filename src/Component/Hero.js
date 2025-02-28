import three from './images/three.jpg';

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Customer support', value: '24/7' },
]

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src={three}
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-50"
      />
      
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl lg:mx-0">
          
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Kaayakalpam</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
          Discover Wellness with Kaayakalpam
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 
          font-semibold text-white  sm:grid-cols-2 md:flex lg:gap-x-10">
              <button aria-hidden="true" className='hover:text-xl'> Explore our offerings &rarr;</button>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}



