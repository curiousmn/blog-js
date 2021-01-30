import Link from "next/link";
import Layout from "../../layouts/default";

export default function FirstPost() {
  return (
    <Layout>
      <div>
        <p className="text-center">My first Post</p>
        <br />
        <Link href="/">
          <a className="text-blue-400">Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
