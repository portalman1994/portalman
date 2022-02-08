import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ComicItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={{ margin: 5 }}>
            <Image style={{ width: 115, height: 160, borderRadius: 5, resizeMode: 'stretch' }} source={{ uri: props.cover }} />
            <View style={{ paddingHorizontal: 5, alignItems: 'center' }}>
                <Text small bold numberOfLines={1}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    }
});

export default ComicItem;