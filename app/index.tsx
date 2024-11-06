import CheckoutButton from "../components/checkout/CheckoutButton";
import PriceTag from "../components/checkout/PriceTag";
import Card from "../components/containers/Card";
import Scrollable from "../components/containers/Scrollable";
import HeaderHidden from "../components/headers/HeaderHidden";
import HeaderWithTitle from "../components/headers/HeaderWithTitle";
import { router } from "expo-router";
import React from "react";
import { Text, View, Image , StyleSheet, SafeAreaView} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
/**
 * index: carrinho produtos
 * checkout: total, meio de pagamento
 * compra concluída
 */

export default function index() {
  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <Scrollable>
      <HeaderWithTitle title="Shopping Cart" />

      <Card title="Mouse sem fio 2.4Ghz" children={undefined}>
     
      </Card>
{/* 
      <Card title="Teclado Mancer Shade">
        <Text>
          O teclado Mancer Shade MK2 é o item indispensável para sua próxima
          batalha! Ele possui formato TKL em padrão ABNT2 (padrão brasileiro).
          Foi desenvolvido com tudo que um gamer precisa, ele te levará para o
          próximo nível!
        </Text>

        <PriceTag price={119} />
      </Card> */}

      {/* <Card title="Mouse sem fio 2.4Ghz">
        <Text>
          O mouse TGT Vector E1 é o equip perfeito para você que está iniciando
          sua jornada gamer e deseja aumentar a precisão de seu setup!
          Desenvolvido para ter o ótimo desempenho em todos os tipos de jogos,
          este mouse é sua nova arma de combate!
        </Text>

        <PriceTag price={119} />
      </Card>

      <Card title="Teclado Mancer Shade">
        <Text>
          O teclado Mancer Shade MK2 é o item indispensável para sua próxima
          batalha! Ele possui formato TKL em padrão ABNT2 (padrão brasileiro).
          Foi desenvolvido com tudo que um gamer precisa, ele te levará para o
          próximo nível!
        </Text>

        <PriceTag price={119} />
      </Card> */}

      <CheckoutButton onPress={handleCheckout} />
    </Scrollable>
  );
}


const styles = StyleSheet.create ({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'stretch'
  },
  coluna : {
    flex: 1,
    flexDirection: "column"
  },
  linha: {
     flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
})