import React, { useState, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './Context';

export default function UseContextPage(props) {
  const [theme, setTheme] = useState({ theme: { themeColor: 'red' } })
  return (
    <div>
      <h3>UseContextPage</h3>
      <ThemeProvider value={theme}>
        <Child />
      </ThemeProvider>
    </div>
  );
}

function Child(props) {
  const ctx = useContext(ThemeContext)
  return (
    <div>
      <h3 className={ctx.theme.themeColor}>Child</h3>
    </div>
  );
}