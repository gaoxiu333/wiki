import React from 'react';
import styled from '@emotion/styled';

const Heading = ({ type = 'medium-title', renderAs, ...delegated }) => {
  let Component;
  if (type === 'section-title') {
    Component = SectionTitle;
  } else if (type === 'small-title') {
    Component = SmallTitle;
  } else if (type === 'medium-title') {
    Component = MediumTitle;
  } else if (type === 'large-title') {
    Component = LargeTitle;
  } else if (type === 'major-heading') {
    Component = MajorHeading;
  } else if (type === 'normal-heading') {
    Component = NormalHeading;
  } else if (type === 'minor-heading') {
    Component = MinorHeading;
  } else {
    throw new Error('Unrecognized Heading type: ' + type);
  }

  return <Component as={renderAs} {...delegated} />;
};

const SectionTitle = styled.h1`
  font-size: 16px;
  color: var(--color-secondary);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SmallTitle = styled.h1`
  font-size: 22px;
  color: var(--color-gray-1000);
`;
const MediumTitle = styled.h1`
  font-size: 28px;
  color: var(--color-gray-1000);
  line-height: 1.2;
`;
const LargeTitle = styled.h1`
  font-size: 38px;
  color: var(--color-gray-1000);
`;

const MajorHeading = styled.h2`
  font-size: 32px;
  color: var(--color-tertiary);
  margin-top: 48px;
  margin-bottom: 16px;
`;
const NormalHeading = styled.h3`
  font-size: 25px;
  color: var(--color-gray-900);
  margin-top: 32px;
  margin-bottom: 12px;
`;
const MinorHeading = styled.h4`
  font-size: 20px;
  color: var(--color-gray-900);
  margin-top: 24px;
  margin-bottom: 12px;
`;

export default Heading;
