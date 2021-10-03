
import localKeys from './local';
import serverKeys from './server'

let isDevOrLocal = window.location.href.includes('dev') ? window.location.href.includes('dev') : window.location.href.includes('localhost') ? window.location.href.includes('localhost') : null
const keys = isDevOrLocal ? serverKeys : localKeys;

export default keys;
