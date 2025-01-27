import { softwareIndustry } from './software';
import { dataIndustry } from './data';
import { otherIndustries } from './other';
import { Industry } from '@/types/industry';

export const industriesData: Industry[] = [
  dataIndustry,
  softwareIndustry,
  ...otherIndustries,
];

export type { Industry, Role, Skill } from '@/types/industry';