import {test} from '@playwright/test';
import { DBcommons } from '../../commons/db/db-commons';

test.describe('DB Test Automation', ()=>{

let db : DBcommons;

test.beforeAll(()=>{
    db = new DBcommons();
});


})