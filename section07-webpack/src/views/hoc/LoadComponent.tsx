import React, { FC, useState, useEffect, ComponentType } from "react";


const loadComponent = (moduleName: string, lazyLoader: () => Promise<any>) => {

  const ComponentLoader: FC = (props: any) => {
    
    const [ state, setState ] = useState<ComponentLoaderState>({ component: null });
    const _loadComponent = async () => {
      const module = await lazyLoader();
      setState({ component: module[moduleName] });
    }

    useEffect(() => { _loadComponent(); }, []);

    const LoadedComponent = state.component;
    if (!LoadedComponent) return null;
    return <LoadedComponent {...props} />;
  }

  return ComponentLoader;
}

interface ComponentLoaderState {
  component: ComponentType | null;
}

export { loadComponent };