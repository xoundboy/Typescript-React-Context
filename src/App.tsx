import * as React from 'react';
import './App.css';
import Button from './Button';
import {AppContextProvider, Theme} from './AppContext';
import {MouseEvent} from 'react';

export interface IAppContext {
	theme: Theme;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

class App extends React.Component<object, IAppContext> {

	constructor (props: object) {
		super(props);
		this.state = {
			theme: Theme.LIGHT,
			onClick: this.toggleTheme.bind(this)
		}
	}

	public render() {
		return (
			<AppContextProvider value={this.state}>
				<div className="App">
					<Button />
				</div>
			</AppContextProvider>
		);
	}

	private toggleTheme(){
		this.setState({theme: (this.state.theme === Theme.LIGHT) ? Theme.DARK : Theme.LIGHT});
	}
}

export default App;
