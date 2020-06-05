const { getAthlete } = require("./getAthlete/getAthlete");

const spoofData = {
  athleteId: 3170308,
  athleteCard: {
    name: "Sam MORAN",
    totalRuns: 60,
    recentRuns: [
      {
        event: "Southport parkrun",
        eventUrl: "https://www.parkrun.org.uk/southport/results",
        runDate: "14/03/2020",
        genderPosition: 7,
        overallPosition: 8,
        time: "19:19",
        ageGrade: "67.13%",
      },
      {
        event: "Southport parkrun",
        eventUrl: "https://www.parkrun.org.uk/southport/results",
        runDate: "15/02/2020",
        genderPosition: 11,
        overallPosition: 12,
        time: "19:29",
        ageGrade: "66.55%",
      },
      {
        event: "Southport parkrun",
        eventUrl: "https://www.parkrun.org.uk/southport/results",
        runDate: "01/02/2020",
        genderPosition: 14,
        overallPosition: 14,
        time: "19:42",
        ageGrade: "65.82%",
      },
      {
        event: "Oaklands parkrun",
        eventUrl: "https://www.parkrun.org.uk/oaklands/results",
        runDate: "25/01/2020",
        genderPosition: 18,
        overallPosition: 19,
        time: "20:25",
        ageGrade: "63.51%",
      },
      {
        event: "Southport parkrun",
        eventUrl: "https://www.parkrun.org.uk/southport/results",
        runDate: "18/01/2020",
        genderPosition: 14,
        overallPosition: 14,
        time: "19:48",
        ageGrade: "65.49%",
      },
      {
        event: "Southport parkrun",
        eventUrl: "https://www.parkrun.org.uk/southport/results",
        runDate: "04/01/2020",
        genderPosition: 178,
        overallPosition: 261,
        time: "31:21",
        ageGrade: "41.36%",
      },
      {
        event: "Ormskirk parkrun",
        eventUrl: "https://www.parkrun.org.uk/ormskirk/results",
        runDate: "01/01/2020",
        genderPosition: 30,
        overallPosition: 30,
        time: "20:34",
        ageGrade: "63.05%",
      },
      {
        event: "Netley Abbey parkrun",
        eventUrl: "https://www.parkrun.org.uk/netleyabbey/results",
        runDate: "28/12/2019",
        genderPosition: 107,
        overallPosition: 132,
        time: "27:20",
        ageGrade: "47.44%",
      },
      {
        event: "Southport parkrun",
        eventUrl: "https://www.parkrun.org.uk/southport/results",
        runDate: "25/12/2019",
        genderPosition: 23,
        overallPosition: 24,
        time: "20:00",
        ageGrade: "64.83%",
      },
      {
        event: "Kew Woods parkrun",
        eventUrl: "https://www.parkrun.org.uk/kewwoods/results",
        runDate: "21/12/2019",
        genderPosition: 3,
        overallPosition: 3,
        time: "21:24",
        ageGrade: "60.59%",
      },
    ],
    eventSummary: [
      {
        event: "Southport parkrun",
        eventUrl: "https://www.parkrun.org.uk/southport/results",
        count: 43,
        bestGenderPosition: 2,
        bestOverallPosition: 2,
        bestTime: "00:18:43",
      },
      {
        event: "Southampton parkrun",
        eventUrl: "https://www.parkrun.org.uk/southampton/results",
        count: 7,
        bestGenderPosition: 22,
        bestOverallPosition: 24,
        bestTime: "00:18:54",
      },
      {
        event: "Ormskirk parkrun",
        eventUrl: "https://www.parkrun.org.uk/ormskirk/results",
        count: 2,
        bestGenderPosition: 16,
        bestOverallPosition: 17,
        bestTime: "00:19:50",
      },
      {
        event: "Kew Woods parkrun",
        eventUrl: "https://www.parkrun.org.uk/kewwoods/results",
        count: 2,
        bestGenderPosition: 3,
        bestOverallPosition: 3,
        bestTime: "00:19:46",
      },
      {
        event: "Netley Abbey parkrun",
        eventUrl: "https://www.parkrun.org.uk/netleyabbey/results",
        count: 2,
        bestGenderPosition: 20,
        bestOverallPosition: 22,
        bestTime: "00:21:13",
      },
      {
        event: "Hasenheide parkrun",
        eventUrl: "https://www.parkrun.com.de/hasenheide/results",
        count: 1,
        bestGenderPosition: 366,
        bestOverallPosition: 544,
        bestTime: "00:32:12",
      },
      {
        event: "Winchester parkrun",
        eventUrl: "https://www.parkrun.org.uk/winchester/results",
        count: 1,
        bestGenderPosition: 209,
        bestOverallPosition: 327,
        bestTime: "00:31:49",
      },
      {
        event: "Cardiff parkrun",
        eventUrl: "https://www.parkrun.org.uk/cardiff/results",
        count: 1,
        bestGenderPosition: 72,
        bestOverallPosition: 77,
        bestTime: "00:20:11",
      },
      {
        event: "Oaklands parkrun",
        eventUrl: "https://www.parkrun.org.uk/oaklands/results",
        count: 1,
        bestGenderPosition: 18,
        bestOverallPosition: 19,
        bestTime: "00:20:25",
      },
    ],
    volunteerSummary: [
      { year: "2020", role: "Barcode Scanning", count: 1 },
      { year: "2020", role: "Marshal", count: 2 },
      { year: "2019", role: "Barcode Scanning", count: 2 },
      { year: "2019", role: "Marshal", count: 5 },
      { year: "2019", role: "VI Guide", count: 2 },
    ],
  },
};

const myFunc = async (athleteId) => {
  try {
    const athlete = await getAthlete(athleteId);
    // console.log(JSON.stringify(athlete));
    console.log(spoofData);
    return { athlete };
  } catch (e) {
    console.log(e);
  }
};

// myFunc(3170308);
module.exports = { myFunc };
