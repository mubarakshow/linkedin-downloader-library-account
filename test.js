const linkedInLearningDownloader = require("./downloader.js");

const securedParams = require("./params");

const downloader = linkedInLearningDownloader();
downloader.downloadCourses(securedParams);
