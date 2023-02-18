import Head from "next/head";

function Header() {
  return (
    <Head>
      <title>My personal portfolio website</title>
      <meta
        name="description"
        content="This is my personal portfolio generated through NextJS"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Header;
