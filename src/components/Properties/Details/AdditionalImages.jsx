import React from 'react';
import styles from './Property.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const AdditionalImages = ({ images, setMainImage }) => {
	return (
		<div className={styles.AdditionalImages}>
			<ul>
				<Swiper slidesPerView={6} spaceBetween={20} className={['mySwiper', styles.Swiper].join(' ')}>
					{images.map((image, i) => {
						return (
							<SwiperSlide key={i}>
								<li onClick={() => setMainImage(image.url)}>
									<img src={image.url} alt='decoration' />
								</li>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</ul>
		</div>
	);
};

export default AdditionalImages;
