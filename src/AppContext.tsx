import {createContext, MouseEvent} from 'react';

export enum Theme {
	LIGHT = "light",
	DARK = "dark"
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
