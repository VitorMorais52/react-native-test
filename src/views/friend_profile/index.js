import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function friend_profile({route}, {navigation}){
    
    const newLocal = route['params'];
    const friend = newLocal;
   
    return(
  
    <View style={styles.container}>
        {/* <View style={styles.header}>
            <Text style={styles.headerContent}><Icon name="arrow-left" style={styles.icon}/></Text>
        </View> */}
        <View style={styles.body}>
        
            <View style={styles.avatar}>
            {/* <Text style={styles.legendAvatar}>Avatar</Text> */}
            <Image source={{uri: friend.avatar}} style={styles.imageAvatar} />
            </View>
            <View style={styles.contentData}>          
                <Text style={styles.legend}>Nome</Text>  
                <View style={styles.content}>
                    <Icon name="user-circle" style={styles.icon}/>
                    <Text style={styles.infos}>{friend.nome}</Text>
                </View>
                
                <Text style={styles.legend}>Email</Text>
                <View style={styles.content}>
                    <Icon name="envelope-square" style={styles.icon}/>
                    <Text style={styles.infos}>{friend.email}</Text>
                </View>

                <Text style={styles.legend}>Redes sociais</Text>
                <View style={styles.content}>
                    <Icon name="twitter" style={styles.icon}/>
                    <Text style={styles.infos}>{friend.redes_sociais[1]}</Text>
                </View>

                <View style={styles.content}>
                    <Icon name="facebook-square" style={styles.icon}/>
                    <Text style={styles.infos}>{friend.redes_sociais[0]}</Text>
                </View>
                
                <Text style={styles.legend}>Descrição</Text>
                <View style={styles.content}>
                    <Icon name="list-alt" style={styles.icon}/>
                    <Text style={styles.infos}>{friend.descricao}</Text>
                </View>

            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.chat}>
                    <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Icon name="comments-o" style={styles.iconChat}/>
                    
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.galeria}>
                    <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Icon name="image" style={styles.iconImage}/>
                    
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
      
}

 