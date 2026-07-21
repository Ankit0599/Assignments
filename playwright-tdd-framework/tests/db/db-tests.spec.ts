import {test} from '@playwright/test';
import { DBCommons } from '../../commons/db/db-commons';

test.describe('DB Test Automation', ()=>{

let db : DBCommons;

test.beforeAll(() => {
    db = new DBCommons();
});

//Test case : Get top 10 horror movies from the DVD rental database whose movie name contains "devil", arranged in assending order based on title
test ('Validate the database data', async () => {
    const query = `SELECT FILM.TITLE AS MOVIE_NAME, CATEGORY.NAME AS MOVIE_CATEGORY, LANGUAGE.NAME AS MOVIE_LANGUAGE FROM CATEGORY 
JOIN 
FILM_CATEGORY ON
CATEGORY.CATEGORY_ID = FILM_CATEGORY.CATEGORY_ID 
JOIN 
FILM ON 
FILM_CATEGORY.FILM_ID = FILM.FILM_ID 
JOIN 
LANGUAGE ON
FILM.LANGUAGE_ID = LANGUAGE.LANGUAGE_ID 
WHERE
CATEGORY.NAME = 'Horror'
AND LANGUAGE.NAME = 'English'
AND FILM.TITLE LIKE '%Devil'
ORDER BY FILM.TITLE ASC
LIMIT 10`

const data = await db.getData(query);

console.log(data);

console.log(data[1].movie_name);

});

});