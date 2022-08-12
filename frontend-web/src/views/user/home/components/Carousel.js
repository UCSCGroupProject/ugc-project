import React from 'react'

import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from '@coreui/react'

import temp1 from '../../../../assets/images/pages/user/home/carousel/temp2.jpg'
import temp2 from '../../../../assets/images/pages/user/home/carousel/temp2.jpg'
import temp3 from '../../../../assets/images/pages/user/home/carousel/temp3.jpg'

const carouselData = [
  {
    id: 1,
    img: temp1,
    title: 'Students',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quo.',
  },
  {
    id: 2,
    img: temp2,
    title: 'Staff',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, quas?',
  },
  {
    id: 3,
    img: temp3,
    title: 'University',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt accusamus, a nostrum eveniet quas doloremque.',
  },
]

function Carousel() {
  return (
    <CCarousel controls indicators>
      {carouselData.map((item) => (
        <CCarouselItem key={item.id}>
          <CImage
            fluid
            className="d-block"
            src={item.img}
            alt={`slide-${item.id}`}
            style={{ height: '500px', width: '100%', objectFit: 'cover' }}
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </CCarouselCaption>
        </CCarouselItem>
      ))}
    </CCarousel>
  )
}

export default Carousel
