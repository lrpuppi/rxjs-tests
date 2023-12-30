import './style.css';

import { rx, of, map } from 'rxjs';

const array = ['one','two']

rx(
  of('World','Earth'),
  map((name) => `Hello, ${name}!`)
).subscribe(console.log);

// Open the console in the bottom right to see results.
