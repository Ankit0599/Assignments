import {Client} from "pg";
import Config from '../../config/config.json';

export class DBcommons {

    async getData (query : string) : Promise<Array<Record<string,string>>>{

        //Create a new client instance configuration to connect with the database.
        const dbConfig = new Client({
            host : Config.db.host,
            port : Config.db.port,
            user : Config.db.user,
            password : Config.db.password,
            database : Config.db.database
        })

        //Connect to the database
        await dbConfig.connect();

        //Execute the query and get the data
        const data = await dbConfig.query(query);

        //Close the connection
        await dbConfig.end();

        //return the data in the form of array objects
        return data.rows;
    }
}