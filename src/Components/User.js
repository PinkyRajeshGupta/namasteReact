import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return (
      <div className="user-card">
        <h1>Name:{name}</h1>
        <h2>Location : Andheri </h2>
        <h2>email:pinky@quantique.ai</h2>
      </div>
    );
  }
}

// const User = () => {
//   return (
//     <div className="user-card">
//       <h1>Name:Pinky Gupta</h1>
//       <h2>Location : Andheri </h2>
//       <h2>email:pinky@quantique.ai</h2>
//     </div>
//   );
// };

export default UserClass;
