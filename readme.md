# HitsTop v2
Lägg in en div och positionera den på ett visst avstånd från toppen.
````html
<body>
	<div id="js-hitstop" style="width: 100%; height: 1px; position: absolute; top: 100px;"></div>
	<header class="header">
		...
	</header>
</body>
````

````javascript
// Importera modulen (Kräver Webpack)
import HitsTop from './Hitstop';

// Elementet som det ska hända någonting med när trigger-div:en slår i toppen.
const header = document.querySelector('.header');

// Inita HitsTop. Första argumentet är elementet som "ska slå i toppen."
// Andra argumentet är en callback med vad som ska hända när elementet passerar toppen.
new HitsTop(document.getElementById('js-hitstop'), function(hasPassedTheTop, element) {
	if (hasPassedTheTop) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');
	}
});
````

# HitsTop v1

## jQuery (gamla)

````javascript
$('.element').hitsTop(function (hasHitTheTop) {
	if (hasHitTheTop) {
		// Do something...
	}
});
````