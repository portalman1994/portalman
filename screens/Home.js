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
    return (
        <FlatList
            data={comics}
            horizontal
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

const Home = () => {
    const [title, setTitle] = useState('');
    const [issue, setIssue] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [cover, setCover] = useState('');
    const [toggle, setToggle] = useState(false);
    
    const dispatch = useDispatch();
    
    const resetForm = () => {
        setTitle('');
        setIssue('');
        setDesc('');
        setDate('');
        setCover('');
        toggleModal();
    }

    const toggleModal = () => {
        setToggle(!toggle);
    }

    const comicsHandler = () => {
        dispatch(
            comicsActions.addComic(title, issue, desc, date, cover)
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{fontSize: 20}}>Recently Added</Text>
            </View>
            <ScrollView style={{flex: 1}}>
                <ComicsList/>
            </ScrollView>
            <View>
                <Modal
                animationType='slide'
                transparent={false}
                visible={toggle}
                onRequestClose={toggleModal}>
                    <View>
                        <Input
                            placeholder='Title'
                            onChangeText={value => setTitle(value)}
                            value={title}
                        />
                        <Input
                            placeholder='Issue no.'
                            onChangeText={value => setIssue(value)}
                            value={issue}
                        />
                        <Input
                            placeholder='Synopsis'
                            onChangeText={value => setDesc(value)}
                            value={desc}
                        />
                        <Input
                            placeholder='Year'
                            onChangeText={value => setDate(value)}
                            value={date}
                        />
                        <Input
                            placeholder='Cover'
                            onChangeText={value => setCover(value)}
                            value={cover}
                        />
                    </View>
                    <View>
                        <Button
                            onPress={() => {
                                comicsHandler();
                                resetForm();
                            }}
                            color='#5637DD'
                            title='Submit'
                        />
                    </View>
                    <View>
                        <Button
                            onPress={() => {
                                toggleModal();
                                resetForm();
                            }}
                            color='#808080'
                            title='Cancel'
                        />
                    </View>
                </Modal>
            </View>
            <ActionButton buttonColor='rgba(231,76,60,1)'>
                    <ActionButton.Item buttonColor='rgba(231,76,60,1)' title='Add Comic' onPress={() => toggleModal()}>
                        <Icon name='md-book' style={styles.actionButtonIcon} />
                    </ActionButton.Item> 
                </ActionButton>
        </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white'
    }
});

export default Home;