declare global {
  namespace JSX {
    interface IntrinsicElements {
      Section: {
        children: React.ReactNode;
        icon?: React.ComponentType<any>;
      };
      Alert: {
        children: React.ReactNode;
        type?: 'warning' | 'info' | 'error';
      };
      BackLink: {};
    }
  }
}

export {};
