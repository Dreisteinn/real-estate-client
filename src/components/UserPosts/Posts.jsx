import React from 'react';
import Card from '../Home/Listing/Card';
import styles from './UserPosts.module.scss';
import { PuffLoader } from 'react-spinners';
import usePropertiesCtx from '../../store/propertiesContext';

const Posts = ({ data }) => {
	const { loading } = usePropertiesCtx();
	if (loading) {
		return <PuffLoader size={150} color='rgba(228, 189, 19, 1)' loading={loading} />;
	} else {
		return (
			<div className={styles.Posts}>
				<ul className={styles.Properties}>
					{data.map((post, i) => {
						return <Card key={i} data={post} />;
					})}
				</ul>
			</div>
		);
	}
};

export default Posts;
