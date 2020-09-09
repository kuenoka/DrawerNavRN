import * as React from 'react';
import { Text, Button, View } from 'react-native';

export default function NotificationsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Welcome to NotificationsScreen</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
}