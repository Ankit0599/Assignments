import {test} from '@playwright/test';
import {ApiCommons} from '../../commons/api/api-commons';
import config from '../../config/config.json';
import testdata from '../../testdata/api/data.json';

test.describe('API Automation', () => {

    let apiCommons : ApiCommons;
    let repoName : any;

    //prepare api request context before each and every api test case
    test.beforeEach(async()=> {
        apiCommons = new ApiCommons();
        await apiCommons.init();
    })

    //Test Case 1 : Request to create a duplicate repositroy with in github
    test('Create Duplicate Repository in gitHub', async () => {
        const data = testdata.duplicateRepo;
        await apiCommons.getresponse(data.requestType, data.endpoint, data.Body);
        await apiCommons.validateStatusCode(data.expectedStatusCode);
        await apiCommons.validateStatusMessage(data.expectedStatusMessage);
        await apiCommons.validateResponseBody('message', data.expectedErrorMessage);
    });

    //Test Case 2 : Request to create a repositroy with in github
    test('Create a Repository within Github', async() => {
        const data = testdata.validRepo;
        await apiCommons.getresponse(data.requestType, data.endpoint, data.Body);
        await apiCommons.validateStatusCode(data.expectedStatusCode);
        await apiCommons.validateStatusMessage(data.expectedStatusMessage);
        await apiCommons.validateResponseBody('name', data.Body.name);
        //storing the repository name created in the response to use it in the next test cases
        repoName = await apiCommons.storeDataFromResponse('validRepo', 'name');
        console.log(data);
    });


})