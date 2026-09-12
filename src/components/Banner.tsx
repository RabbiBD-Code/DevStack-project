import bannerLogo from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between items-center container mx-auto my-10'>
      <div className='space-y-7'>
        <h2 className='text-6xl font-extrabold'><span className='text-[#0F172A]'>Build Your Ideal</span> <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E]/50 to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h2>
        <p>
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4">
        <button className="btn text-white bg-linear-to-r from-[#F97316] to-[#EC4899]">Explore Technologies</button>
        <button className="btn px-9">Learn More</button>
      </div>
      </div>
      <div>
            <img src={bannerLogo} alt="" className='w-2xl'/>
      </div>
      
    </div>
  );
};

export default Banner;
