import { ADD_COMIC, EDIT_COMIC, SET_COMICS } from './comics-actions';
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
                            com.cover,
                            com.wish
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
                action.comicData.cover,
                action.comicData.wish
            );
            return {
                comics: state.comics.concat(newComic)
            };
        case EDIT_COMIC:
            const updatedComic = state.comics.map(com => (com.id.toString() === action.comicData.id.toString()) ? action.comicData : com);
            console.log(updatedComic);
            return {
                comics: updatedComic
            };      
        default:
            return state;
    }
};