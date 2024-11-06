import { View, Text, StyleSheet, SafeAreaView , Image, Button, Alert} from "react-native";
import React, { ReactNode } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
} from "../../constants/globalStyles";
import PriceTag from "../checkout/PriceTag";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TouchableOpacity } from "react-native-gesture-handler";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <View style={styles.container}>
    
      {children}
      <SafeAreaView style={styles.coluna}>
        <View style={styles.linha}>
            <View style={styles.iconContainer}>
              <AntDesign name="checksquare" size={24} color="#ed4d2d" />
            </View>
        <Text style= {styles.text}> Indicado</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style= {styles.live}> <MaterialIcons name="live-tv" size={20} color="white" /> LIVE </Text>
        <AntDesign name="right" size={10} color="#8e8e8e" />
        <Text style={{color: "#8e8e8e"}}> Editar</Text>
        </View>

        <View  style={styles.linha}>
        <AntDesign name="checksquare" size={24} color="#ed4d2d" />
        <Image
        style={styles.image}
        source={require('../../assets/image/mouse.jpeg')}
        />  
        <View style={styles.coluna}>
        <Text style={{ marginBottom: 5}}>Mouse sem fio </Text>
         <Text style={{backgroundColor: "#f5f5f5", width: 100, marginBottom: 5}}> Modelo.. <Feather name="chevron-down" size={10} color="#919191" /></Text>
        <Text style= {styles.frete}> <FontAwesome5 name="plane" size={9} color="white" /> FRETE GRÁTIS acima de R$19</Text>
        <PriceTag price={59}/>
    
        </View>
        </View>
        <View style={styles.linha}>
          <FontAwesome6 name="percentage" size={14} color="#dd9383" />
        <Text style={{marginLeft: 10, marginEnd: 10}}>Ver todos os cupons da loja </Text>
         <Text style= {styles.text}> Novo </Text>
        
          <AntDesign name="right" size={10} color="#8e8e8e" />
       
        </View>
        <View style={styles.linha}>
        
        <Feather name="truck" size={24} color="#42a59a" />
          <Text style={{marginLeft: 10, marginEnd: 10}}> Frete grátis em fretes até R$20,00 para pedidos acima de R$19,00 </Text>
          <AntDesign name="right" size={10} color="#8e8e8e" />
        </View>
      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: DEFAULT_RADIUS,
    gap: DEFAULT_GAP,
    padding: DEFAULT_PADDING,
    width: "100%",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 3,
    marginRight: 3
  },
  image: {
      width: 130,
      height: 150,
      resizeMode: 'stretch'
    },
    coluna : {
      flex: 1,
      flexDirection: "column",
      margin: 5
    },
    linha: {
       flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10
    },
    frete :{
      color: "white",
      backgroundColor: "#123265",
      fontSize: 10,
      width: 170,
       marginBottom: 5
    },
    text :{
      color: "white",
      backgroundColor: "#ed4d2d",
      height: 18,
      fontSize: 10,
      paddingTop: 2
    },
    live : {
      color: "white",
      backgroundColor: "#ed4d2d",
      height: 20,
      fontSize: 10,
      lineHeight: 19,
      marginRight: 3
    },
    iconContainer: {
      borderRadius: DEFAULT_RADIUS,
      marginRight: 10
    }

});
