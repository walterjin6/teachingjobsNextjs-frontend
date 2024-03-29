import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
 
  title: 'Teaching Jobs Adelaide',
  description: "Are you searching for a teaching job in the Canberra? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in Canberra " ,
 keywords:"Teaching Jobs Canberra, teaching positions Canberra",
};

export default function myPage() {
  return (


    <div className="">
      {/* <Helmet>
        <title>PhD Jobs</title>
        <meta name="description" content="Are you searching for a teaching job in the Canberra? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in Canberra" />
        <meta name="keywords" content="Teaching Jobs Canberra, teaching positions Canberra" />
      </Helmet> */}
      <div className="blurb text-left py-8 content-grid">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Teaching Jobs Canberra | Apply Online - Job Vacancies</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >Find all Canberra School Positions on Teaching Jobs Today. A registration with the Teacher Quality Institute (TQI), an autonomous statutory body distinct from any educational authority, is a prerequisite for teaching in the Australian Capital Territory. All ACT schools and institutions register teachers with the TQI. For teachers who are currently registered in other states or territories, mutual recognition may be applicable. In your pursuit of teaching opportunities in Canberra, we hope this material is useful. Wishing you luck!  </p>
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


<JobSearchBox l="canberra" />
      <SearchResults q={{ q: "", l:"canberra"  }} />
    </div> </div>

  );
}