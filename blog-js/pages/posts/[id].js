import Layout from "../../layouts/default";
import { getAllPostIds, getPostData } from "../../api/index";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <div className="mt-16 md:mt-24 lg:mt-32">
        <h1 className="text-3xl text-center font-extrabold text-gray-900 tracking-tight ">{postData.title}</h1>
        <br />
        <div className="text-right text-gray-900 text-opacity-40">{postData.date}</div>
        <br />
        <div
          className="my-8 mx-8 md:my-12 lg:my-14 md:mx-12 lg:mx-14 text-gray-700 text-opacity-80"
          dangerouslySetInnerHTML={{ __html: postData.contentHTML }}
        />
      </div>
    </Layout>
  );
}
