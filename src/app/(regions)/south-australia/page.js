
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
 
  title: 'Teaching Jobs South Australia',
  description: "At Teaching Jobs, we have a wide range of job vacancies & employments for teaching in Adelaide. Visit our job board for private and public jobs. Apply online now! " ,
 keywords:"aidelaide teaching jobs . south australia teaching jobs",
};

export default function myPage() {
  return (


    <div className="">
      {/* <Helmet>
        <title>South Australia</title>
        <meta name="description" content="At Teaching Jobs, we have a wide range of job vacancies & employments for teaching in Adelaide. Visit our job board for private and public jobs. Apply online now!" />
        <meta name="keywords" content="aidelaide teaching jobs . south australia teaching jobs" />
      </Helmet> */}
      <div className="blurb text-left py-8 content-grid">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Teaching Jobs South Australia | Apply Online | Vacancies</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >If you’re looking for teaching jobs in Adelaide, TeachingJobs has you covered. We are Australia’s #1 education jobsite with the most comprehensive collection of education jobs available online. We take pride in connecting top educators with fulfilling positions that allow them to inspire, lead and enlighten.Wherever you are in Adelaide, from Mount Osmond to Woodville South, TeachingJobs has a varied range of positions ready for you to browse. Regardless of whether you’re looking for a primary teaching job in Adelaide, a casual relief teaching position or a school aide job, we have plenty of rewarding employment openings just waiting for you to apply. </p>
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

<JobSearchBox l="south australia" />

      <SearchResults q={{ q: "", l:"south australia"  }} />
    </div> </div>

  );
}