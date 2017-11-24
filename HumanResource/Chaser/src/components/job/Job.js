import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Picker, TextInput, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Languages, setLanguage } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import { width, height, fontScale } from '../../utillities/Scale';

const { white, gray2, black, gray4, blue5, whiteBlue } = Color;

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = ({

        });
    }

    render() {
        // const { navigate } = this.props.navigation;
        // const { } = this.props;
        return (
            <View style={{ flex: 1, padding: fontScale(10), backgroundColor: whiteBlue }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: white,
                        borderRadius: fontScale(5),
                        shadowColor: gray4,
                        shadowOpacity: 1,
                        shadowRadius: 2,
                        shadowOffset:
                        { width: 1, height: 1 },
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text>Hello</Text>
                </View>
            </View >
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Job);

