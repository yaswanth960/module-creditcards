import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '@myorg/shared-ui';
import type { CreditCardsStackParamList } from '../types';

type Props = NativeStackScreenProps<
  CreditCardsStackParamList,
  'CardsBenefits'
>;

export function CardsBenefitsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perks at a glance</Text>
      <Text style={styles.subtitle}>
        Airport lounges, purchase protection, extended warranty, and partner
        discounts. Actual benefits depend on the card you select.
      </Text>
      <PrimaryButton
        label="Continue to apply"
        onPress={() => navigation.navigate('CardsApply')}
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
