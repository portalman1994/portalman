import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ComicItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={{ margin: 5 }}>
            <Image style={{ width: 120, height: 170, borderRadius: 5 }} source={{ uri: props.cover }} resizeMode='stretch' />
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