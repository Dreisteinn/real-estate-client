import { useState, useEffect } from 'react';
import { useAuthCtx } from '../store/authContext';
const useFetchUserPosts = () => {
	const [posts, setPosts] = useState([]);
	const { user } = useAuthCtx().state;
	const url = process.env.REACT_APP_API_URL;
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`${url}/api/user/posts`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			const fetchedData = await response.json();
			setPosts(fetchedData);
		};
		fetchPosts();
	}, []);
	return { posts, setPosts };
};

export default useFetchUserPosts;
