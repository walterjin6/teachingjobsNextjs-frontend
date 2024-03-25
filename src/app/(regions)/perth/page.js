

import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
 
  title: 'Teaching Jobs Perth',
  description: "On Teaching Jobs Perth You can filter by discipline, level, type, location, and more. You can also sign up for email alerts to get notified of new opportunities as they arise. " ,
 keywords:"Teaching Jobs Perth, teaching positions Perth",
};

export default function myPage() {
  return (


    <div className="">
      {/* <Helmet>
        <title>Perth</title>
        <meta name="description" content="On Teaching Jobs Perth You can filter by discipline, level, type, location, and more. You can also sign up for email alerts to get notified of new opportunities as they arise. " />
        <meta name="keywords" content="Teaching Jobs Perth, teaching positions Perth" />
      </Helmet> */}
      <div className="blurb text-left py-8 content-grid">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Teaching Jobs Perth | Apply Online - Job Vacancies</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >Find all Perth School Positions on Teaching Jobs Today. You need to be registered with the Teacher Registration Board of Western Australia (TRBWA), a separate and independent statutory body from any educational authority, in order to teach in Western Australia. Teachers are registered with the TRBWA for all schools and colleges in Western Australia. For educators who are currently registered in different states or territories, mutual recognition may be applicable. With any luck, this material will be useful to you as you look for teaching opportunities in Perth. Hope all goes well!  </p>
          </div>
          <div className="newLine mb-2"></div>
   




         





      </div>


      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-screen-xl mx-auto">
          <form className="flex flex-col  gap-2 md:flex-row md:gap-2 mx-18 w-full " >
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-[#f4a10c] text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Keyword"
              ref={keyWordRef}
            //defaultValue={name}
            />
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-[#f4a10c] text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Location"
              ref={locationRef}
            />
            <button
              className="bg-[#f4a10c] hover:bg-orange-600 text-white py-2 px-6 rounded-md focus:ring-2 focus:ring-orange-300"
              type="submit"
            >
              Find Jobs
            </button>
          </form>
        </div>
      </div> */}


<JobSearchBox l="perth" />
      <SearchResults q={{ q: "", l:"perth"  }} />
    </div> </div>

  );
}