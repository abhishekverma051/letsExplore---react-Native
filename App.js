import { Image, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function ContactList() {
  const initialData = [
    {
      id: 1,
      name: ' Tokyo',
      tagLine: 'Tokyo is Japan`s major cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: ' Kyoto',
      tagLine: 'Kyoto is Japan`s major cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: ' Osaka.',
      tagLine: 'Osaka. is Japan`s major cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: ' Nagoya.',
      tagLine: 'Osaka. is Japan`s major cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  const initialData2 = [
    {
      id: 1,
      name: ' Berlin',
      tagLine: 'Berlin is Germany`s major cultural centre',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1710736885719-20d245cceae3?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: ' Munich',
      tagLine: 'Munich is Germany`s major cultural centre',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1710736885719-20d245cceae3?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: ' Frankfurt.',
      tagLine: 'Frankfurt. is Germany`s major cultural centre',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1710736885719-20d245cceae3?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: ' Hamburg',
      tagLine: 'Hamburg is Germany`s major cultural centre',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1710736885719-20d245cceae3?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];



  const initialData3 = [
    {
      id: 1,
      name: 'HP',
      tagLine: 'Himachal is India`s major cultural centre',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1682125729312-78f16e6e6f38?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: ' Maharastra',
      tagLine: 'Maharastra is India`s major cultural centre',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1682125729312-78f16e6e6f38?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'Utrakhand',
      tagLine: 'Utrakhand is India`s major cultural centre',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1682125729312-78f16e6e6f38?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: 'Vrindavan',
      tagLine: 'Vrindavan is India`s major cultural centre',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1682125729312-78f16e6e6f38?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];
  
  const initialData4 = [
    {
      id: 1,
      name: 'Moscow',
      tagLine: 'Moscow is Russia`s major cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: ' St Petersburg',
      tagLine: 'It is Russia`s  cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: ' Novosibirsk ',
      tagLine: 'Novosibirsk is Russia`s major cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: ' Yekaterinburg',
      tagLine: 'Yekaterinburg is Russia major cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  const initialData5 = [
    {
      id: 1,
      name: 'place1',
      tagLine: 'Moscow is Tiawan`s major cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: ' Place2',
      tagLine: 'It is Tiawan`s  cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: ' Place3 ',
      tagLine: 'Novosibirsk is Tiawan`s major cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: ' place4',
      tagLine: 'Yekaterinburg is Tiawan major cultural centre',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];



  

  const [data, setData] = useState(initialData);

  const renderItem = ({ item }) => (
    <View style={styles.placeCard}>
      <View style={styles.placeImageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.placeImage} />
      </View>
      <View style={styles.placeInfo}>
        <Text style={styles.placeName}>{item.name}</Text>
        <Text style={styles.placeTagline}>{item.tagLine}</Text>
      </View>
    </View>
  );

   const ListHeaderComponent = () => (
    <View style={styles.listHeaderComponents}>
      <Text style={styles.listHeaderText}>List Of Years </Text>
    </View>
  );
  const renderSection = (title, backgroundColor, data) => (
    <View style={[styles.mainContainer, { backgroundColor }]}>
      <Text style={styles.topText}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatlistContainer}
       

      />
    </View>
  );

  return (
    <ScrollView style={styles.scrollView}>
    <View>
       <Text style={styles.headingText1}>letsExplore</Text>
       </View>
      {renderSection('Japan', 'red', initialData)}
      {renderSection('Germany', 'yellow', initialData2)}
      {renderSection('India', 'orange', initialData3)}
      {renderSection('Russia', 'cyan', initialData4)}
      {renderSection('Tiawan', 'salmon', initialData4)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  mainContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
     
  },
  headingText1:{
     position:'absolute',
     backgroundColor:'grey',
     color:'white',
     paddingTop:50,
     fontSize:44,
     fontWeight:'bold',
     paddingLeft:14
  },
  placeCard: {
    marginRight: 20,
    backgroundColor: '',
    borderRadius: 10,
    width: 180,
    height: 200,
    padding: 16,
    justifyContent: 'space-between',
  },
  placeImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  placeInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
  },
  placeTagline: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    marginTop: 5,
  },
  topText: {
    fontSize: 54,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
     
  },
  flatlistContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
