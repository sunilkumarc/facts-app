import { SQLite } from 'expo';

var db;

errorCB = (err) => {
    console.log("SQL Error: " + err);
},
  
successCB = () => {
    console.log("SQL executed fine");
},
  
openCB = () => {
    console.log("Database OPENED");
},

OpenConnection = (database) => {
    dbPath = '/Users/sunilc/git/facts-app/db/' + database;
    db = SQLite.openDatabase({name: database, createFromLocation: 1});
    console.log('Opening a db connection');
    console.log(db);
}

GetAllRows = () => {
    console.log('Getting all rows.');
    db.transaction(
        tx => {
            tx.executeSql('select * from Facts.facts', [], (_, { rows }) => {
                    console.log("Query completed");
                    // console.log(JSON.stringify(rows))
                    // return rows;
                }
            );
        },
    (err)=> {
        console.log(err);
    },
    () => {

    });
}

export {
    OpenConnection,
    GetAllRows
}