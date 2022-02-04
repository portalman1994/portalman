import Database from '../Database';

const db = new Database();

export const ADD_COMIC = 'ADD_COMIC';
export const SET_COMICS = 'SET_COMICS';

export const addComic = (title, issue, desc, date, cover) => {
    return async dispatch => {
        const dbResult = await db.insertComic(
            title,
            issue,
            desc,
            date,
            cover
        );
        dispatch({
            type: ADD_COMIC,
            comicData: {
                id: dbResult.insertId,
                title,
                issue,
                desc,
                date,
                cover
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