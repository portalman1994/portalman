import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ComicDetailedItem = props => {
    return (
    <View style={{flex: 1, flexDirection: 'row', margin: 15 }}>
            <Image style={{ width: 200, height: 320, borderRadius: 7, marginTop: 20}} source={{ uri: props.cover }} resizeMode='stretch' />
            <View style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
            <Text style={{flexDirection: 'row', marginTop: 20}}>{props.title} #{props.issue}</Text>
            <Text style={{flexDirection: 'row', marginTop: 2}}>{props.date}</Text>
            <Text numberOfLines={16} style={{flexDirection: 'row', marginTop: 10}}>{props.desc}</Text>
        </View>
    </View>
    );
};

export default ComicDetailedItem;