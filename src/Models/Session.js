import { Component } from "react";
class Session extends Component {
  constructor(data) {
    super(data);
    this.id = localStorage.getItem("id");
    if (this.id === "12" || this.id === "18") {
      this.data = data.data.sessions;
    }
  }
}
export default Session;
