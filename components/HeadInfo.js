import Head from "next/head";

function HeadInfo({ title, keyword, contents }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta keyword={keyword} />
        <meta contents={contents} />
      </Head>
    </div>
  );
}

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "Blog powered by Next js",
  contents: "practice next js",
};

export default HeadInfo;
