import { UserInfo, UserInfoClass } from "./UserInfo";
const About = () => {
  return (
    <div className="user_profile">
      <div className="card content user_padding">
        <UserInfo
          name={"Prince"}
          location={"Bangalore"}
          component={"Functional"}
        />
      </div>
      <div className="card content user_padding">
        <UserInfoClass
          name={"Prince"}
          location={"Bangalore"}
          component={"Class"}
        />
      </div>
    </div>
  );
};
export default About;
