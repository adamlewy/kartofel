import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {increment} from "./actions/counter";

@connect(mapStateToProps, mapActionsToProps)
export class Index extends React.Component<any, any> {
	public render(): JSX.Element {
		return (
			<div>
				<h1>{this.props.counter}</h1>
				<button onClick={() => this.props.increment()}>test</button>
			</div>
		);
	}
}

function mapStateToProps(store: any): any {
	return {
		counter: store.counter.counter
	}
}

function mapActionsToProps(dispatch: Dispatch<any>): any {
	return bindActionCreators({
		increment
	}, dispatch);
}