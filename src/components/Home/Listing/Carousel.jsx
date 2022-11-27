import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

import Card from './Card';

const Carousel = () => {
	const properties = [0, 1, 2, 3, 4];
	const [width, setWidth] = useState(window.innerWidth);
	let slidesPW;
	if (width > 960) {
		slidesPW = 4;
	} else if (width < 960 && width > 640) {
		slidesPW = 3;
	} else if (width < 640 && width > 360) {
		slidesPW = 2;
	} else {
		slidesPW = 1;
	}
	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth));
	});

	return (
		<>
			<Swiper
				slidesPerView={slidesPW}
				modules={[Autoplay]}
				spaceBetween={20}
				loop={true}
				autoplay={{
					stopOnLastSlide: false,
				}}
				className='mySwiper'
			>
				{properties.map((e, i) => {
					return (
						<SwiperSlide key={i}>
							<Card />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default Carousel;
