import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Spinner from "./Spinner";
import InstagramEmbed from "react-instagram-embed";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { getInstagramPosts } from "../utils/InstagramApi";

const useStyles = makeStyles(theme => ({
	container: {
		flexGrow: 1,
		paddingTop: theme.spacing(1),
		display: "flex"
	},
	root: {
		flexGrow: 1,
		marginBottom: theme.spacing(2),
		maxWidth: "100%"
	},
	media: {
		height: 140
	},
	header: {
		marginTop: 0,
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.5rem",
			flexDirection: "column"
		},
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	hashtag: {
		borderTop: "1px black solid",
		padding: "1rem .5rem 1rem .5rem",
		marginTop: 0,
		display: "inline-block"
	},
	center: {
		textAlign: "center"
	}
}));

export default function InstagramFeed() {
	const classes = useStyles();
	const [feed, setFeed] = useState({
		posts: [],
		loading: true
	});

	useEffect(() => {
		getInstagramPosts("joyeracdmx").then(posts => {
			setFeed({ posts, loading: false });
		});
	}, []);

	return (
		<Container className={classes.container}>
			<div className={classes.root}>
				<div className={classes.center}>
					<h2 className={classes.header}>
						BUY IT <FavoriteIcon /> POST IT <FavoriteIcon /> TAG IT{" "}
						<FavoriteIcon /> SHARE IT
					</h2>
				</div>
				<div className={classes.center}>
					<h2 className={classes.hashtag}>#JOYERACDMX</h2>
				</div>
				{feed.loading ? (
					<Spinner />
				) : (
					<Grid container spacing={3}>
						{feed.posts.map(item => {
							return (
								<Grid item xs={12} sm={6} lg={4} key={item.id}>
									<InstagramEmbed url={item.url} />
								</Grid>
							);
						})}
					</Grid>
				)}
			</div>
		</Container>
	);
}
