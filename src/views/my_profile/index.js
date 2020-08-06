import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


export default function my_profile({route}){

    const newLocal = route['params'];
    const user = newLocal;
 
    return(
        
    <View style={styles.container}>       
            <View style={styles.boxImage}>
                <Image source={{uri: user.avatar}} style={styles.imageAvatar} />
            </View>
            <View style={styles.contentData}>    

                <View style={styles.contentInfos}>
                    <Icon name="user-circle" style={styles.icon}/>
                    <Text style={styles.legend}>Nome</Text>  
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder={user.nome}></TextInput>
                </View>

                <View style={styles.contentInfos}>
                    <Icon name="envelope-square" style={styles.icon}/>
                    <Text style={styles.legend}>Email</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder={user.email}></TextInput>
                </View>
                
                <View style={styles.contentInfos}>
                    <Icon name="list-alt" style={styles.icon}/>
                    <Text style={styles.legend}>Descrição</Text>
                </View>
                    <TextInput style={styles.input} placeholder={user.descricao}></TextInput>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonSave}>
                   
                    <Icon name='save' style={styles.iconSave}/>
                   
                </TouchableOpacity>
            </View>


       
    </View>
    );
      
}
