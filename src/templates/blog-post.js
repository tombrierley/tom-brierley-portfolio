import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { StaticQuery, graphql } from 'gatsby';

const BlogPostTemplate = () => (
  // <StaticQuery
  //   query={graphql`
  //     query BlogPostBySlug($slug: String!) {
  //       allContentfulProject(slug: { eq: $slug }) {
  //         title
  //         heroImage {
  //           sizes(maxWidth: 1180, background: "rgb:000000") {
  //             ...GatsbyContentfulSizes_withWebp
  //           }
  //         }
  //         body {
  //           body
  //         }
  //       }
  //     }
  //   `}
  //   render={(data) => {
  //     const post = get(data, 'data.contentfulBlogPost');
  //     const siteTitle = get(data, 'data.site.siteMetadata.title');

  //     return (
  //       <div style={{ background: '#fff' }}>
  //         <Helmet title={`${post.title} | ${siteTitle}`} />
  //         <div className="wrapper">
  //           <h1 className="section-headline">{post.title}</h1>
  //           <p
  //             style={{
  //               display: 'block',
  //             }}
  //           >
  //             {post.publishDate}
  //           </p>
  //           <div
  //             dangerouslySetInnerHTML={{
  //               __html: post.body.childMarkdownRemark.html,
  //             }}
  //           />
  //         </div>
  //       </div>
  //     );
  //   }}
  />
);

export default BlogPostTemplate;
