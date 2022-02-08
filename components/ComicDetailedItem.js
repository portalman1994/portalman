import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, Modal, Button, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import * as comicsActions from '../store/comics-actions';
import { useDispatch } from 'react-redux';

const ComicDetailedItem = props => {
    return (
    <View style={{flex: 1, flexDirection: 'row', margin: 15 }}>
            <TouchableOpacity onPress={props.onSelect} style={{width: 200, height: 320, marginTop: 20}}>
                <Image style={{ width: 200, height: 320, borderRadius: 7, marginTop: 20, resizeMode: 'stretch'}} source={{ uri: props.cover }} />
            </TouchableOpacity>
            <View style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'space-between', flex: 1, marginTop: 20}}>
            <Text style={{flexDirection: 'row', marginTop: 20, fontWeight: 'bold'}}>{props.title} #{props.issue}</Text>
            <Text style={{flexDirection: 'row', marginTop: 2}}>{props.date}</Text>
            <Text numberOfLines={16} style={{flexDirection: 'row', marginTop: 10}}>{props.desc}</Text>
            </View>
            
    </View>
    );
};

export default ComicDetailedItem;