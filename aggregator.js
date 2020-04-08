const fs = require('fs');

const safari = JSON.parse(fs.readFileSync('results/safari.json', 'utf8'));
const chrome = JSON.parse(fs.readFileSync('results/chrome.json', 'utf8'));
const edgeChromium = JSON.parse(fs.readFileSync('results/edge-chromium.json', 'utf8'));
const concatenatedReport = [].concat(safari, chrome, edgeChromium);

let aggregatedResult = {
    "passed": 0,
    "total": 0,
    "failed": 0,
    "skipped": 0,
    "name": "Feature 1",
    "tests": []
};

concatenatedReport.forEach((report) => {
    aggregatedResult["passed"] += report["passed"];
    aggregatedResult["total"] += report["total"];
    aggregatedResult["failed"] += (report["total"] - report["passed"] - report["skipped"]);
    aggregatedResult["skipped"] += report["skipped"];
    report["fixtures"].filter((fixture) => fixture["meta"]["feature"] === aggregatedResult["name"])
        .forEach((filteredFixture) => filteredFixture["tests"]
            .forEach((test) => {
                test["userAgent"] = report["userAgents"][0];
                aggregatedResult["tests"].push(test);
            }));
});

fs.writeFileSync('./aggregated-results.json', JSON.stringify(aggregatedResult));
