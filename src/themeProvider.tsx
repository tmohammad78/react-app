import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme/theme';

interface IDefaultState {
	theme: string
	toggle: () => void
}

const defaultState: IDefaultState = {
	theme: 'light',
	toggle: () => {
	}
};
export const ThemeToggleContext = React.createContext(defaultState);

export const ThemeProviderApp = ({ children }: any) => {
	const [theme, setThemeState] = React.useState('light');

	const setMode = (mode: string) => {
		window.localStorage.setItem('theme', mode);
		setThemeState(mode);
	};
	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
			? setMode('dark')
			: localTheme
			? setThemeState(localTheme)
			: setMode('light');
	}, []);
	const toggle = () => {
		setThemeState(theme === 'light' ? 'dark' : 'light');
	};


	return (
		<ThemeToggleContext.Provider value={{ theme, toggle }}>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				{children}
			</ThemeProvider>
		</ThemeToggleContext.Provider>
	);
};
export default ThemeProviderApp;
