import UserInstagram from "user-instagram";

export const getInstagramPosts = username => {
	return UserInstagram(username).then(result => {
		return result.posts;
	});
};
