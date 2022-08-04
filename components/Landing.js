import Head from "next/head";

export default function Landing({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>web3rsvp</title>
        <meta
          name="description"
          content="Find, join, and create virtual events with your web3 frens"
        />
      </Head>
      <section className="py-12">
        <div className="w-full md:w-8/12 text-left">
          <h3 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span>discover what&apos;s happening in the </span>
            <span className="text-indigo-600">metaverse</span>
          </h3>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            find, join, and create virtual events with your web3 besties!
          </p>
        </div>
      </section>
      <section className="py-12">{children}</section>
    </div>
  );
}
