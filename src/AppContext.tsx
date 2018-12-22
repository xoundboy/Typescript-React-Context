import {createContext, MouseEvent} from 'react';

export enum Theme {
	LIGHT = "light",
	DARK = "dark"
}

export interface IAppContext {
	theme: Theme;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const defaultContext = {
	theme: Theme.LIGHT,
	onClick: (event: MouseEvent<HTMLButtonElement>) => {
		console.log(event);
	}
};

const AppContext = createContext(defaultContext);

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
