import type { ComponentType } from 'react';
import { CreditCardsNavigator } from './CreditCardsNavigator';

type ModuleContract = {
  name: string;
  root: ComponentType;
};

const creditCardsModule: ModuleContract = {
  name: 'credit-cards',
  root: CreditCardsNavigator,
};

export default creditCardsModule;
