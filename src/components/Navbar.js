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

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	center: {
		display: "flex",
		justifyContent: "center"
	},
	logo: {
		width: "25%"
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
		<div className={classes.grow}>
			<AppBar color="white" position="fixed">
				<Toolbar>
					<div className={`${classes.menuSection} ${classes.sectionDesktop}`}>
						<Button>TIENDA</Button>
						<Button>QUIENES SOMOS</Button>
						<Button>FAQ</Button>
						<Button>CONTACTO</Button>
					</div>
					<div className={`${classes.grow} ${classes.center}`}>
						<img src={logo} alt="logo" className={classes.logo} />
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
						<IconButton
							aria-label="Carrito"
							color="inherit"
						>
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
