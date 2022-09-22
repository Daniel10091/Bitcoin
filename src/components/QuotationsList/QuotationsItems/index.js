import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"

export default function QuotationItems ( props ) {
  return (
    <View style={styles.MainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin} 
            source={require("../../../assets/img/bitcoin-icon.png")}
          />
          <Text style={styles.dayCotation}>{props.data}</Text>
        </View>
      </View>
      <View style={styles.contextRight}>
        <Text style={styles.price}>{props.valor}</Text>
      </View>
    </View>
  )
}
