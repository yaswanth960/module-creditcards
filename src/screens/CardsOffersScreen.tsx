import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '@myorg/shared-ui';
import type { CreditCardsStackParamList } from '../types';

type Props = NativeStackScreenProps<CreditCardsStackParamList, 'CardsOffers'>;

export function CardsOffersScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Card Offers</Text>
      <Text style={styles.subtitle}>
        Get pre-approved card offers with cashback and travel rewards.
      </Text>
      <PrimaryButton
        label="Next: Benefits"
        onPress={() => navigation.navigate('CardsBenefits')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 16 },
});
