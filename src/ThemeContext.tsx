import {createContext, MouseEvent} from 'react';

export enum Theme {
	LIGHT = "light",
	DARK = "dark"
}

export interface IThemeContext {
	theme: Theme;
	buttonLabel: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const defaultThemeContext = {
	theme: Theme.LIGHT,
	buttonLabel: "Switch for Dark",
	onClick: (event: MouseEvent<HTMLButtonElement>) => {
		console.log(event);
	}
};

export const ThemeContext = createContext<IThemeContext> (defaultThemeContext);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
