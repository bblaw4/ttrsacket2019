import React from "react";

class AddTicketForm extends React.Component {
  constructor() {
    super();
    this.state = {
      ticket: "",
      name: "",
      unit: "",
      desc: "",
      completed: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTicket(this.state);
    this.setState({
      ticket: "",
      name: "",
      unit: "",
      desc: ""
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            ticket#:
            <input
              type="text"
              name="ticket"
              value={this.state.ticket}
              onChange={this.onChange}
            />
          </div>
          <div>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div>
            Unit:
            <input
              type="text"
              name="unit"
              value={this.state.unit}
              onChange={this.onChange}
            />
          </div>
          <div>
            Description:
            <input
              type="text"
              name="desc"
              value={this.state.desc}
              onChange={this.onChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddTicketForm;
