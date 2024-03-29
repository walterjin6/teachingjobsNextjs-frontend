import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
 
  title: 'Academic Jobs Queensland',
  description: "Teaching Jobs have teaching jobs in QLD available throughout the state. Visit our website to see the employment positions available in private, public and catholic schools. " ,
 keywords:"queensland teaching jobs . queensland teaching positions",
};

export default function myPage() {
  return (


    <div className="">
      {/* <Helmet>
        <title>Queensland</title>
        <meta name="description" content="Teaching Jobs have teaching jobs in QLD available throughout the state. Visit our website to see the employment positions available in private, public and catholic schools." />
        <meta name="keywords" content="queensland teaching jobs . queensland teaching positions" />
      </Helmet> */}
      <div className="blurb text-left py-8 content-grid">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Teaching Jobs Queensland | Apply Online - Job Vacancies</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >Looking for a new challenge? Looking for teaching jobs in Queensland? TeachingJobs is Australia’s leading jobsite for employment resources for education professionals, providing an unbeatable selection of job vacancies across various positions. Covering all types of schools from Christian to Catholic, kindergarten to secondary and everything in between, we have an extensive selection of jobs available for all education professionals.The perfect QLD teacher jobs can be difficult to come by when taking into consideration your personal preferences, skills and qualifications. Sign up to TeachingJobs today and we will do all the hard work for you and notify you of any available positions that match your criteria. This way, you won’t miss out on any dream education jobs you’ve been searching for and can be confident that no opportunities are passing you by.  </p>
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


<JobSearchBox l="queensland" />
      <SearchResults q={{ q: "", l:"queensland"  }} />
    </div> </div>

  );
}