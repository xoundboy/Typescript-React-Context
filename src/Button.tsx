import * as React from 'react';
import { AppContextConsumer, Theme } from './AppContext';

enum Label {
	LIGHT = "Switch for DARK theme",
	DARK = "Switch for LIGHT theme"
}

class Button extends React.Component {

	private static DARK_STYLE = {
		color: "white",
		background: "black"
	};

	private static LIGHT_STYLE = {
		color: "black",
		background: "white"
	};

	private static getStyleByTheme (theme: Theme) {
		return theme === Theme.LIGHT ? Button.LIGHT_STYLE : Button.DARK_STYLE;
	}

	public render() {
		return (
			<AppContextConsumer>
				{
					(context) => {
						const style = Button.getStyleByTheme(context.theme);
						const label = (context.theme === Theme.LIGHT) ? Label.LIGHT : Label.DARK;
						return (
							<button onClick={context.onClick} style={style}>
								{label}
							</button>
						)
					}
				}
			</AppContextConsumer>
		);
	}
}

export default Button;
