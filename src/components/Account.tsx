import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Account() {
  return (
    <View style={styles.accountStatus}>
          <View style={styles.account}>

            <Feather name="dollar-sign" color="rgba(0,0,0, 0.6)" size={22} />
            <Text style={styles.accountText}>Conta</Text>

          </View>

          <View style={styles.currentBill}>
            <Text style={styles.balanceText}>Saldo disponível</Text>
            <Text style={styles.balance}>R$ 0,00</Text>
            <View style={styles.balanceBlur}></View>
          </View>

        </View>
  );
};

const styles = StyleSheet.create({
  accountStatus: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop: 15,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    color: 'rgba(0,0,0, 0.6)',
    marginLeft: 20,
    fontSize: 16
  },
  currentBill: {
    position: "relative",
  },
  balanceText: {
    color: 'rgba(0,0,0, 0.6)',
    marginVertical: 10,
  },
  balance: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  balanceBlur: {
    position: "absolute",
    height: 31,
    width: "100%",
    backgroundColor: "linear-gradient(90deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 100%)",
    top: 45,
  },
});