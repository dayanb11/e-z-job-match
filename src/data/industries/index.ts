import { softwareIndustry } from './software';
import { dataIndustry } from './data';
import { otherIndustries } from './other';
import { Industry } from '@/types/industry';

export const industriesData: Industry[] = [
  dataIndustry,
  ...otherIndustries,
  softwareIndustry,
];

export * from './types';