import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '@myorg/shared-ui';
import type { CreditCardsStackParamList } from '../types';

type Props = NativeStackScreenProps<CreditCardsStackParamList, 'CardsApply'>;

export function CardsApplyScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Apply in minutes</Text>
      <Text style={styles.subtitle}>
        Keep your ID and income details ready. You will review terms and
        consent before submission. This screen is a demo flow only.
      </Text>
      <PrimaryButton
        label="Done — back to overview"
        onPress={() => navigation.navigate('CardsHome')}
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
