import Head from "next/head";
import Link from "next/link";
import remark from "remark";
import html from "remark-html";
import Layout from "../layouts/default";
import getSortedPostData from "../api/index";

export async function getStaticProps() {
  const allPostData = await getSortedPostData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <section>
        <div>
          <Head>
            <title>My blog</title>
          </Head>
          <br />
          <br />
          <section className="mt-7">
            <h1 className="text-3xl mt-10 text-black text-left text-opacity-60">
              Blog
            </h1>

            <ul className="mt-10">
              {allPostData.map(({ id, date, title, content }) => (
                <li key={id} className="mt-8">
                  <p className=" text-2xl leading-8 font-bold tracking-tight text-gray-900 ">
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                  </p>
                  {date}
                  <br />
                  <div className=" mt-8 text-gray-700 text-opacity-80">
                    {content}{" "}
                    <br/>
                    <br/>
                    <Link href={`/posts/${id}`}>
                      <a className="text-blue-400	 hover:text-teal-600 mb-8">
                        Read more →
                      </a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </Layout>
  );
}
