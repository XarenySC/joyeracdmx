import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
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
	return (
		<div className={classes.root}>
			<div className={classes.center}>
				<h2 className={classes.header}>QUIENES SOMOS</h2>
			</div>
			<Grid container className={classes.center}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
					magnam voluptatum autem repellat quod, suscipit odit quos quam
					blanditiis fugiat, nulla mollitia quasi eligendi animi numquam,
					nostrum rerum possimus dolorum.
				</p>
				<p>
					Totam magni possimus quas reiciendis voluptatum voluptatibus molestias
					eum voluptates, quidem voluptatem, quasi sapiente, quam nemo sunt.
					Suscipit officiis asperiores perspiciatis necessitatibus explicabo
					enim nesciunt pariatur quasi libero, nostrum? Deleniti.
				</p>
				<p>
					Sed ipsa dolorum deleniti nobis ad, maxime labore dolore dolor numquam
					beatae unde harum corrupti exercitationem ipsam illo, omnis dicta
					placeat a autem, consectetur doloremque. Porro quia incidunt, esse
					velit!
				</p>
				<p>
					Blanditiis tempore delectus, rerum consequatur, debitis quae laborum
					vel, qui explicabo, culpa deleniti. Autem sunt dolor maxime quasi,
					odio sed eligendi earum ipsum, temporibus ducimus deleniti officiis.
					Magnam id, reprehenderit.
				</p>
				<p>
					Fuga, numquam, vel iure culpa possimus repellat eligendi, facere
					incidunt reiciendis voluptatem non. Hic, nisi! Minima, nisi, quisquam
					sed mollitia eveniet labore quod! Error voluptas quidem, hic possimus
					ab inventore.
				</p>
				<p>
					Accusantium, voluptates. Asperiores possimus perspiciatis culpa
					voluptatem, magnam unde. At eveniet ea officiis perspiciatis suscipit
					distinctio laborum. Et beatae, facere necessitatibus nesciunt, nisi
					sint aliquid aperiam autem possimus numquam nobis!
				</p>
				<p>
					Aliquid laudantium porro mollitia eligendi et ad sint explicabo
					provident repudiandae odio. Quisquam, delectus. Natus omnis adipisci,
					vel porro et numquam. Dolores nihil, voluptatum provident eveniet amet
					ipsum facere ex?
				</p>
				<p>
					Porro ullam nam omnis expedita, illum laboriosam. At, quis veniam esse
					similique maiores repudiandae, repellat ipsam dicta illo quae minima
					ipsum enim quia molestiae quasi laudantium nesciunt, explicabo,
					blanditiis architecto!
				</p>
				<p>
					Aliquam repellat, doloremque eligendi odit facilis sunt voluptatem
					facere sint minus, nemo recusandae atque esse cum at deserunt vel
					commodi magni nihil nobis ratione molestiae porro iste. Omnis,
					provident, aliquam.
				</p>
				<p>
					Harum, eius libero provident odio vero delectus dolore ut praesentium
					velit dicta, explicabo culpa numquam architecto. Ut omnis ducimus, nam
					repudiandae quo laborum vitae aut necessitatibus, adipisci aspernatur
					eum saepe.
				</p>
			</Grid>
		</div>
	);
}
