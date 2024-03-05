import type { Metadata } from 'next';
import Link from 'next/link';
import Head from 'next/head';
// other imports...

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'Teaching Jobs Thank you Page', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Find out about academic positions at all universities right now! Visit our FAQ Teaching Jobs Online page to find if your next question has already been answered.',
  keywords: 'FAQ academicjobs, academicjobs FAQ, Frequently Asked Questions',
};
export default function myPage() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="content-grid">
        <div className="bg-slate-100 rounded-3xl mt-12 p-10">
          <h2 className="underline-full">
            WOO HOO, Thank you for your Job Post
          </h2>
          <h3>The TeachingJobs team</h3>
          <p>Have any questions? </p>
          <div className="flex justify-between items-center">
            <p className="font-bold">
              <Link href="/contact-us" className="link link-aj">
                Contact our team
              </Link>{' '}
              to get in touch.
            </p>
            <Link href="/post-a-job" className="btn btn-aj">
              Post Another Job
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
