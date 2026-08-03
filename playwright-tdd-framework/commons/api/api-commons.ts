import { expect, request } from '@playwright/test';
import data from '../../testdata/api/data.json';
import config from '../../config/config.json';

export class ApiCommons {

    private requestcontext : any;
    private response : any;

    // add api request context (adding baseurl, Headers, Authorization details, etc. to the request context)
    async init(){
        this.requestcontext = await request.newContext({
            baseURL : config.api.baseurl,
            extraHTTPHeaders : {
                Authorization : config.api.token
            }
        });
    }

    //common method to send request and get response
    async getresponse(requestType : string, endpoint : string, requestBody? : any){
        switch (requestType.toLowerCase()) {
            case "get":
                this.response = await this.requestcontext.get(endpoint);
                break;
            case "post":
                this.response = await this.requestcontext.post(endpoint, { data: requestBody });
                break;
            case "patch":
                this.response = await this.requestcontext.patch(endpoint, { data: requestBody });
                break;
            case "delete":
                this.response = await this.requestcontext.delete(endpoint);
                break;
            case "put":
                this.response = await this.requestcontext.put(endpoint, { data: requestBody });
                break;
            default:
                throw new Error(`Unsupported Request Type : ${requestType}`);
}
 console.log (await this.response.text());

    }


    //Method to validate status code
    async validateStatusCode (expectedStatusCode : number) {
        const actualStatusCode = this.response.status();
        console.log(`Actual Status Code : ${actualStatusCode}, Expected Status Code : ${expectedStatusCode}`);
        expect(actualStatusCode).toBe(expectedStatusCode);
    };

    //Method to validate status message
    async validateStatusMessage (expectedStatusMessage : string){
        const actualStatusMessage = this.response.statusText();
        console.log(`Actual Status Message : ${actualStatusMessage}, Expected Status Message : ${expectedStatusMessage}`);
        expect(actualStatusMessage).toBe(expectedStatusMessage);
    }

    //Method to validate response body
    async validateResponseBody (key : string, expectedValue : any){
        const actualResponseBody = await this.response.json();
        const actualValue = actualResponseBody[key];
        expect(actualResponseBody[key]).toBe(expectedValue);
    }

    //Method to validate response headers
    async validateResponseHeader (key : string, expectedHeaderValue : string){
        const actualResponseHeader = this.response.headers();
        const actualHeaderValue = actualResponseHeader[key];
        expect(actualHeaderValue).toBe(expectedHeaderValue);
    }

    //Method to validate response schema
    async validateResponseSchema (key : string, expectedType : string){
        const actualResponseBody = await this.response.json();
        const actualValue = actualResponseBody[key];
        expect(typeof actualValue).toBe(expectedType);
    }

    //Method to verify reponse cookies
    async validateResponseCookies (CookieName : string, expectedCookieValue : string){
        const cookies = await this.response.cookies();
        const CookieValue = cookies[CookieName] ;
        expect(CookieValue).toBe(expectedCookieValue);
    }

    //Method to store data from copied responses
    async storeDataFromResponse (ObjectName : any, Key : string){
        const actualResponseBody = await this.response.json();
        const valuetoStore = actualResponseBody[Key];
        data[ObjectName][Key] = valuetoStore;

    }

}