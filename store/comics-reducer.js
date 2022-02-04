import { ADD_COMIC, SET_COMICS } from './comics-actions';
import Comic from '../models/comic';

const initialState = {
    comics: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_COMICS:
            return {
                comics: action.comics.map(
                    com =>
                        new Comic(
                            com.id.toString(),
                            com.title,
                            com.issue,
                            com.desc,
                            com.date,
                            com.cover
                        )
                )    
            };
        case ADD_COMIC:
            const newComic = new Comic(
                action.comicData.id.toString(),
                action.comicData.title,
                action.comicData.issue,
                action.comicData.desc,
                action.comicData.date,
                action.comicData.cover
            );
            return {
                comics: state.comics.concat(newComic)
            };
        default:
            return state;
    }
};