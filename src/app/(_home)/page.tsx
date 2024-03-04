import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoAJ from '@/components/brand/LogoAJ';
import type { Metadata } from 'next';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
import JobCategoryAndLocationLinks from '@/components/links/JobCategoryAndLocationLinks';
import AusUniLogos from '@/components/AusUniLogos';
import AmericaUniLogos from '@/components/AmericaUniLogos';
import { getContentRegion } from '@/actions/getContentRegion';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Jobs: All Higher Ed Positions Locally and Globally.', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Search for academic positions, research, science and university staff jobs here. Find higher ed jobs at all universities today!',
  keywords:
    'Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs',
};

export default async function myPage() {
  const contentRegion = await getContentRegion();

  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;

  return (
    <main className="content-grid">
      <div className="flex flex-col items-center justify-center mb-32">
        <div className="h-[15vh] flex flex-col items-end justify-end mb-8">
        <Link
              href={`/admin-home/`}>
              <Image
              width={300}
              height={170}
                className="w-30"
                src="/newteachingjobslogo.png"
                alt=""
              />
            </Link>
        </div>
        {/* Job Search Form */}
        <div className="w-full md:w-3/6 h-[6vh] flex flex-col items-top mt-[-1rem]">
          <JobSearchBoxHome />
        </div>
      </div>

      <JobCategoryAndLocationLinks />
   

      <div id="section" className="bg-slate-200 full-width py-12 mb-16 mt-12">
        <div className="md:hero-content flex flex-col lg:flex-row mx-auto md:items-start py-12">
          <h1 className="text-2xl font-normal sm:text-right text-gray-400 m-0 pb-8  md:px-0">
            <span className="md:text-6xl font-bold text-gray-500 pb-4 ">
              TEACHINGJOBS: <br />
            </span>{' '}
            Australia's #1 Teaching Job Board Site          </h1>

          <div>
            <p className="md:px-7 mb-2 mt-1 text-gray-600">
            Find all Australian Teaching Career opportunities here, we make it easy.

It is time to shine in 2024, with finding your opportunities on TeachingJobs Today!
            </p>
            <p className="md:px-7 text-[#334680] font-bold">
            Kindergarten Jobs | Primary School Jobs | Secondary School Jobs
            </p>
          </div>
        </div>
      </div>

     

   
      <h2 className="underline-full">Top Teaching Jobs Today</h2>
      <div className="cate-group section23 ">
    <div className="widget__text-block"><div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 "><div className="column "><ul className=""><li className="mb-1 mt-4 "><a className="text-blue-500 font-bold" href="/jobs/middle-leader---the-arts/66672/">Middle Leader - The Arts</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">Columba Catholic College </a></li><li className="mb-2 "><a href="/">Charters Towers, QLD</a></li><li className="mb-2 "><a href="/"> Mar 18, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"></li><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/primary-teacher-(hpe)/64334/">Primary Teacher (HPE)</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">St Joseph's Catholic School </a></li><li className="mb-2 "><a href="/">Mount Isa, QLD</a></li><li className="mb-2 "><a href="/">Mar 24, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/secondary-teacher-(english)/64027/">Secondary Teacher (English)</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">Columba Catholic College</a></li><li className="mb-2 "><a href="/">Charters Towers, QLD</a></li><li className="mb-2 "><a href="/"> Mar 22, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/secondary-teacher-(english---humanities)/66671/">Secondary Teacher (English &amp; Humanities) (71101)</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">Good Shepherd Catholic College</a></li><li className="mb-2 "><a href="/">Mount Isa, QLD</a></li><li className="mb-2 "><a href="/">Mar 18, 2024</a></li></ul></ul></div></div><div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7"><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/primary-teacher/63526/">Primary Teacher</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">St Francis Catholic School</a></li><li className="mb-2 "><a href="/">Ayr, QLD</a></li><li className="mb-2 "><a href="/">Mar 16, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/primary-secondary-teacher---internal-relief/66688/">Primary/Secondary Teacher - Internal Relief</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">St Joseph's Catholic School</a></li><li className="mb-2 "><a href="/">Cloncurry QLD</a></li><li className="mb-2 "><a href="/">Mar 29, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/foundation-principal/64922/">Secondary Teacher (Junior Woodwork and Metalwork &amp; Senior Furnishings)</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">Good Shepherd Catholic College</a></li><li className="mb-2 "><a href="/">Mount Isa, QLD</a></li><li className="mb-2 "><a href="/">Mar 29, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/">Primary Teacher (Prep)</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">St John Bosco Catholic School</a></li><li className="mb-2 "><a href="/">Collinsville, QLD</a></li><li className="mb-2 "><a href="/">Mar 29, 2024</a></li></ul></ul></div></div><div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7"><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/middle-leader---science/66666/">Middle Leader - Science</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">Columba Catholic College</a></li><li className="mb-2 "><a href="/">Charters Towers, QLD</a></li><li className="mb-2 "><a href="/">Mar 18, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/primary-teacher/66673/">Primary Teacher</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">St John Bosco Catholic School</a></li><li className="mb-2 "><a href="/">Collinsville, QLD</a></li><li className="mb-2 "><a href="/">Mar 18, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/primary-teachers-(multiple-positions)/64336/">Primary Teachers (multiple positions)</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">St Joseph's Catholic School</a></li><li className="mb-2 "><a href="/">Mount Isa, QLD</a></li><li className="mb-2 "><a href="/">Mar 24, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/middle-leader---inclusive-practices/66667/">Middle Leader - Inclusive Practices</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">St Joseph's Catholic School</a></li><li className="mb-2 "><a href="/">Cloncurry, QLD</a></li><li className="mb-2 "><a href="/">Mar 18, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/primary-teacher-(lote)/62733/">Primary Teacher (LOTE)</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">St Francis Catholic School</a></li><li className="mb-2 "><a href="/">Ayr, QLD</a></li><li className="mb-2 "><a href="/">Mar 8, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/primary-teacher-(year-6)/62636/">Primary Teacher (Year 6)</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">St Michael's Catholic School</a></li><li className="mb-2 "><a href="/">Palm Island, QLD</a></li><li className="mb-2 "><a href="/">Mar 7, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/middle-leader---mathematics/66670/">Middle Leader - Mathematics</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">Good Shepherd Catholic College</a></li><li className="mb-2 "><a href="/">Mount Isa, QLD</a></li><li className="mb-2 "><a href="/">Mar 18, 2024</a></li></ul></ul></div><div className="column"><ul className=""><li className="mb-1 mt-4"><a className="text-blue-500 font-bold" href="/jobs/hospitality,-food-and-fibre-teacher-(secondary)/66664/">Hospitality, Food and Fibre Teacher (Secondary)</a></li><ul className="innerUL"><li className="mb-2 "><a href="/">Ryan Catholic College</a></li><li className="mb-2 "><a href="/">Townsville, QLD</a></li><li className="mb-2 "><a href="/">Mar 31, 2024</a></li></ul></ul></div></div></div>
      </div>
      <Link className="text-[#e79d36] mt-4 mb-4 px-2 font-bold" href="/jobs/">
        view more top jobs →
      </Link>

      {/* <div className="ml-2">
      {/* <Link                 href="https://cportal.jobelephant.com/login"
                 className="btn text-white mt-8 bg-[#265882] px-4"
               >
                  Post Your JobElephant Now
               </Link></div> */}

      <h2 className="underline-full mt-20">Top Cities for Uni Jobs</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/USA/" className="text-[#e79d36] font-bold">
                    USA
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/boston/">Boston</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/new-york/">New York</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/los-angeles/">Los Angeles</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/san-francisco/">San Francisco</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/chicago/">Chicago</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/san-diego/">San Diego</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/washington-dc/">Washington DC</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/philadelphia/">Philadelphia</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/atlanta/">Atlanta</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/seattle/">Seattle</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/pittsburgh/">Pittsburgh</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/new-haven/">New Haven</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Australia/" className="text-[#e79d36] font-bold">
                    Australia
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/melbourne/">Melbourne</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/sydney/">Sydney</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/brisbane/">Brisbane</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/gold-coast/">Gold Coast</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/canberra/">Canberra</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/perth/">Perth</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/adelaide/">Adelaide</Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link href="/UK/" className="text-[#e79d36] font-bold">
                    UK
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/london/">London</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/edinburgh/">Edinburgh</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/manchester/">Manchester</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Canada/" className="text-[#e79d36] font-bold">
                    Canada
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/toronto/">Toronto</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/vancouver/">Vancouver</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/montreal/">Montreal</Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link href="/Asia/" className="text-[#e79d36] font-bold">
                    Asia
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/hong-kong/">Hong Kong</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/beijing/">Beijing</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/tokyo/">Tokyo</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/singapore/">Singapore</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Europe/" className="text-[#e79d36] font-bold">
                    Europe
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/paris/">Paris</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/zurich/">Zurich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/munich/">Munich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/amsterdam/">Amsterdam</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/copenhagen/">Copenhagen</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/stockholm/">Stockholm</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* WIP */}
      {/* <h2 className="underline-full mt-20">Top Universities To Work For</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="https://www.academicjobs.com/employers/queensland-university-of-technology/3786/"
                    className="text-[#003463] font-bold"
                  >
                    Queensland University of Technology (QUT)
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-lecturer/">QUT Lecturing Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-research/">QUT Research Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-professor/">
                      QUT Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-Executive/">QUT Executive</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-Administration/">
                      QUT Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-Human-Resources/">
                      QUT Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-jobs/">QUT Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="/employers/bond-university/3785/"
                    className="text-orange-500 font-bold"
                  >
                    Bond University
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/bond-lecturer/">Bond Lecturing Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-research/">Bond Research Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-professor/">
                      Bond Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-Executive/">Bond Executive</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-Administration/">
                      Bond Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-Human-Resources/">
                      Bond Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-jobs/">Bond Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="/employers/harvard-university/3100/"
                    className="text-[#A51C30] font-bold"
                  >
                    Harvard University
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-lecturer/">
                      Harvard Lecturing Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-research/">
                      Harvard Research Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-professor/">
                      Harvard Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-Executive/">
                      Harvard Executive
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-Administration/">
                      Harvard Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-Human-Resources/">
                      Harvard Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-jobs/">Harvard Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="https://www.academicjobs.com/employers/university-of-california-san-diego/3149/"
                    className="text-[#192847] font-bold"
                  >
                    University of California Las Angeles (UCLA)
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-lecturer/">UCLA Lecturing Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-research/">UCLA Research Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-professor/">
                      UCLA Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-Executive/">UCLA Executive</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-Administration/">
                      UCLA Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-Human-Resources/">
                      UCLA Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-jobs/">UCLA Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      {/* <h2 className="underline-full mt-20">
        The University Rankings/ Top Academic Careers
      </h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
            <div className="column">
              <ul className="">
                <ul className="pb-4">
                  <li className="hover:underline">
                    <Link href="/employers/harvard-university/3100/">
                      {' '}
                      Harvard University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/stanford-university/3101/">
                      {' '}
                      Stanford University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-cambridge/12635/">
                      {' '}
                      University of Cambridge
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/massachusetts-institute-of-technology/3103/">
                      MIT
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-california-berkeley/3105/">
                      {' '}
                      University of California, Berkeley
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/princeton-university/3104/">
                      {' '}
                      Princeton University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-oxford/3099/">
                      {' '}
                      University of Oxford
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/columbia-university/3127/">
                      {' '}
                      Columbia University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/caltech/3128/">Caltech</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/University-of-Chicago/3126/">
                      {' '}
                      University of Chicago
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/yale-university/3125/">
                      {' '}
                      Yale University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/Cornell-University/3138/">
                      Cornell University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-california-los-angeles/3136/">
                      UCLA
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-pennsylvania/3131/">
                      UPenn
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/johns-hopkins-university/3130/">
                      Johns Hopkins University (JHU)
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/university-college-london/12527/">
                      University College London (UCL)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/eth-zurich/3132/">ETH Zurich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-tokyo/3155/">
                      The University of Tokyo (UTokyo)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/new-york-university-nyu/3144/">
                      New York University (NYU)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/duke-university/3139/">
                      {' '}
                      Duke University (Duke)
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      {/* These are broken */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <Link
          href="/job-type/"
          className="btn btn-white border-4 shadow-md leading-none"
        >
          → Find Academic<span className="font-bold"> Job-Types</span>{' '}
          <span className="hide-mobile">(i.e. Professor, Fellow)</span>
        </Link>
        <Link
          href="/industry/"
          className="btn btn-white border-4 shadow-md leading-none"
        >
          → Find Academic Positions in
          <span className="font-bold"> Industry</span>
          <span className="hide-mobile">
            (i.e. laboratory technical services)
          </span>
        </Link>
      </div> */}

      <div className="card-actions flex mt-4 mx-auto">
        <Link href="/academic-talent-pool" className="btn btn-aj">
          Join our Talent Pool
        </Link>
      </div>
    </main>
  );
}
