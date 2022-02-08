import Database from '../Database';

const db = new Database();

export const ADD_COMIC = 'ADD_COMIC';
export const SET_COMICS = 'SET_COMICS';
export const EDIT_COMIC = 'EDIT_COMIC';

export const addComic = (title, issue, desc, date, cover, wish) => {
    return async dispatch => {
        const dbResult = await db.insertComic(
            title,
            issue,
            desc,
            date,
            cover,
            wish
        );
        dispatch({
            type: ADD_COMIC,
            comicData: {
                id: dbResult.insertId,
                title,
                issue,
                desc,
                date,
                cover,
                wish
            }
        });
    }
}

export const loadComics = () => {
    return async dispatch => {
        const dbResult = await db.fetchComics();
        console.log(dbResult);
        dispatch({ type: SET_COMICS, comics: dbResult.rows._array });
    }
}

export const editComic = (title, issue, desc, date, cover, id, wish) => {
    return async dispatch => {
        const dbResult = await db.editComic(
            title,
            issue,
            desc,
            date,
            cover,
            id,
            wish
        );
        console.log(dbResult);
        dispatch({
            type: EDIT_COMIC,
            comicData: {
                title,
                issue,
                desc,
                date,
                cover,
                id,
                wish
            }
        });
    }
}