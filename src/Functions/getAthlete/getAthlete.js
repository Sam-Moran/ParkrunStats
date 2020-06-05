const axios = require("axios");
const cheerio = require("cheerio");

const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://www.parkrun.org.uk/results/athleteresultshistory",
});

const getAthlete = async (athleteId) => {
  try {
    const response = await instance.get(`/?athleteNumber=${athleteId}`);
    const html = response.data;
    const $ = cheerio.load(html);

    const header = $("#content h2").first().text().split("(");
    const name = header[0].trim();
    const totalRuns = parseInt(header[1].match(/\d+/));

    const statsTable = $("#results");

    const recentRuns = [];
    // eslint-disable-next-line no-unused-vars
    const recentRunTable = $(statsTable[0])
      .find("tbody > tr")
      .each(function (i, row) {
        const run = {
          event: $(row.children[0]).text(),
          eventUrl: $(row.children[0]).find("a:not(:empty)").attr("href"),
          runDate: $(row.children[1]).text(),
          genderPosition: parseInt($(row.children[2]).text()),
          overallPosition: parseInt($(row.children[3]).text()),
          time: $(row.children[4]).text(),
          ageGrade: $(row.children[5]).text(),
        };
        recentRuns.push(run);
      });

    const eventSummary = [];
    // eslint-disable-next-line no-unused-vars
    const eventTable = $(statsTable[1])
      .find("tbody > tr")
      .each(function (i, row) {
        const event = {
          event: $(row.children[0]).text(),
          eventUrl: $(row.children[0]).find("a:not(:empty)").attr("href"),
          count: parseInt($(row.children[1]).text()),
          bestGenderPosition: parseInt($(row.children[2]).text()),
          bestOverallPosition: parseInt($(row.children[3]).text()),
          bestTime: $(row.children[4]).text(),
        };
        eventSummary.push(event);
      });
    const volunteerSummary = [];
    // eslint-disable-next-line no-unused-vars
    const volunteerTable = $(statsTable[2])
      .find("tbody > tr")
      .each(function (i, row) {
        var event = {
          year: $(row.children[0]).text(),
          role: $(row.children[1]).text(),
          count: parseInt($(row.children[2]).text()),
        };
        volunteerSummary.push(event);
      });
    console.log({
      athleteId,
      athleteCard: {
        name,
        totalRuns,
        recentRuns,
        eventSummary,
        volunteerSummary,
      },
    });
    return {
      athleteId,
      athleteCard: {
        name,
        totalRuns,
        recentRuns,
        eventSummary,
        volunteerSummary,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getAthlete };
