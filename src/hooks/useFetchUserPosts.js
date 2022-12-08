import { useState, useEffect } from 'react';
import { useAuthCtx } from '../store/authContext';
const useFetchUserPosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const { user } = useAuthCtx().state;
	const url = process.env.REACT_APP_API_URL;
	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const response = await fetch(`${url}/api/user/posts`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			const fetchedData = await response.json();
			setPosts(fetchedData);
			setLoading(false);
		};
		fetchPosts();
	}, []);
	return { posts, setPosts, loading };
};

export default useFetchUserPosts;
