import * as firebase from 'firebase';
import { Constants, FileSystem, Asset, SQLite } from 'expo';

var db;
const firebaseConfig = {
    apiKey: "AIzaSyDTia3yj10er3Q8x1J4E8M4bqntshXEPB8",
    authDomain: "facts-app-9773b.firebaseapp.com",
    databaseURL: "https://facts-app-9773b.firebaseio.com",
    projectId: "facts-app-9773b",
    storageBucket: "facts-app-9773b.appspot.com"
};
firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();

errorCB = (err) => {
    console.log("SQL Error: " + err);
},
  
successCB = () => {
    console.log("SQL executed fine");
},
  
openCB = () => {
    console.log("Database OPENED");
},

OpenConnection = async (database) => {
    const sqliteDirectory = `${FileSystem.documentDirectory}SQLite`;

    // First, ensure that the SQLite directory is indeed a directory
    // For that we will first get information about the filesystem node
    // and handle non-existent scenario.
    const { exists, isDirectory } = await FileSystem.getInfoAsync(
      sqliteDirectory
    );
    if (!exists) {
      await FileSystem.makeDirectoryAsync(sqliteDirectory);
    } else if (!isDirectory) {
      throw new Error('SQLite dir is not a directory');
    }

    const pathToDownloadTo = `${sqliteDirectory}/factsDB.sqlite`;
    const uriToDownload = 'https://drive.google.com/open?id=1cLwJC7tFl54JYCl6fvNEvmFbbtP94e_1';
    console.log(`Will download ${uriToDownload} to ${pathToDownloadTo}`);

    // Let's download the file! We could have used something like
    // https://github.com/expo/native-component-list/blob/3f03acb7e11a1b0cc0c33036743465aaae5c2cf1/screens/FileSystemScreen.js#L27-L44
    // i. e. some progress indicator, but hey, that's just a demo!
    await FileSystem.downloadAsync(uriToDownload, pathToDownloadTo);
    db = SQLite.openDatabase('factsDB.sqlite');

    /*
    console.log('Opening a db connection');
    await Expo.FileSystem.downloadAsync(
        'https://drive.google.com/open?id=1cLwJC7tFl54JYCl6fvNEvmFbbtP94e_1',
        `${Expo.FileSystem.documentDirectory}SQLite/factsDB.db`,
    );

    db = SQLite.openDatabase('factsDB.db', );
    */
    db.transaction(
        tx => {
            tx.executeSql('SELECT fact_no FROM facts;', [], (tx, results) => {
                    console.log(JSON.stringify(results, null, 2))
                }
            );
        },
    );
}

GetAllRows = () => {
    console.log('Getting all rows.');
    db.transaction(
        tx => {
            tx.executeSql('SELECT fact_no FROM facts;', [], (tx, results) => {
                    console.log(JSON.stringify(results, null, 2))
                }
            );
        },
    );
}

GetAllRowsFromFirebase = () => {
    console.log('Getting data from Firebase!');
    var queryRef = firebaseDB.ref('/facts').orderByChild('fact_no').endAt("3");
    queryRef.once('value').then(function(facts) {
        console.log(facts.val()[0]);
    });
}

export {
    OpenConnection,
    GetAllRows,
    GetAllRowsFromFirebase
}


//////////////////////////////////////////////////////////////

var mydb;
downloadDatabase = async () => {
    const sqliteDirectory = `${FileSystem.documentDirectory}SQLite`;

    // First, ensure that the SQLite directory is indeed a directory
    // For that we will first get information about the filesystem node
    // and handle non-existent scenario.
    const { exists, isDirectory } = await FileSystem.getInfoAsync(
      sqliteDirectory
    );
    if (!exists) {
      await FileSystem.makeDirectoryAsync(sqliteDirectory);
    } else if (!isDirectory) {
      throw new Error('SQLite dir is not a directory');
    }

    const pathToDownloadTo = `${sqliteDirectory}/factsDB.sqlite`;
    // const uriToDownload = Asset.fromModule(require('./factsDB.db')).uri;
    const uriToDownload = 'https://drive.google.com/open?id=1cLwJC7tFl54JYCl6fvNEvmFbbtP94e_1';
    console.log(`Will download ${uriToDownload} to ${pathToDownloadTo}`);

    // Let's download the file! We could have used something like
    // https://github.com/expo/native-component-list/blob/3f03acb7e11a1b0cc0c33036743465aaae5c2cf1/screens/FileSystemScreen.js#L27-L44
    // i. e. some progress indicator, but hey, that's just a demo!
    await FileSystem.downloadAsync(uriToDownload, pathToDownloadTo);
    mydb = SQLite.openDatabase('factsDB.sqlite');
    // Once we've opened the database and saved the instance to `this`, we can enable the open button.
    mydb.transaction(
        tx => {
          tx.executeSql(
            `select * from facts;'`,
            //   `SELECT * FROM states LIMIT 5`,
            [],
            (_, { rows }) => console.log(JSON.stringify(rows)),
            (txObj, error) => alert(error)
          );
        },
        error => console.log('something went wrong:' + error),
        () => console.log('db transaction is a success')
      );
};

loadDB = () => {
    console.log('about to open db');
    mydb.transaction(
      tx => {
        tx.executeSql(
          `select * from facts;'`,
          //   `SELECT * FROM states LIMIT 5`,
          [],
          (_, { rows }) => console.log(JSON.stringify(rows)),
          (txObj, error) => alert(error)
        );
      },
      error => console.log('something went wrong:' + error),
      () => console.log('db transaction is a success')
    );
};