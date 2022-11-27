import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

import Card from './Card';

const Carousel = ({ properties }) => {
	const [width, setWidth] = useState(window.innerWidth);
	let slidesPW;
	if (width > 960) {
		slidesPW = 5;
	} else if (width < 960 && width > 640) {
		slidesPW = 3;
	} else if (width < 640 && width > 420) {
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
				spaceBetween={10}
				modules={[Autoplay]}
				autoplay={{
					stopOnLastSlide: false,
				}}
				className='mySwiper'
			>
				{properties.length > 0 ? (
					properties.map((property, i) => {
						return (
							<SwiperSlide key={i}>
								<Card data={property} />
							</SwiperSlide>
						);
					})
				) : (
					<h2
						style={{
							textAlign: 'center',
							color: '#6b6b6b',
							padding: '50px',
							borderRadius: '20px',
							backgroundColor: '#e6e6e6',
							maxWidth: '100%',
						}}
					>
						არაფერი მოიძებნა
					</h2>
				)}
			</Swiper>
		</>
	);
};

export default Carousel;
