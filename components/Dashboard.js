import Head from "next/head";
import { useRouter } from "next/router";
import joinClassNames from "../utils/joinClassNames";

export default function Dashboard({ navigation, title, tabs, children }) {
  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.value;
    const href = tabs.find((tab) => tab.name == name).href;
    router.push(href);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>My Dashboard | web3rsvp</title>
        <meta name="description" content="Manage your events and RSVPs" />
      </Head>
      <div className="flex flex-wrap py-8">
        <nav className="space-y-1 w-60 mb-8 sm:w-2/12" aria-label="Sidebar">
          {active && (
            <div className="flex items-center px-3 py-2 mb-2 rounded-md text-sm font-medium text-indigo-800 w-full">
              <div className="w-6 h-3 mr-1 bg-indigo-400 rounded-full"></div>
              <p className="text-ellipsis overflow-hidden">{account}</p>
            </div>
          )}
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={joinClassNames(
                item.current
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "flex items-center px-3 py-2 text-sm font-medium rounded-md"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="sm:w-10/12 sm:pl-8">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl mb-4">
            {title}
          </h1>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue={tabs.find((tab) => tab.current).name}
              onChange={handleChange}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={joinClassNames(
                      tab.current
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                      "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <section className="py-8">{children}</section>
        </div>
      </div>
    </div>
  );
}
