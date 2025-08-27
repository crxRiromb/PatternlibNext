export * from './components/base/pl-base';
export * from './components/button/pl-button';
export * from './components/icon/pl-icon';
export * from './components/itemlist/pl-itemlist';

// Robust against Custom Elements HMR: full reload when source code is changed
if (import.meta && (import.meta as any).hot) {
  (import.meta as any).hot.accept(() => (import.meta as any).hot!.invalidate());
}
