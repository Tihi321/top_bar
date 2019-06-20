/* import style */
import "../scss/style.scss";

/* import images */
let requireImages = require.context('../assets/images', true, /\.(png|jpg)$/);
requireImages.keys().forEach(requireImages);

/* import data */
let requireData = require.context('../assets/data', true, /\.json$/);
requireData.keys().forEach(requireData);




/* import modules */
import { ReactApp } from './react-app.jsx';
import { script } from './modules/script';

/* additional scripts */

window.onload = init;

/*starter function */
function init() {
    

    let shows = new ReactApp();

    script();
}