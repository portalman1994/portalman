import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('comics.db');

export default class Database {

    //initialize db
    initDB() {
        return new Promise((resolve, reject) => {
            db.transaction(                
                function (tx) {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS comics (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, issue INT NOT NULL, desc TEXT NOT NULL, date INT NOT NULL, cover TEXT NOT NULL)');
                },
                function (error) {
                    reject(error.message);
                },
                function () {
                    resolve(true);
                    console.log('Created database OK');
                }
            );
        });
    }

    //close db
    closeDatabase(db) {
        if (db) {
            console.log('Closing Database...');
            db.close().then(status => {
                console.log('Database Closed...');
            }).catch(error => {
                this.errorCB(error);
            });
        } else {
            console.log('Database was not OPENED...');
        }
    }

    //fetch all comics from db
    fetchComics() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM comics',
                    [],
                    (_, result) => {
                        resolve(result);
                    },
                    (_, err) => {
                        reject(err);
                    }
                );
            });
        });
    }

    //get comic by id
    comicById(id) {

    }

    //add comic to db
    insertComic(title, issue, desc, date, cover) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO comics (title, issue, desc, date, cover) VALUES (?, ?, ?, ?, ?);`,
                    [title, issue, desc, date, cover],
                    (_, result) => {
                        resolve(result);
                    },
                    (_, err) => {
                        reject(err);
                    }
                );
            });
        });
    }

    //edit comic from db
    editComic(id, comic) {

    }

    //remove comic from db
    removeComic(id) {

    }
}
