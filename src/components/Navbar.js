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

// Iconos
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";

//Imagenes
import logo from "../img/logojoyera.png";
import { Link as LinkTo } from "react-router-dom";

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
		//padding: theme.spacing(1)
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
	link: {
		color: "#212121",
		textDecoration: "none"
	}
}));

export default function PrimarySearchAppBar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
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
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Login</p>
			</MenuItem>
			<MenuItem>
				<IconButton color="inherit">
					<ShoppingCart />
				</IconButton>
				<p>Carrito</p>
			</MenuItem>
			<MenuItem>
				<IconButton color="inherit">
					<Link href="https://github.com/XarenySC/joyeracdmx" color="inherit">
						<Facebook />
					</Link>
				</IconButton>
				<p>Facebook</p>
			</MenuItem>
			<MenuItem>
				<IconButton color="inherit">
					<Link href="https://github.com/XarenySC/joyeracdmx" color="inherit">
						<Instagram />
					</Link>
				</IconButton>
				<p>Instagram</p>
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
						<Button>
							<LinkTo className={classes.link} to="/catalogo">TIENDA</LinkTo>
						</Button>
						<Button>
							<LinkTo className={classes.link} to="/quienes_somos">QUIENES SOMOS</LinkTo>
						</Button>
						<Button>
							<LinkTo className={classes.link} to="/faq">FAQ</LinkTo>
						</Button>
						<Button>
							<LinkTo className={classes.link} to="/contacto">CONTACTO</LinkTo>
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
						>
							<AccountCircle />
							<Typography>Login</Typography>
						</IconButton>
						<IconButton color="inherit">
							<Link
								href="https://github.com/XarenySC/joyeracdmx"
								color="inherit"
							>
								<Facebook />
							</Link>
						</IconButton>
						<IconButton color="inherit">
							<Link
								href="https://github.com/XarenySC/joyeracdmx"
								color="inherit"
							>
								<Instagram />
							</Link>
						</IconButton>
						<IconButton aria-label="Carrito" color="inherit">
							<ShoppingCart />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}
