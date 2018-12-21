import * as React from 'react';
import {Theme, ThemeConsumer} from './ThemeContext';

const DARK_BUTTON = {
	color: "white",
	background: "black"
};

const LIGHT_BUTTON = {
	color: "black",
	background: "white"
};

class Button extends React.Component {

	public render() {
		return (
			<ThemeConsumer>
				{
					themeContext => {
						const style = themeContext.theme === Theme.LIGHT ? DARK_BUTTON : LIGHT_BUTTON;
						return (
							<button onClick={themeContext.onClick} style={style}>
								{themeContext.buttonLabel}
							</button>
						)
					}
				}
			</ThemeConsumer>
		);
	}
}

export default Button;
