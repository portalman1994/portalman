import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import ComicDetailedItem from '../components/ComicDetailedItem';

const ComicDetail = props => {
    const comicId = props.navigation.getParam('comicId');
    const selectedComic = useSelector(
        state => state.comics.comics.find(comic => comic.id === comicId)
    );

    const selectedCover = selectedComic.cover;
    const selectedTitle = selectedComic.title;
    const selectedIssue = selectedComic.issue;
    const selectedYear = selectedComic.date;
    const selectedDesc = selectedComic.desc;

    return (
        <View>
            <ComicDetailedItem 
                cover={selectedCover}
                title={selectedTitle}
                issue={selectedIssue}
                date={selectedYear}
                desc={selectedDesc}
            />
        </View>
    );

};

export default ComicDetail;

