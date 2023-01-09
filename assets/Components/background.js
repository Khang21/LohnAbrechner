import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';


// https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/moroccan-flower-dark.png

export default class Test extends Component {



    constructor(props) {

        super(props);
        this.state = { age: '' };
        this.state = { military: '' };
        this.state = { gross: '' };


    }
    showNum = () => {
        var age = this.state.Num1;
        var military = this.state.yesno;
        var gross = this.state.Num2;
        alert(age);

    }

    render() {
        return (
            <ImageBackground source={image} resizeMode='cover' style={styles.container} >
                <Text>Wie alt sind sie?</Text>
                <TextInput style={{ borderWidth: 1, margin: 10 }} onChangeText={age => this.setState({ age })}></TextInput>
                <Text>Waren sie in der Militär? [Ja/Nein]</Text>
                <TextInput style={{ borderWidth: 1, margin: 10 }} onChangeText={military => this.setState({ military })}></TextInput>
                <Text>Wie viel verdienen Sie Brutto?</Text>
                <TextInput style={{ borderWidth: 1, margin: 10 }} onChangeText={gross => this.setState({ gross })}></TextInput>
                <Button title="Click" style={{ margin: 10 }} onPress={this.showNum} />
                <Text>{this.state.Num2}</Text>

                <StatusBar style="auto" />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: "#ffffff",
        backgroundColor: "#00000099",
        padding: 16
    }
});