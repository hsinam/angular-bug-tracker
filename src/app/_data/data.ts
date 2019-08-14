import { Bug } from '../_models/bug.model';

export const bugs: Bug[] = [
  {
    id: 1,
    title: 'API call to x failed',
    description: 'Lorem ipsum...',
    severity: 'High',
    isResolved: false
  },
  {
    id: 2,
    title: 'UI freezes after page reload',
    description: 'Lorem ipsum...',
    severity: 'High',
    isResolved: false
  }
];
