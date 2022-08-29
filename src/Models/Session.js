import { Component } from "react";
class Session extends Component {
  constructor(data) {
    super(data);
    this.data = data.data.sessions;
  }
}
export default Session;
