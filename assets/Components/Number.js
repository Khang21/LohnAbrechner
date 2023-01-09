import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class Number extends Component {
    constructor() {
        super();
        this.state = {
            low: 0,
            mid: 50,
            high: 100,
            guessesLeft: 6
        }
    }
    render() {
        return (
            <View>
                <Text>I will read your mind in 6 or less questions</Text>
                <Text
                    style={styles.smallerText}>
                    {'\n'}Guess a number between 0-99: {'\n'}
                </Text>

                <Text
                    style={styles.biggerText}>
                    Is your number {this.state.mid}?
                </Text>
                <Text>{'\n'}</Text>
                <Button
                    title="Yes"
                    onPress={this.userWon}
                />
                <Text>{'\n'}</Text>
                <View style={styles.answerButtons}>
                    <Button
                        title="No, it's smaller"
                        onPress={this.isSmaller}
                    />
                    <Text>       </Text>
                    <Button
                        title="No, it's bigger"
                        onPress={this.isBigger}
                    />
                </View>
                <Text>{'\n'}</Text>


                <Text>{'\n'}Guesses left before you win: {this.state.guessesLeft} {'\n'}</Text>

                <Button
                    title="Refresh Game"
                    onPress={this.refresh}
                />
            </View>
        );


    }

    userWon = () => {
        alert('I win, I guessed your number in 6 or less tries.');
    }
    isSmaller = () => {
        if (this.state.guessesLeft == 0) {
            alert('Okay, you cheated.');
        }
        else {
            this.setState((state) => ({
                high: state.mid
            }));
            this.setState((state) => ({
                mid: parseInt((state.high + state.low) / 2),
                guessesLeft: (state.guessesLeft - 1)
            }));
        }
    }
    isBigger = () => {
        if (this.state.guessesLeft == 0) {
            alert('Okay, you cheated.');
        }
        else {
            this.setState((state) => ({
                low: state.mid
            }));
            this.setState((state) => ({
                mid: parseInt((state.high + state.low) / 2),
                guessesLeft: (state.guessesLeft - 1)
            }));
        }
    }

    refresh = () => {
        this.setState({
            low: 0,
            mid: 50,
            high: 100,
            guessesLeft: 6
        });
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
    }
});