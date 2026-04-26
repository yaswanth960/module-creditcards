import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { CardsHomeScreen } from './screens/CardsHomeScreen';
import { CardsOffersScreen } from './screens/CardsOffersScreen';
import { CardsBenefitsScreen } from './screens/CardsBenefitsScreen';
import { CardsApplyScreen } from './screens/CardsApplyScreen';
import type { CreditCardsStackParamList } from './types';

const Stack = createNativeStackNavigator<CreditCardsStackParamList>();

const HOME = 'CardsHome' as const;

export function CreditCardsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) =>
        route.name === HOME
          ? {
              headerLeft: (props) => <DrawerToggleButton {...props} />,
            }
          : {}
      }>
      <Stack.Screen
        name="CardsHome"
        component={CardsHomeScreen}
        options={{ title: 'Overview' }}
      />
      <Stack.Screen
        name="CardsOffers"
        component={CardsOffersScreen}
        options={{ title: 'Offers' }}
      />
      <Stack.Screen
        name="CardsBenefits"
        component={CardsBenefitsScreen}
        options={{ title: 'Benefits' }}
      />
      <Stack.Screen
        name="CardsApply"
        component={CardsApplyScreen}
        options={{ title: 'Apply' }}
      />
    </Stack.Navigator>
  );
}
