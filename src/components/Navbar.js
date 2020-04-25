import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";

// Iconos
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";

//Imagenes
import logo from "../img/logojoyera.png";
import { Link as LinkTo } from "react-router-dom";

//Contentful
import {
	getTiposProducto,
	getColeccionesProducto
} from "../utils/ContentfulApi";

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	center: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	header: {
		margin: theme.spacing(1)
	},
	headerContainer: {
		backgroundColor: "#2B2B2B",
		color: "#FFF"
	},
	logo: {
		width: "40%"
	},
	menuSection: {
		width: "30%",
		maxWidth: "30%",
		display: "flex",
		justifyContent: "space-evenly"
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	textCenter: {
		textAlign: "center"
	},
	textRight: {
		justifyContent: "end"
	},
	link: {
		color: "#212121",
		textDecoration: "none"
	},
	menuItem:{
		"&:hover": {
			fontWeight: "bold",
			backgroundColor: "white"
		}
	}
}));

export default function PrimarySearchAppBar() {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const [menuTiendaAnchorEl, setMenuTiendaAnchorEl] = React.useState(null);
	const [menuTiposAnchorEl, setMenuTiposAnchorEl] = React.useState(null);
	const [menuColeccionesAnchorEl, setMenuColeccionesAnchorEl] = React.useState(
		null
	);

	const [tipos, setTipos] = React.useState([]);
	const [colecciones, setColecciones] = React.useState([]);

	React.useEffect(() => {
		getTiposProducto().then(tipos => {
			setTipos(tipos);
		});
	}, []);

	React.useEffect(() => {
		getColeccionesProducto().then(colecciones => {
			setColecciones(colecciones);
		});
	}, []);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const isMenuTiendaOpen = Boolean(menuTiendaAnchorEl);
	const isMenuTiposOpen = Boolean(menuTiposAnchorEl);
	const isMenuColeccionesOpen = Boolean(menuColeccionesAnchorEl);

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuTiendaOpen = event => {
		setMenuTiendaAnchorEl(event.currentTarget);
	};

	const handleMenuTiendaClose = () => {
		setMenuTiendaAnchorEl(null);
	};

	const handleMenuTiposOpen = event => {
		setMenuTiposAnchorEl(event.currentTarget);
	};

	const handleMenuTiposClose = () => {
		setMenuTiposAnchorEl(null);
		setMenuTiendaAnchorEl(null);
	};

	const handleMenuColeccionesOpen = event => {
		setMenuColeccionesAnchorEl(event.currentTarget);
	};

	const handleMenuColeccionesClose = () => {
		setMenuColeccionesAnchorEl(null);
		setMenuTiendaAnchorEl(null);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const menuTiendaId = "menuTienda";
	const renderMenuTienda = (
		<Menu
			anchorEl={menuTiendaAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuTiendaId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuTiendaOpen}
			onClose={handleMenuTiendaClose}
		>
			<LinkTo
				onClick={handleMenuTiendaClose}
				className={classes.link}
				to="/catalogo"
			>
				<MenuItem className={classes.menuItem} disableRipple>Todos</MenuItem>
			</LinkTo>
			<MenuItem className={classes.menuItem} disableRipple onClick={handleMenuTiposOpen}>Tipos</MenuItem>
			<MenuItem className={classes.menuItem} disableRipple onClick={handleMenuColeccionesOpen}>Colecciones</MenuItem>
		</Menu>
	);

	const menuTiposId = "menuTipos";
	const renderMenuTipos = (
		<Menu
			anchorEl={menuTiposAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuTiposId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "left" }}
			open={isMenuTiposOpen}
			onClose={handleMenuTiposClose}
		>
			{tipos.map(item => {
				return item !== "Más Vendido" ? (
					<LinkTo
						key={item}
						onClick={handleMenuTiposClose}
						className={classes.link}
						to={`/tipos/${item}`}
					>
						<MenuItem className={classes.menuItem} disableRipple>{item}</MenuItem>
					</LinkTo>
				) : null;
			})}
		</Menu>
	);

	const menuColeccionesId = "menuColecciones";
	const renderMenuColecciones = (
		<Menu
			anchorEl={menuColeccionesAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuColeccionesId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "left" }}
			open={isMenuColeccionesOpen}
			onClose={handleMenuColeccionesClose}
		>
			{colecciones.map(item => {
				return (
					<LinkTo
						key={item}
						onClick={handleMenuTiposClose}
						className={classes.link}
						to={`/colecciones/${item}`}
					>
						<MenuItem className={classes.menuItem} disableRipple>{item}</MenuItem>
					</LinkTo>
				);
			})}
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem className={classes.menuItem} onClick={handleProfileMenuOpen} disableRipple>
				<IconButton
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
					className={classes.menuItem}
					disableRipple
				>
					<AccountCircle />
				</IconButton>
				<p>Login</p>
			</MenuItem>
			<MenuItem className={classes.menuItem} disableRipple>
				<IconButton color="inherit" className={classes.menuItem} disableRipple>
					<ShoppingCart />
				</IconButton>
				<p>Carrito</p>
			</MenuItem>
			<MenuItem className={classes.menuItem} disableRipple>
				<IconButton color="inherit" className={classes.menuItem} disableRipple>
					<Link href="https://github.com/XarenySC/joyeracdmx" color="inherit">
						<Facebook />
					</Link>
				</IconButton>
				<p>Facebook</p>
			</MenuItem>
			<MenuItem className={classes.menuItem} disableRipple>
				<IconButton color="inherit" className={classes.menuItem} disableRipple>
					<Link href="https://github.com/XarenySC/joyeracdmx" color="inherit">
						<Instagram />
					</Link>
				</IconButton>
				<p>Instagram</p>
			</MenuItem>
			<Divider />
			<MenuItem className={`${classes.textRight} ${classes.menuItem}`} disableRipple>
				<LinkTo className={classes.link} to="/catalogo">
					Tienda
				</LinkTo>
			</MenuItem>
			<MenuItem className={`${classes.textRight} ${classes.menuItem}`} disableRipple>
				<LinkTo className={classes.link} to="/nosotros">
					Nosotros
				</LinkTo>
			</MenuItem>
			<MenuItem className={`${classes.textRight} ${classes.menuItem}`} disableRipple>
				<LinkTo className={classes.link} to="/blog">
					Blog
				</LinkTo>
			</MenuItem>
			<MenuItem className={`${classes.textRight} ${classes.menuItem}`} disableRipple>
				<LinkTo className={classes.link} to="/contacto">
					Contacto
				</LinkTo>
			</MenuItem>
		</Menu>
	);

	return (
		<div>
			<AppBar color="white" position="fixed">
				<div className={`${classes.headerContainer} ${classes.center}`}>
					<h6 className={classes.header}>ENVIO GRATIS COMPRANDO $1600 O MÁS</h6>
				</div>
				<Toolbar>
					<div className={`${classes.menuSection} ${classes.sectionDesktop}`}>
						<Button
							aria-controls={menuTiendaId}
							aria-haspopup="true"
							onClick={handleMenuTiendaOpen}
							className={classes.menuItem}
							disableRipple
						>
							<Typography className={classes.menuItem}>TIENDA</Typography>
						</Button>
						<Button className={classes.menuItem} disableRipple>
							<LinkTo className={classes.link} to="/nosotros">
								Nosotros
							</LinkTo>
						</Button>
						<Button className={classes.menuItem} disableRipple>
							<LinkTo className={classes.link} to="/blog">
								BLOG
							</LinkTo>
						</Button>
						<Button className={classes.menuItem} disableRipple>
							<LinkTo className={classes.link} to="/contacto">
								CONTACTO
							</LinkTo>
						</Button>
					</div>
					<div className={`${classes.grow} ${classes.center}`}>
						<LinkTo
							to="/"
							className={`${classes.textCenter} ${classes.center}`}
						>
							<img src={logo} alt="logo" className={classes.logo} />
						</LinkTo>
					</div>
					<div className={`${classes.menuSection} ${classes.sectionDesktop}`}>
						<IconButton
							edge="end"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
							className={classes.menuItem}
							disableRipple
						>
							<AccountCircle />
							<Typography className={classes.menuItem}>Login</Typography>
						</IconButton>
						<IconButton color="inherit" className={classes.menuItem} disableRipple>
							<Link
								href="https://github.com/XarenySC/joyeracdmx"
								color="inherit"
							>
								<Facebook />
							</Link>
						</IconButton>
						<IconButton color="inherit" className={classes.menuItem} disableRipple>
							<Link
								href="https://github.com/XarenySC/joyeracdmx"
								color="inherit"
							>
								<Instagram />
							</Link>
						</IconButton>
						<IconButton aria-label="Carrito" color="inherit" className={classes.menuItem} disableRipple>
							<ShoppingCart />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
							className={classes.menuItem}
							disableRipple
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
			{renderMenuTienda}
			{renderMenuTipos}
			{renderMenuColecciones}
		</div>
	);
}
