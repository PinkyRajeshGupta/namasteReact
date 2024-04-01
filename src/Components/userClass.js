import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userinfo: {
        name: "",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    console.log("component did mount");
    const data = await fetch("https://api.github.com/users/pinky");
    const datajson = await data.json();
    this.setState({
      userinfo: datajson,
    });
    this.timer = setInterval(() => {
      console.log("mounted    .....");
    }, 2100);
  }
  async componentDidUpdate(preprops, prevstate) {}
  async componentWillUnmount() {
    clearInterval(this.timer);
    //just brfore unmounting
  }
  render() {
    const { name1, location } = this.props;
    const { count2 } = this.state;
    const { name, avatar_url } = this.state.userinfo;
    return (
      <div className="user-card">
        <h1>count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        ></button>
        <h1>count:{count2}</h1>
        <h1>class Name:{name}</h1>
        <h2>Location : {this.props.location} </h2>
        <img src={avatar_url} />
        <h2>email:pinky@quantique.ai</h2>
      </div>
    );
  }
}

export default UserClass;
