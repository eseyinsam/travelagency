import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  Container
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#e2e8f0",
    height: "100vh",
    overflowX: "hidden"
    // height: "100vh", width: '100vw'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    height: "70vh",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
    // border: "10px solid red"
  },
  grid: {
    backgroundColor: "#e2e8f0",
    paddingTop: theme.spacing(5)
  },
  buttonStyle: {
    borderRadius: "50px",
    padding: theme.spacing(2, 8)
  },
  title: {
    color: "#000000",
    fontWeight: "bolder",
    alignSelf: "flex-start",
    textAlign: "left"
  },
  pText: {
    color: "#000000"
  }
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Grid container spacing={3} className={classes.grid}>
        <Grid item md={6} xs={12}>
          <Container fixed className={classes.paper}>
            <Typography variant="h2" component="h4" className={classes.title}>
              This is just a header
            </Typography>
            <Typography className={classes.pText}>
              TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Link
              to="/reservations"
              style={{ color: "black", textDecorationLine: "none" }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.buttonStyle}
              >
                Book A Flight
              </Button>
            </Link>
          </Container>
        </Grid>
        <Grid item md={6} xs={12}>
          <Container fixed className={classes.paper}>
            <img src={require("../assets/girl.png")} height={"100%"} />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
