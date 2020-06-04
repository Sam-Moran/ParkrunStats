const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://www.parkrun.org.uk/results/athleteresultshistory/?athleteNumber=3170308";

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const statsTable = $("#results > tbody > tr > td").slice(0, 60);
    const mostRecent = [];

    // There are minimum of two results tables on an athletes page, with a third if athlete has also volunteered.

    //10 most recent runs is the first
    const runTable = $("#results").slice(0, 1);
    //List of events entered is second, length is dependant on how many you've done
    const eventTable = $("#results").slice(1, 2);
    //list of times volunteered if exists
    const volunteerTable = $("#results").slice(2, 3);

    //   console.log(
    //     JSON.stringify(
    //       $(runTable)
    //         // .find("a")
    //         .text()
    //     )
    //   );

    //   console.log(
    //     JSON.stringify(
    //       $(eventTable)
    //         // .find("a")
    //         .text()
    //     )
    //   );

    //   console.log(
    //     JSON.stringify(
    //       $(volunteerTable)
    //         // .find("a")
    //         .text()
    //     )
    //   );

    runTable.each(function() {
      const eventName = $(this)
        .find("td:nth-child(1)")
        .text();
      const eventDate = $(this)
        .find("td:nth-child(2)")
        .text();
      const genderPosition = $(this)
        .find("td:nth-child(1)")
        .text();
      const overallPosition = $(this)
        .find("td:nth-child(1)")
        .text();
      const finishTime = $(this)
        .find("td:nth-child(1)")
        .text();
      const ageGrading = $(this)
        .find("td:nth-child(1)")
        .text();

      mostRecent.push({
        eventName,
        eventDate,
        genderPosition,
        overallPosition,
        finishTime,
        ageGrading
      });
    });
    console.log(mostRecent);
  })
  .catch(console.error);
