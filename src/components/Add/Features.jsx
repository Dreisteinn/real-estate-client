import React from 'react';
import { useNewPostCtx } from '../../store/newPostContextProvider';
import styles from './Add.module.scss';
import Feature from './Reusable/Feature';

const Features = () => {
	const { setProperty } = useNewPostCtx();
	return (
		<div className={styles.Features}>
			<h3>კეთილმოწყობა </h3>
			<ul>
				<Feature
					label='ბუნებრივი აირი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, naturalGas: existence } };
						});
					}}
				/>
				<Feature
					label='ცხელი წყალი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, hotWater: existence } };
						});
					}}
				/>
				<Feature
					label='სარდაფი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, basement: existence } };
						});
					}}
				/>
				<Feature
					label='ავეჯი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, furniture: existence } };
						});
					}}
				/>
				<Feature
					label='ტელევიზორი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, tv: existence } };
						});
					}}
				/>
				<Feature
					label='ინტერნეტი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, internet: existence } };
						});
					}}
				/>
				<Feature
					label='აივანი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, balcony: existence } };
						});
					}}
				/>
				<Feature
					label='ცენტრალური გათბობა'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, centralHeating: existence } };
						});
					}}
				/>
				<Feature
					label='რკინის კარი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, ironDoor: existence } };
						});
					}}
				/>
				<Feature
					label='კონდიციონერი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, ac: existence } };
						});
					}}
				/>
				<Feature
					label='სარეცხი მანქანა'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, washingMachine: existence } };
						});
					}}
				/>
				<Feature
					label='ავტოფარეხი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, garage: existence } };
						});
					}}
				/>
				<Feature
					label='სიგნალიზაცია'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, alarm: existence } };
						});
					}}
				/>
				<Feature
					label='საკაბელო ტელევიზია'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, cableTv: existence } };
						});
					}}
				/>
				<Feature
					label='სათავსო'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, closet: existence } };
						});
					}}
				/>
				<Feature
					label='მაცივარი'
					setState={(existence) => {
						setProperty((prev) => {
							return { ...prev, features: { ...prev.features, fridge: existence } };
						});
					}}
				/>
			</ul>
		</div>
	);
};

export default Features;
