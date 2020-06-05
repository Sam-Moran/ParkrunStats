import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { myFunc } from "./Functions/random";
class App extends Component {
  state = {
    athleteId: 3170308,
    loading: true,
    athlete: null,
  };

  render() {
    const { athlete, loading } = this.state;
    if (loading) {
      return <div>Loading</div>;
    } else
      return (
        <div className="App">
          <Header athleteName={athlete.athleteCard.name}></Header>
          <h1>
            {athlete.athleteCard.name} - {athlete.athleteCard.totalRuns} runs
          </h1>
          {athlete.athleteCard.recentRuns.map((run) => {
            const {
              event,
              eventUrl,
              runDate,
              genderPosition,
              overallPosition,
              time,
              ageGrade,
            } = run;

            return (
              <ul>
                <li>{event}</li>
                <li>{runDate}</li>
                <li>{time}</li>
              </ul>
            );
          })}
        </div>
      );
  }
  componentDidMount() {
    this.getProfile();
  }
  getProfile = () => {
    myFunc(4847087).then(({ athlete }) => {
      console.log(athlete);
      this.setState({ athlete, loading: false });
    });
  };
}

export default App;
