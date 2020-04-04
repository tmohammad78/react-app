import { createBrowserHistory } from 'history';
const IS_BROWSER = typeof window !== 'undefined';
export const browserHistory = IS_BROWSER ? createBrowserHistory() : { push: () => '' };
