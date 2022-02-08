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
        setEditWish(!Boolean(Number(wish)));
    };

    const comicsHandler = () => {
        dispatch(
            comicsActions.editComic(title, issue, desc, date, cover, wish, id)
        );
    };
    return (
        <ScrollView style={{flex: 1, padding: 10}}>
                    <View style={{flex: 1, padding: 10}}>
                        <Text style={{fontSize: 20}}>Title</Text>
                        <TextInput
                            onChangeText={value => setEditTitle(value)}
                            value={title}
                        />
                        <Text style={{fontSize: 20}}>Issue no.</Text>
                        <TextInput
                            onChangeText={value => setEditIssue(value)}
                            value={issue}
                        />
                        <Text style={{fontSize: 20}}>Synopsis</Text>
                        <TextInput
                            onChangeText={value => setEditDesc(value)}
                            value={desc}
                        />
                        <Text style={{fontSize: 20}}>Year</Text>
                        <TextInput
                            onChangeText={value => setEditDate(value)}
                            value={date}
                        />
                        <Text style={{fontSize: 20}}>Cover</Text>
                        <TextInput
                            onChangeText={value => setEditCover(value)}
                            value={cover}
                        />
                        <View style={{ flexDirection: 'row'}}><Text style={{fontSize: 17, margin: 5}}>Wishlist:   </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={ Boolean(Number(wish)) ? "#f5dd4b" : "#f4f3f4" }
                            onValueChange={toggleSwitch}
                            value={Boolean(Number(wish))}
                        />
                        </View>
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