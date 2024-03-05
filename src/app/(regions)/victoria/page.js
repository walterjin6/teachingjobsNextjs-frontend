

import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
 
  title: 'Academic Jobs Adelaide',
  description: "Don’t miss this chance to work in one of the best academic environments in the world. Apply now for your dream academic job in Gold Coast! " ,
 keywords:"Adelaide Academic Jobs Australia, Adelaide AcademicJobs",
};

export default function myPage() {
  return (


    <div className="">
      {/* <Helmet>
        <title>victoria</title>
        <meta name="description" content="Teaching Jobs in Victoria are now available through our job board at Teaching Jobs. Browse our website to see the available employment positions throughout Victoria." />
        <meta name="keywords" content="victoria teaching jobs . melbourne teaching jobs" />
      </Helmet> */}
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Victoria | Job Vacancies Online</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >If you’re on the hunt for teaching jobs in Victoria, TeachingJobs is able to provide you with Australia’s largest resource of employment opportunities. We take the stress out of finding a new teaching job by providing you with an unbeatable selection of exciting job vacancies at your fingertips.By making a profile with us, you’ll be kept up to date on all the latest openings in your area and be the first to know about any new positions. Demonstrate your qualifications, skills and experience to recruiters and get yourself noticed. Whether you’re looking for something in the inner-north of Melbourne or the south-east of Victoria, we have plenty of jobs waiting for the perfect candidate.  </p>
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



      <SearchResults q={{ q: "", l:"victoria"  }} />
    </div> </div>

  );
}