import axios from "axios";
import Head from "next/head";

async function fetchBlogs() {
  try {
    const response = await axios.get("https://api.codestrup.in/getblog/");
    const blog = response?.data?.data || [];
    return blog;
  } catch (error) {
    return error;
    console.error("Error fetching data:", error);
  }
}

export default async function BlogPost() {
  const blogs = await fetchBlogs();

  return (
    <div>
      <Head>
        <title>{blogs.title}</title>
        <meta name="description" content={blogs.excerpt} />
        <meta property="og:title" content={blogs.title} />
        <meta property="og:description" content={blogs.excerpt} />
      </Head>
      <h1>{blogs.title}</h1>
      <p>{blogs.content}</p>
      hkjh
    </div>
  );
}
