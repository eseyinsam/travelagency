import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import "./css/react-tabs.css";
import Header from "../components/Header";
import { Grid, TextField, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    backgroundColor: "#e2e8f0"
    // backgroundColor: "red"
  },
  tabContainer: {
    padding: theme.spacing(10, 5, 0, 5)
  },
  tabs: {
    backgroundColor: "rgba(0,0,0,0.8)"
  },
  tabContent: {
    // backgroundColor: red[100],
    padding: theme.spacing(5, 3)
  },
  submitContaier: {
    paddingTop: theme.spacing(3)
  }
}));

const TabbedComponent = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <Tabs className={classes.tabs}>
      <TabList>
        <Tab>Travel</Tab>
        <Tab>Hotel Reservation</Tab>
      </TabList>

      <TabPanel>
        <form noValidate autoComplete="off" style={{ width: "100%" }}>
          <Grid container className={classes.tabContent}>
            <TextField
              id="standard-full-width"
              fullWidth
              style={{ width: "100%", backgroundColor: "#ffffff" }}
              label="GOING TO"
              placeholder="Destination, hotel name"
              variant="outlined"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-between">
                <KeyboardDatePicker
                  disableToolbar
                  style={{
                    width: "30vw",
                    backgroundColor: "#ffffff"
                  }}
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="CHECK IN"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardDatePicker
                  style={{ width: "30vw" }}
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="CHECK OUT"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid container className={classes.submitContaier}>
              <Button variant="contained" color="primary" size="large">
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </form>
      </TabPanel>
      <TabPanel>
        <form noValidate autoComplete="off" style={{ width: "100%" }}>
          <Grid container className={classes.tabContent}>
            <TextField
              id="standard-full-width"
              fullWidth
              style={{ width: "100%" }}
              label="GOING TO"
              placeholder="Destination, hotel name"
              variant="outlined"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-between">
                <KeyboardDatePicker
                  disableToolbar
                  style={{ width: "30vw" }}
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="CHECK IN"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardDatePicker
                  style={{ width: "30vw" }}
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="CHECK OUT"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid container>
              <Button variant="contained" color="secondary" size="large">
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </form>
      </TabPanel>
    </Tabs>
  );
};

export default function Reservations() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.tabContainer}>
        <TabbedComponent />
      </div>
    </div>
  );
}
