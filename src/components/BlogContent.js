import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { getBlogById } from "../utils/ContentfulApi";
import Spinner from "./Spinner";
import Container from "@material-ui/core/Container";
import marked from "marked";

const renderer = new marked.Renderer();

marked.options({
	breaks: true,
	renderer: renderer
});

const useStyles = makeStyles(theme => ({
	container: {
		flexGrow: 1,
		paddingTop: "7rem",
		display: "flex"
	},
	root: {
		flexGrow: 1,
		marginBottom: theme.spacing(2),
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	media: {
		width: "100%"
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

const createMarkup = content => {
	return { __html: marked(content) };
};

export default function BlogContent(props) {
	const classes = useStyles();
	const [blogContent, setBlogContent] = useState({ data: {}, loading: true });

	useEffect(() => {
		getBlogById(props.match.params.id).then(data => {
			setBlogContent({ data, loading: false });
		});
	}, [props.match.params.id]);

	return (
		<Container className={classes.container}>
			<div className={classes.root}>
				{blogContent.loading ? (
					<Spinner />
				) : (
					<div>
						<div className={classes.center}>
							<h2 className={classes.header}>
								{blogContent.data.title.toUpperCase()}
							</h2>
						</div>
						<div>
							<img
								className={classes.media}
								src={blogContent.data.imagenDestacada}
								alt={blogContent.data.title}
							/>
						</div>
						<Grid container className={classes.center}>
							<div
								dangerouslySetInnerHTML={createMarkup(blogContent.data.content)}
							/>
						</Grid>
					</div>
				)}
			</div>
		</Container>
	);
}
