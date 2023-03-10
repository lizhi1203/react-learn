import React from 'react';
import RouterContext from './Context';
import LifeCycle from './LifeCycle';

export default function Prompt({ message, when = true}) {
  return (
    <RouterContext.Consumer>
      {context => {
        if (!when) {
          return null;
        }
        const method = context.history.block;
        return (
          <LifeCycle
            onMount={self => {
              self.release = method(message)
            }}
            onUnMount={self => {
              self.release()
            }}
          />
        )
      }}
    </RouterContext.Consumer>
  );
}