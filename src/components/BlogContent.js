import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { getBlogById } from "../utils/ContentfulApi";
import Spinner from "./Spinner";
import Container from "@material-ui/core/Container";

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
		height: "50vh"
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
								src={blogContent.data.imagenDestacada}
								alt={blogContent.data.title}
							/>
						</div>
						<Grid container className={classes.center}>
							<p>{blogContent.data.content}</p>
						</Grid>
					</div>
				)}
			</div>
		</Container>
	);
}
