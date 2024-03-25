import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
export const metadata = {
  title: 'Teaching Jobs Adelaide',
  description:
    'Don’t miss this chance to work in one of the best Teaching environments in the world. Apply now for your dream Teaching job in Adelaide! ',
  keywords: 'Adelaide Teaching Jobs Australia, Adelaide TeachingJobs',
};

export default function myPage() {
  return (
    <div className="">
      <div className="blurb text-left py-8 content-grid">

      <div className="bg-slate-200 full-width">
        <div className="  hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 capitalize m-0">
          Adelaide Teaching Jobs Australia
          </h1>
          <p className="px-7 mb-4 mt-1"> Seek your teaching jobs in Adelaide now, it’s important to meet the mandatory requirements such as holding a relevant university qualification, a current South Australian teacher registration, and a working with children check. Additionally, there’s a focus on continuous learning and development, with expectations for teachers to engage in ongoing training and adhere to the latest educational standards</p>
        </div>
      </div>

        {/* <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#e39e39] text-white rounded-full shadow-xl ">
          Adelaide Teaching Jobs Australia
        </h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">
            <p>
            For those interested in teaching in Adelaide, it’s important to meet the mandatory requirements such as holding a relevant university qualification, a current South Australian teacher registration, and a working with children check. Additionally, there’s a focus on continuous learning and development, with expectations for teachers to engage in ongoing training and adhere to the latest educational standards
            </p>{' '}
          </div>
          <div className="newLine mb-2"></div> */}

          {/* <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#e39e39] text-[#e39e39] rounded-3xl  shadow-md">
            Top Australian Universities To Work For
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 pb-8">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        href="/employers/the-university-of-adelaide/3737/"
                        className="text-[#A51C30] font-bold"
                      >
                        University of Adelaide
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="/jobs/Adelaide/">
                          Adelaide Lecturing Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs/Adelaide/">
                          Adelaide Research Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs/Adelaide/">
                          Adelaide Professorial Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs/Adelaide/">Adelaide Executive</Link>
                      </li>
                      <li>
                        <Link href="/jobs/Adelaide/">
                          Adelaide Administration
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs/Adelaide/">
                          Adelaide Human Resources
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        href="/employers/flinders-university/3873/"
                        className="text-[#f1b821] font-bold"
                      >
                        Flinders University
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="/jobs/flinders/">
                          Flinders Lecturing Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs/flinders/">
                          Flinders Research Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs/flinders/">
                          Flinders Professorial Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs/flinders/">Flinders Executive</Link>
                      </li>
                      <li>
                        <Link href="/jobs/flinders/">
                          Flinders Administration
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs/flinders/">
                          Flinders Human Resources
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>

                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        href="/employers/university-of-south-australia/3874/"
                        className="text-[#192847] font-bold"
                      >
                        University of South Australia
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="/jobs/UniSA/">UniSA Lecturing Jobs</Link>
                      </li>
                      <li>
                        <Link href="/jobs/UniSA/">UniSA Research Jobs</Link>
                      </li>
                      <li>
                        <Link href="/jobs/UniSA/">UniSA Professorial Jobs</Link>
                      </li>
                      <li>
                        <Link href="/jobs/UniSA/">UniSA Executive</Link>
                      </li>
                      <li>
                        <Link href="/jobs/UniSA/">UniSA Administration</Link>
                      </li>
                      <li>
                        <Link href="/jobs/UniSA/">UniSA Human Resources</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-screen-xl mx-auto">
          <form className="flex flex-col  gap-2 md:flex-row md:gap-2 mx-18 w-full " >
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Keyword"
              ref={keyWordRef}
            //defaultValue={name}cc
            />
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Location"
              ref={locationRef}
            />
            <button
              className="bg-[#e39e39] hover:bg-orange-600 text-white py-2 px-6 rounded-md focus:ring-2 focus:ring-orange-300"
              type="submit"
            >
              Find Jobs
            </button>
          </form>
        </div>
      </div> */}
<JobSearchBox l="Adelaide" />
          <SearchResults q={{ q: '', l: 'Adelaide' || 0 }} />
        </div>
      </div>
   
  );
}
