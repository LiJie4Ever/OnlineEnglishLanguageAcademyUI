import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from 'actions/counter';

class Counter extends PureComponent {
    render() {
        return (
            <div>
                <div>The current number is {this.props.counter.count}</div>
                <button onClick={() => this.props.increment()}>increase
                </button>
                <button onClick={() => this.props.decrement()}>decrease
                </button>
                <button onClick={() => this.props.reset()}>reset
                </button>
            </div>
        )
    }
}
export default connect((counter) => counter, dispatch => ({
    increment: () => {
        dispatch(increment())
    },
    decrement: () => {
        dispatch(decrement())
    },
    reset: () => {
        dispatch(reset())
    }
}))(Counter);