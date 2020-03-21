import { DefaultTheme } from 'styled-components'
import 'styled-components'

const lightTheme = {
	body: '#f8f8f8',
	text: '#333',
	inputText: '#fff',
	color: '#fff',
	toggleBorder: '#fff',
	foodItem_bgcolor: '#fff',
	whitebg: '#fff',
	btnbg: '#FF7714',
	categoryColor: '#333',
	bgCart: '#FFF',
	foodItemTextSpan: '#FFF',
	AvailableBox: '#FFF',
	AvailableBoxText: '#888'
};

const darkTheme = {
	body: '#1D1C2A',
	text: '#FFF',
	inputText: '#fff',
	color: '#FFF',
	toggleBorder: '#6B8096',
	foodItem_bgcolor: '#1D1C2A',
	whitebg: '#373737',
	foodItemTextSpan: "#fff",
	btnbg: '#FF7714',
	categoryColor: '#FF7714',
	bgCart: '#373737',
	AvailableBox: '#373737',
	AvailableBoxText: '#FFF'
};

export const themes = {
	light: lightTheme,
	dark: darkTheme
}