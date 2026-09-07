import { exec } from 'child_process';

export class JMeterCommons {

    //Common method to run JMeter test plan from command line
    private executeCLICommand(command: string): Promise<string> {

        return new Promise((resolve, reject) => {

            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error executing command: ${error.message}`);
                } else {
                    resolve("Command Line executed Successfully");
                }
            });
        });
    }

    //Common method to run JMeter Test Plan

    async runJmeterTestPlan (jmxFile : string) : Promise<void>{
        
        //Update the relative path from the project folder to get Jmeter Properties and JMK file

        const projectRoot = process.cwd(); //Get the current working directory (project root) 
        const jmeterBasePath = `${projectRoot}/tests/load/jmeter`;
        const jmeterToolPath = `${projectRoot}/tests/load/jmeter/bin/jmeter.bat`;
        const jmeterTestPlan = `${projectRoot}/tests/load/jmeter/testplan/${jmxFile}`;
        const timestamp = new Date().getDate().toString();
        const resultspath = `${projectRoot}/tests/load/jmeter/results/TestResult_${timestamp}.csv`;
        const reportspath = `${projectRoot}/tests/load/jmeter/report-output`;

    //Run the Jmeter test plan and generate the csv test results
    const commandToRunJmeterFile = `"${jmeterToolPath}" -n -t "${jmeterTestPlan}" -l "${resultspath}"`;
    await this.executeCLICommand (commandToRunJmeterFile);

    //Generates html report from csv results
    const commandToGenerateReport = `"${jmeterToolPath}" -g "${resultspath}" -o "${reportspath}"`;
    await this.executeCLICommand (commandToGenerateReport);

    }



}