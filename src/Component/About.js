
export default function About() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 
    border-1 border-solid border-gray-500 m-0 rounded-xl">
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] 
      origin-bottom-left skew-x-[-30deg] bg-[url(./images/four.jpeg)]  ring-1 
      shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="bg-red-900 text-xl/8 sm:text-2xl/9 rounded-lg">
        <h2 className="text-center font-bold text-white">About Us</h2>
        </div>
        
        
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “Kaayakalpam brings the best of traditional Ayurveda, ancient healing practices, and nature's 
              remedies to enhance your well-being. Join us in embracing a life of balance and vitality.”
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  )
}
