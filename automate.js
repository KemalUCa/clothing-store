const { execSync } = require("child_process");

try {
    console.log("Running Kemal's test...\n");

    execSync("npm test", { stdio: "inherit" });

    console.log("\nKemal's test completed successfully.");
} catch (error) {
    console.log("\nKemal's test failed.");
}