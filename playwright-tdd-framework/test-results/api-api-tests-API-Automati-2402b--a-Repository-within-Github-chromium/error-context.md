# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\api-tests.spec.ts >> API Automation >> Create a Repository within Github
- Location: tests\api\api-tests.spec.ts:27:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 422
```

# Test source

```ts
  1  | import { expect, request } from '@playwright/test';
  2  | import data from '../../testdata/api/data.json';
  3  | import config from '../../config/config.json';
  4  | 
  5  | export class ApiCommons {
  6  | 
  7  |     private requestcontext : any;
  8  |     private response : any;
  9  | 
  10 |     // add api request context (adding baseurl, Headers, Authorization details, etc. to the request context)
  11 |     async init(){
  12 |         this.requestcontext = await request.newContext({
  13 |             baseURL : config.api.baseurl,
  14 |             extraHTTPHeaders : {
  15 |                 Authorization : config.api.token
  16 |             }
  17 |         });
  18 |     }
  19 | 
  20 |     //common method to send request and get response
  21 |     async getresponse(requestType : string, endpoint : string, requestBody? : any){
  22 |         switch (requestType.toLowerCase()) {
  23 |             case "get":
  24 |                 this.response = await this.requestcontext.get(endpoint);
  25 |                 break;
  26 |             case "post":
  27 |                 this.response = await this.requestcontext.post(endpoint, { data: requestBody });
  28 |                 break;
  29 |             case "patch":
  30 |                 this.response = await this.requestcontext.patch(endpoint, { data: requestBody });
  31 |                 break;
  32 |             case "delete":
  33 |                 this.response = await this.requestcontext.delete(endpoint);
  34 |                 break;
  35 |             case "put":
  36 |                 this.response = await this.requestcontext.put(endpoint, { data: requestBody });
  37 |                 break;
  38 |             default:
  39 |                 throw new Error(`Unsupported Request Type : ${requestType}`);
  40 | }
  41 |  console.log (await this.response.text());
  42 | 
  43 |     }
  44 | 
  45 | 
  46 |     //Method to validate status code
  47 |     async validateStatusCode (expectedStatusCode : number) {
  48 |         const actualStatusCode = this.response.status();
  49 |         console.log(`Actual Status Code : ${actualStatusCode}, Expected Status Code : ${expectedStatusCode}`);
> 50 |         expect(actualStatusCode).toBe(expectedStatusCode);
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  51 |     };
  52 | 
  53 |     //Method to validate status message
  54 |     async validateStatusMessage (expectedStatusMessage : string){
  55 |         const actualStatusMessage = this.response.statusText();
  56 |         console.log(`Actual Status Message : ${actualStatusMessage}, Expected Status Message : ${expectedStatusMessage}`);
  57 |         expect(actualStatusMessage).toBe(expectedStatusMessage);
  58 |     }
  59 | 
  60 |     //Method to validate response body
  61 |     async validateResponseBody (key : string, expectedValue : any){
  62 |         const actualResponseBody = await this.response.json();
  63 |         const actualValue = actualResponseBody[key];
  64 |         expect(actualResponseBody[key]).toBe(expectedValue);
  65 |     }
  66 | 
  67 |     //Method to validate response headers
  68 |     async validateResponseHeader (key : string, expectedHeaderValue : string){
  69 |         const actualResponseHeader = this.response.headers();
  70 |         const actualHeaderValue = actualResponseHeader[key];
  71 |         expect(actualHeaderValue).toBe(expectedHeaderValue);
  72 |     }
  73 | 
  74 |     //Method to validate response schema
  75 |     async validateResponseSchema (key : string, expectedType : string){
  76 |         const actualResponseBody = await this.response.json();
  77 |         const actualValue = actualResponseBody[key];
  78 |         expect(typeof actualValue).toBe(expectedType);
  79 |     }
  80 | 
  81 |     //Method to verify reponse cookies
  82 |     async validateResponseCookies (CookieName : string, expectedCookieValue : string){
  83 |         const cookies = await this.response.cookies();
  84 |         const CookieValue = cookies[CookieName] ;
  85 |         expect(CookieValue).toBe(expectedCookieValue);
  86 |     }
  87 | 
  88 |     //Method to store data from copied responses
  89 |     async storeDataFromResponse (ObjectName : any, Key : string){
  90 |         const actualResponseBody = await this.response.json();
  91 |         const valuetoStore = actualResponseBody[Key];
  92 |         data[ObjectName][Key] = valuetoStore;
  93 | 
  94 |     }
  95 | 
  96 | }
```