import React, { useEffect, useState } from "react";

export const UserInfo = (props) => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({});
  const { name, location } = info;

  useEffect(() => {
    userAPI();
  }, []);
  const userAPI = async () => {
    const userAPI = await fetch("https://api.github.com/users/Prince8488");
    const data = await userAPI.json();
    setInfo(data);
  };
  return (
    <div>
      <h2>Fn Component</h2>
      <br />
      <button
        className="user_button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <ul>
        <li>Count: {count}</li>
        <li>Name: {name}</li>
        <li>Location: {location}</li>
      </ul>
    </div>
  );
};

export class UserInfoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      info: {},
    };
  }
  async componentDidMount() {
    const userAPI = await fetch("https://api.github.com/users/Prince8488");
    const data = await userAPI.json();
    this.setState({
      info: data,
    });
  }

  render() {
    const { name, location, component } = this.state.info;
    const { count } = this.state;
    return (
      <div>
        <h2>Class Component</h2>
        <br />
        <button
          className="user_button"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          click
        </button>
        <ul>
          <li>Count: {count}</li>
          <li>Name: {name}</li>
          <li>Location: {location}</li>
        </ul>
      </div>
    );
  }
}
