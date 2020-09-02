import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<DashboardView />, document.getElementById('root2'));

serviceWorker.unregister();
