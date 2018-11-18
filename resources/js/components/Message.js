import React, { Component } from 'react';
import { connect} from 'react-redux';
import ReactDOM from 'react-dom';

class Message extends Component {
    render() {
        let className = 'message-body ' + (this.props.data.sender_id === this.props.user.id || !this.props.data.sender_id ? 'sent' : 'received');
        return (
          <div className="message">
            <span className={className}>
            {this.props.data.body}
            </span>
          </div>
        );
    }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Message);
