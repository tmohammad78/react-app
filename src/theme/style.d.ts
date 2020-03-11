// import original module declaration
import 'styled-components';

// and extend it
declare module 'styled-components' {
	export interface DefaultTheme {
		body: {
			light: string,
			dark: string
		},
		text: {
			light: string,
			dark: string
		},
		inputText: {
			light: string,
			dark: string
		},
		color: {
			light: string,
			dark: string
		},
		toggleBorder: {
			light: string,
			dark: string
		},
		foodItem_bgcolor: {
			light: string,
			dark: string
		},
		whitebg: {
			light: string,
			dark: string
		},
		btnbg: {
			light: string,
			dark: string
		},
		categoryColor: {
			light: string,
			dark: string
		},
		bgCart: {
			light: string,
			dark: string
		},
		foodItemTextSpan: {
			light: string,
			dark: string
		},
		AvailableBox: {
			light: string,
			dark: string
		},
		AvailableBoxText: {
			light: string,
			dark: string
		},
	}
}