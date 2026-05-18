const axios = require("axios");
const log = require("../logger/logger");

async function fetchNotifications() {

    try {

        log("Fetching notifications from API");

        log("Using sample notifications");

        return [
            {
                Type: "Placement",
                Message: "Tesla Hiring",
                Timestamp: "2026-05-18 10:30:00"
            },
            {
                Type: "Result",
                Message: "Mid Sem Results",
                Timestamp: "2026-05-18 09:00:00"
            },
            {
                Type: "Event",
                Message: "Tech Fest",
                Timestamp: "2026-05-17 18:00:00"
            }
        ];

    } catch (error) {

        log(`API Error: ${error.message}`);

        return [];
    }
}

module.exports = fetchNotifications;