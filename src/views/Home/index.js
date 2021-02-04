import styles from './style';
import React, { useState, useEffect } from 'react';
import { convertDate } from '../../helpers/generalHelper';
import { View, ScrollView, FlatList, Text, TouchableOpacity, Alert } from 'react-native'

export default HomeView = (props) => {

    const [flagMore, set_flagMore] = useState(false);
    const [data, set_data] = useState(
        {
            "_id": "e20e64ed-36154398-aabb-8eff23128f4a",
            "name": "Chris Froome",
            "balance": "321.45",
            "transactions": [
              {
                "_id": "f21e64ed-36154398-ba03-9dff23128f4a",
                "date": "2021-01-10T16:30:00-03:00",
                "description": "PixIn: Peter Sagan",
                "amount": "350.0"
              },
              {
                "_id": "g22e64ed-44154398-ca02-hgff23128f4a",
                "date": "2021-01-11T13:03:00-03:00",
                "description": "Uber",
                "amount": "-7.49"
              },
              {
                "_id": "h21e64ed-88994398-bb99-9dff23128f4a",
                "date": "2021-01-11T20:15:00-03:00",
                "description": "iFood",
                "amount": "-35.0"
              },
              {
                "_id": "033e64ed-23154398-ad22-9dff23128f4a",
                "date": "2021-01-12T16:30:00-03:00",
                "description": "Apple.com",
                "amount": "-10.9"
              },
              {
                "_id": "z55e64ed-89154398-xz02-9dff23128f4a",
                "date": "2021-01-12T18:01:00-03:00",
                "description": "Amazon Prime",
                "amount": "-9.9"
              },
              {
                "_id": "xy3e64ed-45154398-af02-9dff23128f4a",
                "date": "2021-01-13T17:24:56-03:00",
                "description": "Spotify",
                "amount": "-21.9"
              },
              {
                "_id": "xy3e64ed-76154398-ah04-9dff23128f4a",
                "date": "2021-01-14T16:30:00-03:00",
                "description": "Cashback",
                "amount": "13.27"
              }
            ]
          }
        );        
        
    const TRANSACTIONS = React.memo( ({item, index}) => {

        var dateT = convertDate(item.date, "ISO8601", "DD/MM/AAAA HH:MM");

        if(flagMore || index < 3) {
            return(
                <View style={styles.transactions}>
                    <TouchableOpacity onPress={() => {showAlert(dateT)}}  >
                        <Text>{item.description} R$ {item.amount}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
     });       

    const showAlert = (msg) => {
        Alert.alert( 
            '', msg,
            [
                { text: 'Ok'}
            ],
            {cancelable: false}  
        );          
     }

    return(
        <View style={styles.container}>
            <View style={styles.sc1}>
                <Text>Meu Saldo</Text>
                <Text>R$ {data.balance}</Text>
            </View>
            <View style={styles.sc2}>
                <ScrollView>  
                    {data && 
                        <FlatList
                            data={data.transactions}
                            keyExtractor={ (item, index) => index.toString()}
                            ListHeaderComponent={ () =>
                                <View style={styles.headerList}>
                                    <Text style={styles.textHeaderList}>HISTÓRICO DE TRANSAÇÕES</Text>
                                </View>
                            }
                            renderItem = { ({item, index}) => (
                                <TRANSACTIONS item={item} index={index} />
                            )}                
                        />              
                    }
                    { !flagMore &&
                        <View>
                            <TouchableOpacity onPress={() => {set_flagMore(true)}}>
                                    <Text>VER MAIS</Text>
                            </TouchableOpacity>                    
                        </View>
                    }
                </ScrollView>
            </View>
        </View>    
    )

}
