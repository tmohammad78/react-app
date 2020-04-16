import { truncate } from './index';
test('its object to array ', () => {
	let string = 'cheese , sd  , df , dfd';
	console.log(truncate(string,2));
})