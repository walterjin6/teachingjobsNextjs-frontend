import Link from 'next/link';

const JobLocationTypeLinks = () => {
  return (
    <ul className=" faculty-container flex gap-4 items-center justify-center text-[#f4a10c] mx-2 mt-7 flex-wrap">
      <li className="hover:underline whitespace-nowrap">
        <Link href="/online/">Online{'  '}</Link>
      </li>
      <li className="hover:underline whitespace-nowrap">
        <Link href="/remote/">Remote{'  '}</Link>
      </li>
      <li className="hover:underline whitespace-nowrap">
        <Link href="/full-time/">Full-Time{'  '}</Link>
      </li>
      <li className="hover:underline whitespace-nowrap">
        <Link href="/part-time/">Part-Time{'  '}</Link>
      </li>
      <li className="hover:underline md:whitespace-nowrap md:block hidden">
        <Link href="/casual/">Casual</Link>
      </li>
    </ul>
  );
};

export default JobLocationTypeLinks;
