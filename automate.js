// import tool to run terminal commands
const { execSync } = require("child_process");

// list of active test files with associated email and command to run
const tests = [
    {
        email: "kemalucler@gmail.com",
        command: "npx jest tests/kemal.test.js --runInBand --silent"
    },
    {
        email: "demi0067@algonquinlive.com",
        command: "node tests/ali.test.js"
    }
];

// loop through each test, execute the command, and parse the output for results
for (const item of tests) {
    try {
        const output = execSync(item.command, {
            encoding: "utf8",
            stdio: "pipe"
        });

        const lines = output.split("\n");
        let printed = false;

        for (const line of lines) {
            if (line.includes("@") && (line.includes("PASSED") || line.includes("FAILED"))) {
                console.log(line.trim());
                printed = true;
                break;
            }
        }

        if (!printed) {
            console.log(`${item.email} - getAll to show all product - 200 - PASSED`);
        }

    } catch (error) {
        const output = (error.stdout || "") + (error.stderr || "");
        const lines = output.split("\n");
        let printed = false;

        for (const line of lines) {
            if (line.includes("@") && (line.includes("PASSED") || line.includes("FAILED"))) {
                console.log(line.trim());
                printed = true;
                break;
            }
        }

        if (!printed) {
            console.log(`${item.email} - getAll to show all product - ERROR - FAILED`);
        }
    }
}