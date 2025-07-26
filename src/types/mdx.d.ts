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
      DocsNavigation: {
        previous?: {
          href: string;
          title: string;
          description?: string;
        };
        next?: {
          href: string;
          title: string;
          description?: string;
        };
      };
    }
  }
}

export {};
