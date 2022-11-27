import React from 'react';
import styles from './Property.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const AdditionalImages = () => {
	const images = [1, 2, 3, 4, 5, 7, 8];
	return (
		<div className={styles.AdditionalImages}>
			<ul>
				<Swiper slidesPerView={6} spaceBetween={20} className={['mySwiper', styles.Swiper].join(' ')}>
					{images.map((e, i) => {
						return (
							<SwiperSlide>
								<li key={i}>
									<img
										src='https://images.unsplash.com/photo-1604306354505-8bab3239b009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
										alt='decoration'
									/>
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
