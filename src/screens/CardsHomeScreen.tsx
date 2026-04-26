import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '@myorg/shared-ui';
import type { CreditCardsStackParamList } from '../types';

type Props = NativeStackScreenProps<CreditCardsStackParamList, 'CardsHome'>;

export function CardsHomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cards overview</Text>
      <Text style={styles.subtitle}>
        See rewards you have earned, due dates, and personalized picks. Use
   
      </Text>
      <PrimaryButton
        label="View offers"
        onPress={() => navigation.navigate('CardsOffers')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#64748b',
    marginBottom: 18,
  },
});
