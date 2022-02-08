import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableHighlight, Modal, Button } from "react-native";
import { TextInput } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import * as comicsActions from '../store/comics-actions';
import NavigationService from '../services/NavigationService';

import ComicDetailedItem from '../components/ComicDetailedItem';

const ComicDetail = props => {
    const comicId = props.navigation.getParam('comicId');
    const selectedComic = useSelector(
        state => state.comics.comics.find(comic => comic.id === comicId)
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(comicsActions.loadComics());
    }, [dispatch]);

    const selectedCover = selectedComic.cover;
    const selectedTitle = selectedComic.title;
    const selectedIssue = selectedComic.issue;
    const selectedYear = selectedComic.date;
    const selectedDesc = selectedComic.desc;
    const selectedId = selectedComic.id;
    const selectedWish = selectedComic.wish;
    return (
        <View>            
            <ComicDetailedItem 
                id={selectedId}
                cover={selectedCover}
                title={selectedTitle}
                issue={selectedIssue}
                date={selectedYear}
                desc={selectedDesc}
                wish={selectedWish}
                onSelect={() => {
                    NavigationService.navigate('ComicModal', { comicId: comicId });
                }}
            />
        </View>
    );
};
export default ComicDetail;