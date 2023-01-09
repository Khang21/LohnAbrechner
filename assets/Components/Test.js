import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list';




export default class Test extends Component {

    constructor(props) {

        super(props);
        this.state = { age: '' };
        this.state = { brutto: '' };
        this.state = { heiratet: '' };
        this.state = { kinderAnz: '' };


    }
    showNum = () => {
        var age = this.state.age;
        var brutto = this.state.brutto;
        var heiratet = this.state.heiratet;
        var kinderAnz = this.state.kinderAnz;
        alert(age);

    }
    render() {
        return (
            <View style={styles.aligner}>
                <Text style={styles.Header}>Lohn Abrechner</Text>
                <Text>Wie viel verdienen Sie Brutto?</Text>
                <TextInput style={styles.input} onChangeText={brutto => this.setState({ brutto })}></TextInput>
                //
                <Text>Wie alt sind sie?</Text>
                <TextInput style={styles.input} onChangeText={age => this.setState({ age })}></TextInput>
                //
                <Text>Sind Sie verheiratet?</Text>
                <TextInput style={styles.input} onChangeText={heiratet => this.setState({ heiratet })}></TextInput>
                //
                <Text>Wie viele Kinder haben Sie?</Text>
                <TextInput style={styles.input} onChangeText={kinderAnz => this.setState({ kinderAnz })}></TextInput>
                //
                <TouchableOpacity onPress={this.showNum} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Submit</Text>
                </TouchableOpacity>

                <Text>{this.state.kinderAnz}</Text>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    answerButtons: {
        flexDirection: 'row'
    },
    biggerText: {
        fontSize: 25
    },
    smallerText: {
        fontSize: 15
    },
    Header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 100,

    },
    aligner: {
        marginLeft: -50

    },
    submit: {

    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#70D0E4",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 30,
        marginLeft: 0
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    input: {
        width: 250,
        height: 30,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 16,
    }
});