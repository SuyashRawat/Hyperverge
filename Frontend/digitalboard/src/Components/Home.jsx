import React from "react";
import NewsFeed from "./NewsFeed";
import GoogleSlides from "./GoogleSlides";
import PomodoroTimer from "./PomodoroTimer";
import AppLinks from "./AppLinks";
import GoogleCalendar from "./Calendar";
import SpotifyAuth from "./SpotifyAuth";
import HealthTracker from "./HealthTracker";
import ToDoList from "./ToDo";
import GoogleMeet from "./Meet";

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
    height:'30% !important'
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
    height:'100%',
    padding: "0",
    // margin: "0",
  },
  newsFeed: {

    width: "40%",
    marginLeft: "5%",
    maxHeight: "100%", // Ensure it takes full height of parent
    // overflow: "scroll", // Use 'auto' instead of 'scroll' for better behavior
  },
  healthTracker: {
    width: "40%",
    height: "100%", // Ensure it takes full height of parent
    overflow: "scroll", // Use 'auto' instead of 'scroll' for better behavior
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
          <ToDoList />
          
          </div>
          <div style={styles.appLinks}>
          <HealthTracker />
           
          </div>
          <div style={styles.spotifyAuth}>
            <SpotifyAuth />
          </div>
          {/* <div>
            <GoogleMeet />
          </div> */}
        </div>
        <div>
          <hr />
        </div>
        <div style={styles.bottomRow}>
          <div style={{...styles.newsFeed}}>
          <AppLinks />
          </div>
          <div  style={styles.healthTracker}>
          <PomodoroTimer />
          </div>
          <div  style={styles.toDoList}>
            <NewsFeed />
          </div>
        </div>
        <div style={styles.bottomRow}>
          <div>
          <GoogleCalendar />
          </div>
          <div>
          <GoogleSlides embedUrl="https://docs.google.com/presentation/d/e/2PACX-1vSHU5lCgMJ3Akb8ovraVAAX4v31zv9WtbDghTsP2Om2iLCHxj4hxwq0oGrIZ4CtgQgUcn7Dbetzxu6l/embed?start=false&loop=false&delayms=3000"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
