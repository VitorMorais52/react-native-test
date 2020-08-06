import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{flex: 1, backgroundColor:'black', alignItems: 'center', justifyContent: 'center'},

    boxImage:{paddingBottom: 40},

    imageAvatar : {width:200, height: 200, resizeMode:"cover", borderRadius: 100,},

    contentData:{margin: 20, paddingBottom: 10},

    icon: {fontSize: 25, color: 'white', paddingHorizontal: 10},

    legend: {opacity: 0.4, color:'white', paddingBottom: 5},

    inputContainer: {paddingBottom: 20,},

    contentInfos: {flexDirection: 'row', paddingBottom: 10, alignItems: 'center'},

    input: {
        width: 350,
        color: 'white',
        fontSize: 19,
        backgroundColor: '#1C1C1C',
        height: 40,
        borderRadius: 15,
        paddingLeft: 10,
    },

    footer: {paddingTop: 0},
    
    buttonSave: {
        width: 350, 
        backgroundColor:'#1C1C1C', 
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        alignItems:'center'},

    textButton:{fontSize: 20},

    iconSave: {fontSize: 30, color: 'green', padding: 5},
 })