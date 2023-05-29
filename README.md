## Adding CSS normalize

1.1- Downloading the NPM package

`yarn add the-new-css-reset` OR `npm i the-new-css-reset`

1.2 - Importing to the project

Inside `main.jsx` add import `'the-new-css-reset/css/reset.css';` BEFORE the `import './index.css' (the project regular stying)

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'the-new-css-reset/css/reset.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Scaffolding

I'll be using Josh Comeau's approach detailed here and his package: https://www.joshwcomeau.com/react/file-structure/

1.1 - Download the NPM package

`yarn global add new-component` OR `npm i -g new-component`

1.2 - Using it

Inside `yourProjectFolder/`

Do: `new-component MyNewComponent`

Result:

```jsx

yourProjectFolder
|
|___globalStyles.css
|
|___main.jsx
|
|__index.html
|
|___src
	|__components
	 	     |__App
		     |     |__App.jsx
		     |     |__index.jsx
		     |
		     |__ComponentA
		     |           |_ComponentA.jsx
		     |           |_index.jsx
	   	     |
		     |__ComponentB
	   	                 |_ComponentB.jsx
			         |_index.jsx

```

## CSS Modules

1. Inside each Component folder, create a `styles.module.css`

```jsx
|___ComponentA
             |_ComponentA.jsx
             |_index.jsx
             |_styles.module.css

```

2. Use it inside the ComponentA.jsx

```jsx
import React from 'react';
import styles from './styles.module.css';

function ComponentA() {
  return <h1 className={styles.h1}>Hello world</h1>;
}

export default ComponentA;
```

## Basic global CSS I added

```css
* {
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;
}
body {
  min-height: 100vh;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
```
