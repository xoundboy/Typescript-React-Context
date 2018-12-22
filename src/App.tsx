import * as React from 'react';
import './App.css';
import Button from './Button';
import {AppContextProvider, IAppContext, Theme} from './AppContext';

interface IAppState {
	context: IAppContext;
}

class App extends React.Component<object, IAppState> {

	constructor (props: object) {
		super(props);
		this.state = {
			context: {
				theme: Theme.LIGHT,
				onClick: this.toggleTheme.bind(this)
			}
		}
	}

	public render() {
		return (
			<AppContextProvider value={this.state.context}>
				<div className="App">
					<Button />
				</div>
			</AppContextProvider>
		);
	}

	private toggleTheme(){
		const newThemeContext = Object.assign({}, this.state.context);
		newThemeContext.theme = (this.state.context.theme === Theme.LIGHT) ? Theme.DARK : Theme.LIGHT;
		this.setState({context: newThemeContext});
	}
}



export default App;
