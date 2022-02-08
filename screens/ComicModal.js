import React, { useEffect, useState } from 'react';
import { View, Modal, Button, Text, SafeAreaView, TextInput, ScrollView, Switch } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import * as comicsActions from '../store/comics-actions';

const ComicModal = props => {
    const comicId = props.navigation.getParam('comicId');
    const selectedComic = useSelector(
        state => state.comics.comics.find(comic => comic.id === comicId)
    );
    const selectedCover = selectedComic.cover;
    const selectedTitle = selectedComic.title;
    const selectedIssue = selectedComic.issue;
    const selectedYear = selectedComic.date;
    const selectedDesc = selectedComic.desc;
    const selectedId = selectedComic.id;
    const selectedWish = selectedComic.wish;

    const [id, setEditId] = useState(selectedId.toString());
    const [title, setEditTitle] = useState(selectedTitle);
    const [issue, setEditIssue] = useState(selectedIssue.toString());
    const [desc, setEditDesc] = useState(selectedDesc);
    const [date, setEditDate] = useState(selectedYear.toString());
    const [cover, setEditCover] = useState(selectedCover);
    const [wish, setEditWish] = useState(selectedWish);

    const dispatch = useDispatch();
    
    const toggleSwitch = () => {
        setEditWish(!wish);
    };

    const comicsHandler = () => {
        dispatch(
            comicsActions.editComic(title, issue, desc, date, cover, id, wish)
        );
    };
    return (
        <ScrollView style={{flex: 1, padding: 10}}>
                    <View style={{flex: 1, padding: 10}}>
                        <TextInput
                            onChangeText={value => setEditTitle(value)}
                            value={title}
                        />
                        <TextInput
                            onChangeText={value => setEditIssue(value)}
                            value={issue}
                        />
                        <TextInput
                            onChangeText={value => setEditDesc(value)}
                            value={desc}
                        />
                        <TextInput
                            onChangeText={value => setEditDate(value)}
                            value={date}
                        />
                        <TextInput
                            onChangeText={value => setEditCover(value)}
                            value={cover}
                        />
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={ wish ? "#f5dd4b" : "#f4f3f4" }
                            onValueChange={toggleSwitch}
                            value={wish}
                        />
                        </View>
                        <View>
                        <Button
                            onPress={() => {
                                comicsHandler();
                            }}
                            color='#5637DD'
                            title='Submit'
                        />
                    </View>
                    <View>
                        <Button
                            onPress={() => {
                            }}
                            color='#808080'
                            title='Cancel'
                        />
                    </View>
        </ScrollView>
    
    );
}

export default ComicModal;