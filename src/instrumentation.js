export async function register() {
  if (typeof window === 'undefined') {
    // Server-side: delete any existing bad localStorage polyfill and provide our own
    if (global.localStorage) {
      delete global.localStorage;
    }

    // Provide a proper localStorage polyfill
    Object.defineProperty(global, 'localStorage', {
      value: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        key: () => null,
        length: 0,
      },
      writable: true,
      configurable: true,
    });
  }
}
