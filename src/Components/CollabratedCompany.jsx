// CollaboratedCompanies.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Google from './assets/google.png'
import Attain from './assets/attainsmart.jpg'
import Mbu from './assets/MBU.jpg'
import Gdscmbu from './assets/gdscmbu.png'
import microsoft from './assets/download.jpg'

const CollaboratedCompanies = () => {

const companyLogos = [
  { name: "Google", logo: Google },
  { name: "Attain Smart", logo: Attain },
  { name: "MBU", logo: Mbu },
  { name: "Gdscmbu", logo: Gdscmbu },
  { name: "Microsoft", logo: microsoft },
  { name: "Google", logo: Google },
  { name: "Attain Smart", logo: Attain },
  { name: "MBU", logo: Mbu },
  { name: "Gdscmbu", logo: Gdscmbu },
  { name: "Microsoft", logo: microsoft },
]

  return (
    <div className="py-10 bg-black">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Collaborated Companies</h2>
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
          }}
          loop={true}
        >
          {companyLogos.map((company, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="p-4 rounded-lg  text-center">
                <div className="w-24 h-24 overflow-hidden rounded-full border-2 border-gray-300 mx-auto mb-2">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-white font-medium">{company.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CollaboratedCompanies;
