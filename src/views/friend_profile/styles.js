import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{flex: 1, backgroundColor:'black', justifyContent: "center"},

    body:{flex: .98, backgroundColor:'black', marginHorizontal: 20, paddingTop: 20},

    header: {flex: .05, backgroundColor: 'black', paddingLeft: 35, },

    headerContent:{color:'#191919'},

    avatar: {
        flex: .3, 
        backgroundColor:'#1C1C1C', 
        justifyContent:'center', 
        alignItems:'center', 
        borderTopWidth: 2,
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderColor: 'gray',},

    imageAvatar : {width:200, height:200, resizeMode:"cover", borderRadius: 100},

    contentData: {
        flex: .55,
        backgroundColor:'#1C1C1C', 
        justifyContent:'center', 
        paddingLeft: 20, 
        borderTopWidth: 2,
        borderColor: 'gray',
},

    content: { flexDirection: "row",},

    options: {
        flex: .13, 
        paddingTop: 1,
        backgroundColor:'black', 
        flexDirection: 'row', 
        borderBottomStartRadius: 20, 
        borderBottomRightRadius: 20,},

    chat:{
        flex:1, 
        backgroundColor: '#1C1C1C', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderTopColor: 'black',
        borderBottomColor:'gray', 
        borderWidth: 1, 
        borderBottomStartRadius: 20, },

    galeria: {
        flex:1, 
        backgroundColor: '#1C1C1C', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderTopColor: 'black',
        borderBottomColor:'gray', 
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderBottomRightRadius: 20,},    


    iconImage: {fontSize: 55, color: 'white',},

    iconChat: {fontSize: 55, color: 'white',},

    icon: {fontSize: 25, color: 'white', paddingRight: 10},

    legend: {opacity: 0.4, color:'white', paddingBottom: 5},

    infos: {paddingBottom: 20, fontSize: 19, color: 'white'},
      
});