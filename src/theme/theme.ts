interface ILightTheme {
	body: string,
	text: string
	inputText: string,
	color: string,
	toggleBorder: string,
	foodItem_bgcolor: string,
	whitebg: string,
	btnbg: string,
	categoryColor: string,
	bgCart: string,
	foodItemTextSpan: string,
	AvailableBox: string,
	AvailableBoxText: string
}
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

interface StyleClosetTheme {
	lightTheme: { [key in keyof typeof lightTheme]: string };
	darkTheme: { [key in keyof typeof darkTheme]: string };
}
const theme: StyleClosetTheme = {
	lightTheme,
	darkTheme
};

export { theme, StyleClosetTheme };

// export const themes = {
// 	light: lightTheme,
// 	dark: darkTheme
// }