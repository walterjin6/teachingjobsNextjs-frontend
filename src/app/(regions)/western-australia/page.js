import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
 
  title: 'Teaching Jobs western australia',
  description: "Visit our job board today at Teaching Jobs, to see all of our employment and job vacancies available including public, private and catholic teaching jobs in Western Australia. " ,
 keywords:"western australia teaching jobs. western austrlaia teaching positions",
};

export default function myPage() {
  return (


    <div className="">
      {/* <Helmet>
        <title>western australia</title>
        <meta name="description" content="Visit our job board today at Teaching Jobs, to see all of our employment and job vacancies available including public, private and catholic teaching jobs in Western Australia." />
        <meta name="keywords" content="western australia teaching jobs . western austrlaia teaching positions" />
      </Helmet> */}
      <div className="blurb text-left py-8 content-grid">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl ">Teaching Jobs Western Australia | Apply Online | Job Vacancies</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p >Western Australia is a state located in the western part of Australia. It is the largest state in the country, covering an area of 2,529,875 square kilometers. The state is home to a diverse range of flora and fauna, including 13,000 species of wildflowers. Western Australia is known for its mining industry, which is the state’s largest industry, and it is also a significant producer of wheat, wool, and other agricultural products.Western Australia has a well-established education system that provides quality education to students. The Department of Education is the largest employer in the state, providing a range of career opportunities in public education. The department offers a variety of teaching positions, including full-time, part-time, and casual positions. The department also provides a range of attractive professional and personal benefits to its employees  </p>
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


<JobSearchBox l="Western Australia" />
      <SearchResults q={{ q: "", l:"western australia"  }} />
    </div> </div>

  );
}