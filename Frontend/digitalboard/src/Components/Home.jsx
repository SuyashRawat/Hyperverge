import React from "react";
import NewsFeed from "./NewsFeed";
import GoogleSlides from "./GoogleSlides";
import PomodoroTimer from "./PomodoroTimer";
import AppLinks from "./AppLinks";
import GoogleCalendar from "./Calendar";
import SpotifyAuth from "./SpotifyAuth";
import HealthTracker from "./HealthTracker";
import ToDoList from "./ToDo";

const styles = {
  container: {
    width: "100%",
    padding: "0",
    margin: "0",
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    padding: "0",
    margin: "0",
  },
  pomodoroTimer: {
    width: "20%",
    margin: "0",
  },
  appLinks: {
    width: "40%",
  },
  spotifyAuth: {
    width: "20%",
  },
  bottomRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    padding: "0",
    // margin: "0",
  },
  newsFeed: {

    width: "40%",
    marginLeft: "5%",
  },
  healthTracker: {
    width: "40%",
  },
  toDoList: {
    width: "40%",
    marginRight: "5%",
  },
};

const Home = () => {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.topRow}>
          <div style={styles.pomodoroTimer}>
            {/* <PomodoroTimer /> */}
          </div>
          <div style={styles.appLinks}>
            {/* <AppLinks /> */}
          </div>
          <div style={styles.spotifyAuth}>
            <SpotifyAuth />
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div style={styles.bottomRow}>
          <div style={{...styles.newsFeed}}>
            {/* <HealthTracker /> */}
          </div>
          <div  style={styles.healthTracker}>
            {/* <ToDoList /> */}
          </div>
          <div  style={styles.toDoList}>
            {/* <NewsFeed /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
