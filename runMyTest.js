// import child_process to run test
const { execSync } = require("child_process");

try {
    // run only Kemal test silently
    execSync("npx jest tests/kemal.test.js --runInBand --silent", {
        stdio: "pipe"
    });

    // required output
    console.log("kemalucler@gmail.com - getAll to show all product - 200 - PASSED");

} catch (error) {
    console.log("kemalucler@gmail.com - getAll to show all product - ERROR - FAILED");
}