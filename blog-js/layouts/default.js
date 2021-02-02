import Head from "next/head";
import Link from "next/link";

const name = "Your name";

export const siteTitle = "Blog";

export default function Layout({ children, home }) {
  return (
    <div>
      <nav className="mt-8  lg:mt-12 px-8 md:px-12 lg:px-20  border-gray-300 border-b ">
        <header className="text-left text-md md:text-xl lg:text-3xl">
            <>
              <div className="mb-4 flex justify-between items-center">
                <div className="text-black">
                  <Link href="/">
                    <a>{name}</a>
                  </Link>

                  <p className="text-xs md:text-sm lg:text-base text-opacity-40 text-gray-900	 text-right ">
                    "your text"
                  </p>
                </div>
                <div className="flex justify-end space-x-2 md:space-x-6 lg:space-x-10">
                  <a href=""> {/* <--Your Github link --> */}
                    <img src="/github.png" className="w-8 h-8 md:w-16 md:h-16" ></img>
                  </a>
                  <a href=""> {/* <--Your Twitter link --> */}
                    <img src="/twitter.png" className="w-8 h-8 md:w-16 md:h-16"></img>
                  </a>
                </div>
              </div>
            </>
        </header>
      </nav>
      <div className="xl:container  md:mx-8 lg:mx-12 mx-2  mb-16">
        <Head>
          <meta name="description" content="Personal Blog" />
        </Head>

        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">
              <a className="text-blue-400 "> ← Back To Home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
