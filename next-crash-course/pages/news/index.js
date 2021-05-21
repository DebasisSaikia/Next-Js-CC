import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>News </h1>
      <ul>
        <li>
          <Link href="/news/features">NEXT js is awesome</Link>
        </li>
        <li>
          <Link href="/news/server">Great server side rendering</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
