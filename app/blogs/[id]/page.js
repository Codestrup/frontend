import Layout from "@/components/layout/Layout";
import { Box, Chip, Container, Typography } from "@mui/material";
import axios from "axios";
import moment from "moment";
import Image from "next/image";

// Function to fetch blog data based on the blog `id` from the query params
async function fetchBlog(id) {
  try {
    const response = await axios.get(`https://api.codestrup.in/getblog/${id}`);
    return response?.data || {};
  } catch (error) {
    console.error("Error fetching blog:", error);
    return {};
  }
}

// Dynamically generate metadata based on the blog post content
export async function generateMetadata({ searchParams }) {
  const blog = await fetchBlog(searchParams.id);

  return {
    title: blog.metaTitle || blog.title || "Blog Post",
    description:
      blog.metaDescription || blog.excerpt || "Read this amazing blog post.",
    keywords: blog.metaKeywords.join(", "),
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.excerpt || blog.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.excerpt || blog.metaDescription,
    },
  };
}

// Main component to render the blog post content
export default async function BlogPost({ searchParams }) {
  const blog = await fetchBlog(searchParams.id);

  if (!blog || !blog.title) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <Layout headerStyle={1} footerStyle={1}>
        <Container maxWidth="md">
          <h2 style={{ fontWeight: 700, marginTop: "16px" }}>{blog?.title}</h2>
          <h6 style={{ fontWeight: 700, color: "gray" }}>"{blog?.excerpt}"</h6>
          <Typography color="gray" my={2} fontSize={12}>
            Posted on {moment(blog?.createdAt).format("L")}
          </Typography>
          <img
            width="100%"
            src={blog?.imageUrl}
            alt={blog?.metaDescription}
            title={blog?.metaDescription}
          />

          <Box my={3} dangerouslySetInnerHTML={{ __html: blog?.content }} />
          <div style={{ marginBottom: "50px" }}>
            {blog?.metaKeywords.map((word, index) => (
              <Chip
                key={index}
                label={word}
                sx={{
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </div>
  );
}
