import { exec } from 'child_process';

export class JMeterCommons {

    //Common method to run JMeter test plan from command line
    private executeCLICommand(command: string): Promise<string> {

        return new Promise((resolve, reject) => {

            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error executing command: ${error.message}`);
                } else if (stderr) {
                    reject(`Error in command output: ${stderr}`);
                } else {
                    resolve(stdout);
                }
            });
        });
    }

}