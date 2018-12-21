import * as React from 'react';
import './App.css';
import Button from './Button';
import {ThemeProvider, IThemeContext, Theme} from './ThemeContext';

interface IAppState {
	themeContext: IThemeContext;
}

class App extends React.Component<object, IAppState> {

	constructor (props: object) {
		super(props);
		this.state = {
			themeContext: {
				theme: Theme.LIGHT,
				buttonLabel: "Click for dark theme",
				onClick: this.toggleTheme.bind(this)
			}
		}
	}

	public render() {
		return (
			<ThemeProvider value={this.state.themeContext}>
				<div className="App">
					<Button />
				</div>
			</ThemeProvider>
		);
	}

	private toggleTheme(){
		console.log("toggling theme");
		const newThemeContext = Object.assign({}, this.state.themeContext);
		const newTheme = (this.state.themeContext.theme === Theme.LIGHT) ? Theme.DARK : Theme.LIGHT;
		const newButtonLabel = (this.state.themeContext.theme === Theme.LIGHT) ?
			"Click for dark theme" : "Click for light theme";
		newThemeContext.theme = newTheme;
		newThemeContext.buttonLabel = newButtonLabel;
		this.setState({themeContext: newThemeContext});
	}
}



export default App;
