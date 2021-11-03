import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function MainBanner() {
  const [bannerBox, setBanner] = useState([]);

  useEffect(() => {
    fetch('/data/MockData.json')
      .then(bannerSource => bannerSource.json())
      .then(bannerData => {
        setBanner(bannerData.banner);
      });
  }, []);

  return (
    <Section aria-label="광고 슬라이더">
      <Carousel>
        {bannerBox.map((banner, index) => (
          <div key={index}>
            <img src={banner.imageUrl} alt="광고 이미지" />
          </div>
        ))}
      </Carousel>
    </Section>
  );
}

const Section = styled.div`
  margin-bottom: 96px;
`;

export default MainBanner;
