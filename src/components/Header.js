import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import QuomodoSystems from "../assets/QuomodoSystems.png";
const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "red"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={QuomodoSystems} width={120} height={50} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Travel Agency
          </Typography>
          <Link
            to="/reservations"
            style={{ color: "black", textDecorationLine: "none" }}
          >
            <Button color="inherit">Book A Flight</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
