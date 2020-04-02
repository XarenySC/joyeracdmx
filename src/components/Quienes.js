import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getEstaticoByTitle } from "../utils/ContentfulApi";
import Spinner from "./Spinner";
import Static from "./Static";
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

export default function Quienes() {
	const classes = useStyles();
	const [post, setPost] = useState({ data: null, loading: true });
	const title = "Quienes Somos";

	useEffect(() => {
		getEstaticoByTitle(title).then(info => {
			setPost({ data: info, loading: false });
		});
	}, []);

	return (
		<Container className={classes.container}>
			<div className={classes.root}>
				{post.loading ? <Spinner /> : <Static data={post.data} />}
			</div>
		</Container>
	);
}
