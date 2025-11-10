import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Medical from '../components/Medical'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
        <View style={styles.com}>
          <Icon name="pulse" size={24} color="#007AFF" style={styles.logoIcon} />
          <Text style={styles.text}>HealthCast</Text>
        </View>

        <View style={styles.right}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcGSpUGlQhLvpAhpFx6RJpc2p-kUxiUS4GQ&s',
            }}
            style={styles.profilePic}
          />
        </View>
      </View>

     
      <View style={styles.und}>
        <Text style={styles.med}>Understand medical</Text>
        <Text style={styles.with}>conditions with</Text>
        <Text style={styles.doctor}>doctor-approved audio</Text>
      </View>

     
      <TouchableOpacity
        onPress={() => navigation.navigate('Library')}
        style={styles.btn}>
        <Text style={styles.btnText}>Browse Library</Text>
      </TouchableOpacity>

      <View style={styles.medc}>
        <Medical />
      </View>
      </ScrollView>

     
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F2FA',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  com: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    marginRight: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },

  // Text section
  und: {
    marginTop: 10,
    marginBottom: 30,
  },
  med: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  with: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  doctor: {
    fontSize: 22,
    fontWeight: '700',
    color: '#007AFF',
  },

  // Button
  btn: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 4,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
 medc:{
    marginTop:20

  }
});
