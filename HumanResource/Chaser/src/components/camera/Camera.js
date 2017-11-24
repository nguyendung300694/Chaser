import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Languages } from '../../content/languages/Languages';


class Camera extends Component {
    render() {
        return (
            <View>
                <Text>{}</Text>
                <Text>
                    {Languages.CreateAccount}
                </Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Camera);

