import React, { useEffect, useState } from 'react';
import { Button, FlatList, Modal, SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ComicItem from '../components/ComicsItem';
import * as comicsActions from '../store/comics-actions';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from '../services/NavigationService';

const ComicsList = () => {
    const comics = useSelector(state => state.comics.comics);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(comicsActions.loadComics());
    }, [dispatch]);
    
    let data = comics;
    data = data.filter((item) => item.wish == true).map(({id, cover, title, issue}) => ({id, cover, title, issue}));
    
    return (
        <FlatList
            data={data}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ComicItem
                    cover={itemData.item.cover}
                    title={itemData.item.title + ' #' + itemData.item.issue}
                    onSelect={() => {
                        NavigationService.navigate('ComicDetail', { comicId: itemData.item.id });
                    }}
                />
            )}
        />
    );
}

const Wishlist = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{fontSize: 20}}>Comics</Text>
            </View>
            <ScrollView style={{flex: 1}}>
                <ComicsList/>
            </ScrollView>
        </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    }
});

export default Wishlist;