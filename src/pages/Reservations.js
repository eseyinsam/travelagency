import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Header from "../components/Header";
import { MenuItem, Grid, TextField, Button } from "@material-ui/core";
import BG from "../assets/reservation-bg.jpg";
import airports from "../airports.json";

const locations = [
  {
    label: "Abuja",
    value: "abj"
  },
  {
    label: "Dubai",
    value: "db"
  },
  {
    label: "Ghana",
    value: "gh"
  },
  {
    label: "Japan",
    value: "jpn"
  },
  {
    label: "Australia",
    value: "aus"
  }
];

const hotels = [
  {
    label: "Ritz Continental Hotel, Abuja",
    value: "rtz"
  },
  {
    label: "Transcorp Hilton Hotels and suites",
    value: "tcp"
  },
  {
    label: "Nicon Luxury Hotels, Abuja, Nigeria",
    value: "ncn"
  },
  {
    label: "Eko Hotels and Suites, Lagos, Nigeria",
    value: "eko"
  },
  {
    label: "Three crowns hotel, Mumbai, India",
    value: "cwn"
  }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      // container
      style={{ backgroundColor: "#febb02" }}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Grid>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${BG})`
  },
  tabContainer: {
    padding: theme.spacing(10, 25),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5, 5)
    }
  },
  buttonContainer: {
    padding: theme.spacing(3, 0)
  }
}));

export default function Reservations() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [currency, setLocationStart] = React.useState("abj");
  const [destination, setDestination] = React.useState("abj");
  const [dateStart, setStartDate] = React.useState(new Date());
  const [dateEnd, setEndDate] = React.useState(new Date());
  const [hotelStartDate, sethotelStartDate] = React.useState(new Date());
  const [hotelEndDate, sethotelEndDate] = React.useState(new Date());
  const [hotelname, setHotel] = React.useState("rtz");
  const [redirectToReferrer, setRedirect] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLocationStart = event => {
    setLocationStart(event.target.value);
  };

  const handleDateStart = date => {
    setStartDate(date);
  };

  const handleDateEnd = date => {
    setEndDate(date);
  };

  const submitTravelForm = () => {
    // alert("submitted");
    // return <Redirect to="/" />;
    setRedirect(true);
  };

  React.useEffect(() => {
    fetch("https://hotels-apis.herokuapp.com/api/v2", {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log(response);
        // handle response data
      })
      .catch(err => {
        console.log("err");
        // handle errors
      });
  }, []);
  if (redirectToReferrer === true) {
    return <Redirect to="/details" />;
  }
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.tabContainer}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#febb02" }}
          elevation={0}
        >
          <Tabs
            style={{ color: "#000000" }}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Book Flight" {...a11yProps(0)} />
            <Tab label="Reserve Hotel" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Grid
            container
            justify="space-between"
            // style={{ backgroundColor: "red" }}
          >
            <TextField
              id="filled-select-currency"
              variant="filled"
              select
              fullWidth
              label=""
              placeholder="from where"
              value={currency}
              onChange={handleLocationStart}
              helperText="Please select your location"
            >
              {locations.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="filled-select-currency"
              variant="filled"
              select
              label=""
              fullWidth
              placeholder="from where"
              value={destination}
              onChange={evt => setDestination(evt.target.value)}
              helperText="Please select your Destination"
            >
              {locations.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                fullWidth
                label=""
                helperText="Please select your Depature Date"
                value={dateStart}
                onChange={handleDateStart}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              id="standard-number"
              margin="normal"
              label="Number of Person(s)"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#558fe6" }}
              size="large"
              onClick={submitTravelForm}
            >
              Submit
            </Button>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container>
            <TextField
              id="filled-select-currency"
              variant="filled"
              fullWidth
              select
              label="GOING TO"
              value={hotelname}
              onChange={evt => setHotel(evt.target.value)}
              placeholder="Hotel name"
            >
              {hotels.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid container justify="space-between">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="ARRIVAL DATE"
                value={hotelStartDate}
                onChange={date => sethotelStartDate(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="DEPATURE DATE"
                value={hotelEndDate}
                onChange={date => sethotelEndDate(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              id="standard-number"
              margin="normal"
              label="Number of Person(s)"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#558fe6" }}
              size="large"
            >
              Submit
            </Button>
          </Grid>
        </TabPanel>
      </div>
    </div>
  );
}
