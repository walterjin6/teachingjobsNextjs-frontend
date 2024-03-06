import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
 
  title: 'Teaching Jobs Brisbane',
  description: "Don’t miss this chance to work in one of the best Teaching environments in the world. Apply now for your dream Teaching job in Brisbane! " ,
 keywords:"Adelaide Teaching Jobs Australia, Adelaide TeachingJobs",
};

export default function myPage() {
  return (


    <div className="">
      {/* <Helmet>
        <title>PhD Jobs</title>
        <meta name="description" content="Are you searching for a teaching job in the brisbane? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in brisbane" />
        <meta name="keywords" content="Teaching Jobs Brisbane, teaching positions Brisbane" />
      </Helmet> */}
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Teaching Jobs Brisbane | Apply Online - Job Vacancies</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >Being registered with the Queensland College of Teachers (QCT), an independent statutory body distinct from any educational authority, is a requirement for teaching in Queensland. Teachers in all Queensland colleges and schools are registered with the QCT. Teachers who are now registered in other states or territories may be eligible for mutual recognition. We hope that this information will be useful to you as you look for teaching opportunities in Brisbane. I wish you luck!  </p>
          </div>
          <div className="newLine mb-2"></div>
   




         





      </div>
{/* 

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
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



      <SearchResults q={{ q: "", l:"brisbane"  }} />
    </div> </div>

  );
};

