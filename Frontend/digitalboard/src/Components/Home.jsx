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
import '../styles/Home.css'
const styles = {
  container: {
    width: "100%",
    padding: "0",
    margin: "0",    
    background: 'linear-gradient(to bottom left, black, white)',
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    padding: "0",
    margin: "0",
    height:'40%'
  },
  pomodoroTimer: {
    width: "20%",
    marginLeft: "5%",
  },
  appLinks: {
    width: "40%",
  },
  spotifyAuth: {
    width: "33%",
    height:'100%'
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

    width: "30%",
    marginLeft: "5%",
    marginRight: "3%",
    maxHeight: "100%", // Ensure it takes full height of parent
    // overflow: "scroll", // Use 'auto' instead of 'scroll' for better behavior
  },
  healthTracker: {
    width: "33%",
    height: "100%", // Ensure it takes full height of parent
    // overflow: "scroll", // Use 'auto' instead of 'scroll' for better behavior
  },
  toDoList: {
    width: "33%",
    height:'100%'
    // marginRight: "5%",
  },
};

const Home = () => {
  return (
    <>

      <div style={styles.container} 
      // width: '100%',
      // height: '100vh' 
    >
        <div style={styles.topRow}>
          <div className="toDoList" style={styles.toDoList}>
          <ToDoList />
          </div>
          <div className="healthTracker" style={styles.healthTracker}>
          <HealthTracker />           
          </div>
          <div  style={styles.newsFeed}>
            {/* <NewsFeed /> */}
          </div>
          
        </div>
        <div>
          <hr />
        </div>
        <div style={styles.bottomRow}>
          
        <div  style={styles.pomodoroTimer}>
          <PomodoroTimer />
          </div>
          <div style={{...styles.appLinks}}>
          <AppLinks />
          </div>
          <div style={styles.spotifyAuth}>
            <SpotifyAuth />
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
