import React from 'react';
var date = new Date();
function Footer(){
return(
<footer> @Copyright {date.getFullYear()} </footer>
);
}
export default Footer;