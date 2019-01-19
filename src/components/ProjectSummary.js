import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const ProjectSummary = ({ item }) => (
  <div>
    <Img alt="" sizes={item.heroImage.sizes} />
    <h3>
      <Link to={`/blog/${item.slug}`}>{item.title}</Link>
    </h3>
    <small>{item.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: item.description.description,
      }}
    />
  </div>
);

ProjectSummary.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default ProjectSummary;
