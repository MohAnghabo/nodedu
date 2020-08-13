const {
    spawn
} = require("child_process");

function update() {
    const updateCMD = spawn("sudo", ["apt-get", "update", "-y"]);

    console.log("update ..")

    updateCMD.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    updateCMD.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });

    updateCMD.on("close", code => {
        console.log(`Update Process Exited With Code ${code}`);
    });
}

function upgrade() {
    const upgradeCMD = spawn("sudo", ["apt-get", "upgrade", "-y"]);

    console.log("upgrade .. ")

    upgradeCMD.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    // updateCMD.stderr.on("data", data => {
    //     console.log(`stderr: ${data}`);
    // });

    upgradeCMD.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });

    upgradeCMD.on("close", code => {
        console.log(`upgrade process exited with code ${code}`);
    });

}

function distUpgrade() {
    const disUpgradeCMD = spawn("sudo", ["apt-get", "dist-upgrade", "-y"]);

    console.log("distro update starting .. ")

    disUpgradeCMD.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    // updateCMD.stderr.on("data", data => {
    //     console.log(`stderr: ${data}`);
    // });

    disUpgradeCMD.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });

    disUpgradeCMD.on("close", code => {
        console.log(`distro upgrade process exited with code ${code}`);
    });
}

function autoremove() {
    const autoremoveCMD = spawn("sudo", ["apt-get", "autoremove", "-y"]);

    console.log("autoremove start .. ")

    autoremoveCMD.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    // updateCMD.stderr.on("data", data => {
    //     console.log(`stderr: ${data}`);
    // });

    autoremoveCMD.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });

    autoremoveCMD.on("close", code => {
        console.log(`autoremove process exited with code ${code}`);
    });
}

function autoclean() {
    const autocleanCMD = spawn("sudo", ["apt-get", "autoclean", "-y"]);

    console.log("autoclean start .. ")

    autocleanCMD.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    // updateCMD.stderr.on("data", data => {
    //     console.log(`stderr: ${data}`);
    // });

    autocleanCMD.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });

    autocleanCMD.on("close", code => {
        console.log(`autoclean process exited with code ${code}`);
    });
};

function run() {
    update();
    upgrade();
    distUpgrade();
    autoremove();
    autoclean();
}