import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
 
  title: 'Teaching Jobs northern territory',
  description: "Are you searching for a teaching job in the NT? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in the northern territory " ,
 keywords:"Northern terriorty teaching jobs .  northern territory teaching positions",
};

export default function myPage() {
  return (


    <div className="">
      {/* <Helmet>
        <title>northern territory</title>
        <meta name="description" content="Are you searching for a teaching job in the NT? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in the northern territory" />
        <meta name="keywords" content="Northern terriorty teaching jobs .  northern territory teaching positions" />
      </Helmet> */}
      <div className="blurb text-left py-8 content-grid">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Teaching Jobs Northern Territory | Apply Online  | Job Vacancies</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >Northern Australia is a vast region that encompasses the northern part of Australia, including the Northern Territory and parts of Western Australia and Queensland. The region is known for its unique landscapes, diverse cultures, and rich history.If you are interested in teaching jobs in Northern Australia, the Northern Territory Department of Education is the largest employer in the region and offers a range of career opportunities in public education. The department provides a variety of teaching positions, including full-time, part-time, and casual positions. It also offers a range of attractive professional and personal benefits to its employees  </p>
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


<JobSearchBox l="" />
      <SearchResults q={{ q: "", l:"nothern territory"  }} />
    </div> </div>

  );
}