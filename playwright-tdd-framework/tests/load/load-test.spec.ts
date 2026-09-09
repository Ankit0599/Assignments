import {test} from '@playwright/test';

import { JMeterCommons } from '../../commons/jmeter/JMeterCommons.ts';

test.describe('Load tests', ()=> {

    let jmeter : JMeterCommons;

    test.beforeEach(async() =>{
        jmeter = new JMeterCommons();
    })

    //Run Jmeter Test Plan
    test ('Validate the API Load Test', async()=> {
        test.setTimeout(10 * 60 * 1000);
        await jmeter.runJmeterTestPlan("LoadTest.jmx");
    })

});