import React, { useState } from 'react';
import styles from './Add.module.scss';
import { getArrayFilledWithImages } from '../../helpers';
import { useNewPostCtx } from '../../store/newPostContextProvider';
import { IoImagesOutline } from 'react-icons/io5';

const Upload = () => {
	const [selectedImages, setSelectedImages] = useState(null);
	const [previewSources, setPreviewSources] = useState(null);
	const { setProperty } = useNewPostCtx();

	const handleChange = (event) => {
		const files = event.target.files;
		const images = getArrayFilledWithImages(files);
		setSelectedImages(images);
		previewImages(images);
	};
	const previewImages = (images) => {
		setProperty((prev) => {
			return { ...prev, images: [] };
		});
		setPreviewSources(null);
		images.forEach((image) => {
			const reader = new FileReader();
			reader.readAsDataURL(image);
			reader.onloadend = () => {
				// updating images state in NewPostCtx
				setProperty((prev) => {
					return { ...prev, images: [...prev.images, reader.result] };
				});
				setPreviewSources((prev) => {
					return prev ? [...prev, reader.result] : [reader.result];
				});
			};
		});
	};

	return (
		<div className={styles.UploadWrapper}>
			<h3>დაამატეთ სურათები (აირჩიეთ რამდენიმე)</h3>
			<div className={styles.FileInput}>
				<input type='file' multiple accept='image/png,image/jpeg,image/webp' onChange={(e) => handleChange(e)} />
				<button className={styles.UploadButton}>
					დამატება <IoImagesOutline />
				</button>
			</div>
			{previewSources && (
				<div className={styles.SelectedImagesPreviewer}>
					{previewSources.map((url, i) => (
						<img src={url} alt='previewImage' key={i} />
					))}
				</div>
			)}
		</div>
	);
};
export default Upload;
