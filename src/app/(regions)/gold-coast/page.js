import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
 
  title: 'Teaching Jobs Gold Coast',
  description: "Don’t miss this chance to work in one of the best Teaching environments in the world. Apply now for your dream Teaching job in Gold Coast! " ,
 keywords:"Gold Coast Teaching Jobs Australia, Gold Coast TeachingJobs",
};

export default function myPage() {
  return (


    <div className="">
      {/* <Helmet>
        <title>PhD Jobs</title>
        <meta name="description" content="Don’t miss this chance to work in one of the best teaching environments in the world. Apply now for your dream teaching job in the Gold Coast!" />
        <meta name="keywords" content="Teaching Jobs Gold Coast, teaching positions Gold Coast" />
      </Helmet> */}
      <div className="blurb text-left py-8 content-grid">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Teaching Jobs Gold Coast | Apply Online - Job Vacancies</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >Renowned Australian and international universities, including Bond University, Griffith University, Southern Cross University, and others, are located in the Gold Coast. From the humanities and arts to science and engineering, from health and medicine to law and business, these universities provide a broad range of Teaching specialisations. Joining their outstanding and cooperative uni jobs will allow you to support their outstanding influence, teaching, lecturing, and research.  </p>
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


<JobSearchBox l="gold coast" />
      <SearchResults q={{ q: "", l:"gold coast"  }} />
    </div> </div>

  );
}