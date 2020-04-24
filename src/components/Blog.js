import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Post from "./Post";
import Spinner from "./Spinner";
import { getAllBlogs } from "../utils/ContentfulApi";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
	container: {
		flexGrow: 1,
		paddingTop: "7rem",
		display: "flex"
	},
	root: {
		flexGrow: 1,
		marginBottom: theme.spacing(2)
	},
	media: {
		height: 140
	},
	header: {
		marginTop: 0,
		display: "inline-block",
		borderBottom: "1px black solid",
		padding: "0 .5rem .25rem .5rem"
	},
	center: {
		textAlign: "center"
	}
}));

export default function Blog() {
	const classes = useStyles();
	const [blogData, setBlog] = useState({
		posts: [],
		loading: true
	});

	useEffect(() => {
		getAllBlogs().then(entries => {
			setBlog({ posts: entries, loading: false });
		});
	}, []);

	return (
		<Container className={classes.container}>
			<div className={classes.root}>
				<div className={classes.center}>
					<h2 className={classes.header}>BLOG</h2>
				</div>
				{blogData.loading ? (
					<Spinner />
				) : (
					<Grid container spacing={3}>
						{blogData.posts.map(item => {
							return (
								<Grid item xs={12} sm={4} key={item.sys.id}>
									<Post
										id={item.sys.id}
										title={item.fields.title}
										slug={item.fields.slug}
										imagenDestacada={
											item.fields.imagenDestacada.fields.file.url
										}
										content={item.fields.content}
										categoria={item.fields.categoria}
									/>
								</Grid>
							);
						})}
					</Grid>
				)}
			</div>
		</Container>
	);
}
