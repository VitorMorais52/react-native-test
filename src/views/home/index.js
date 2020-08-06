import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


export default function home({navigation}){

    const dispatch = useDispatch();
    const friends = useSelector(state => state.dataFriends);  
    const [user, setUser] = useState([]);

    useEffect(() => {

        api.get('/teste').then(response => {
               
            dispatch({type: 'SET_DATA', data: response.data});    
            
        });

         api.get('/user').then(response => {
            setUser(response.data);         
         });

    }, []);


    function selectId(friend){
            dispatch({type: 'SET_ID', data: friend});
            navigation.navigate('friend_profile', friend); 
            console.log('clicked');
      }

    renderItem = ({item}) => (  
    <View>
         
        <TouchableOpacity onPress={() => selectId(item)} style={styles.listItem}>
            <Image source={{uri: item.avatar}} style={styles.imageAvatar} />
            <View style={styles.contentData}>            
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.status}>{item.status}</Text>
                <Text style={styles.recent}>Online há {item.recent} minutos</Text>
                </View>
        </TouchableOpacity>
        </View>
       
    );
   
    return(
       
    <View style={styles.container}>
        <StatusBar backgroundColor='#191919' hidden={true} contentData=''></StatusBar>
        <View style={styles.header}>  
        
            <View style={styles.contentHeader}>
            <TouchableOpacity onPress={()=> navigation.navigate('my_profile', user)}>
                <View  style={styles.headerMyProfile}>
                    <Image source={{uri: user.avatar}} style={styles.avatarProfile} />
                    <Text style={styles.nameMy_profile}>{user.nome}</Text>
                </View>
            </TouchableOpacity> 

            <TouchableOpacity>  
                <Icon name="navicon" style={styles.icon}/>  
            </TouchableOpacity>          
            </View> 


        </View>

        <View style={styles.body}>
        <FlatList
            style={{marginTop: 2, marginBottom: 0}}
            contentContainerStyle={styles.list}
            data={friends}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />

        </View>

    </View>
    );

    
}
