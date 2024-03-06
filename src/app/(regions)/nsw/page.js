
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
 
  title: 'Teaching Jobs NSW',
  description: "Do you wish to apply for a teaching job in NSW? Visit our website today at Teaching Jobs, to see all our available positions throughout NSW. Apply online now! " ,
 keywords:"nsw teaching jobs . new south whales teaching positions",
};

export default function myPage() {
  return (


    <div className="">
      {/* <Helmet>
        <title>NSW</title>
        <meta name="description" content="Do you wish to apply for a teaching job in NSW? Visit our website today at Teaching Jobs, to see all our available positions throughout NSW. Apply online now!" />
        <meta name="keywords" content="nsw teaching jobs . new south whales teaching positions" />
      </Helmet> */}
      <div className="blurb text-left py-8 content-grid">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Teaching Jobs NSW | Apply Online | Job Vacancies</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >If you’re looking for the latest job opportunities in the education sector, look no further than Teaching Jobs. Finding the right teaching jobs in NSW can be difficult and time-consuming, but we go out of our way to make your job hunt as smooth and painless as possible. By making an online profile on our site, you’ll be the first to know about exciting new employment opportunities and NSW teacher jobs. By entering your preferences, you are able to filter out jobs that don’t match your criteria and only be shown vacancies that align with your skills, qualifications and goals.  </p>
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


<JobSearchBox l="new south wales" />
      <SearchResults q={{ q: "", l:"new south wales"  }} />
    </div> </div>

  );
}