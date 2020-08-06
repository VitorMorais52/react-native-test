import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{flex: 1, backgroundColor:'gray'},

    body:{flex: .9, backgroundColor:'gray', },

    header:{
        flex: .1, 
        backgroundColor:'black', 
        paddingLeft: 7, 
        flexDirection: 'row', 
        alignItems: 'center',
        borderWidth: 3,
        borderBottomColor: 'black',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },

    contentHeader: {flexDirection:"row", flex: 1, alignItems:'center', justifyContent:'space-between'},

    headerMyProfile: {flexDirection: "row", alignItems: "center"},

    nameMy_profile: { color: 'white', paddingLeft: 20, }, 

    icon:{color: 'white', fontSize: 30, paddingRight: 25},

    list: { paddingHorizontal: 0, },

    listItem: {
        backgroundColor: "#363636",
        marginBottom: 0,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 0,
        borderWidth: 2,
        borderBottomColor: 'gray',
    },

    avatarProfile: {width:60, height:60, resizeMode:"cover", borderRadius: 30},

    imageAvatar : {width:50, height:50, resizeMode:"cover", borderRadius: 30},

    contentData:{ paddingHorizontal: 20, },

    nome: { color: 'white', fontSize: 16, fontFamily: '',},

    status: { color: 'white', fontSize: 12, fontFamily: ''},

    recent: { color: 'white', fontSize: 14, fontFamily: '', fontStyle: 'italic', opacity: 0.5},
      
});