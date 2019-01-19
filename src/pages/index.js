// Import dependencies
import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { StaticQuery, graphql } from 'gatsby';

// Import components
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ProjectSummary from '../components/ProjectSummary';

// Import styled components
import Container from '../styles/objects/Container';
import Grid from '../styles/objects/Grid';
import Section from '../styles/objects/Section';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        allContentfulProject {
          edges {
            node {
              title
              slug
              tags
              heroImage {
                sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                  ...GatsbyContentfulSizes_withWebp
                }
              }
              description {
                description
              }
            }
          }
        }
        allContentfulPerson {
          edges {
            node {
              name
              shortBio {
                shortBio
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const siteTitle = get(data, 'site.siteMetadata.title');
      const posts = get(data, 'allContentfulProject.edges');
      const [author] = get(data, 'allContentfulPerson.edges');

      return (
        <Layout>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <Container>
            <Section>
              <h2>Recent work</h2>
              <Grid>
                {posts.map(({ node }) => (
                  <li key={node.slug}>
                    <ProjectSummary item={node} />
                  </li>
                ))}
              </Grid>
            </Section>
          </Container>
        </Layout>
      );
    }}
  />
);

export default IndexPage;
