import type { IconName, ProcessStep, SocialLink, Stat, ValueItem } from '@/types';
import personalData from './personal.json';

export const personal = personalData.personal;
export const stats: Stat[] = personalData.stats;
export const socials: SocialLink[] = personalData.socials.map(({ icon, ...social }) => ({
  ...social,
  icon: icon as IconName,
}));
export const values: ValueItem[] = personalData.values.map(({ icon, ...value }) => ({
  ...value,
  icon: icon as IconName,
}));
export const process: ProcessStep[] = personalData.process;
export const toolkit: { group: string; items: string[] }[] = personalData.toolkit;
export const industries: string[] = personalData.industries;