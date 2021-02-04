import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        //alignContent: 'center',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    sc1: {
        flex: 0.4, 
        //backgroundColor: 'red',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    sc2: {
        flex: 0.6, 
        //backgroundColor: 'purple',  
        //alignContent: 'center',
        alignItems: 'center',
        //justifyContent: 'center',      
    },
    transactions: {
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: 'white',

        marginBottom: 15,

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,

        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,  
        elevation: 5 
    },
    headerList: {
        marginBottom: 10,
    },
    textHeaderList: {
        fontSize: 15
    }
})