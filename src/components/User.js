const User = () => {
  return (
    <div className="user_profile">
      <div className="user_box1 user_box">
        <div className="user_content">
          <div className="user_image">
            <img
              src="https://i.postimg.cc/bryMmCQB/profile-image.jpg"
              alt="Profile Image"
            />
          </div>
          <div className="user_level">
            <p>PRO</p>
          </div>
          <div className="user_text">
            <p className="user_name">Prince Gupta</p>
            <p className="user_job_title">Senior Software Engineer</p>
            <p className="user_job_discription">
              I am a senior Software Engineer at HCL Technology.
            </p>
          </div>
          <div className="user_button">
            <div>
              <button className="user_message" type="button">
                Message
              </button>
            </div>
            <div>
              <button className="user_connect" type="button">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="user_box2 user_box">
        <div className="user_content">
          <div className="user_row">
            <div className="user_image">
              <img
                src="https://i.postimg.cc/bryMmCQB/profile-image.jpg"
                alt="Profile Image"
              />
            </div>
            <div className="user_post">
              <p>Post</p>
              <h5>28</h5>
            </div>
            <div className="user_followers">
              <p>Followers</p>
              <h5>678</h5>
            </div>
            <div className="user_following">
              <p>Following</p>
              <h5>120</h5>
            </div>
          </div>
          <div className="user_text">
            <p className="user_name">Prince Gupta</p>
            <p className="user_job_title">Senior Software Engineer</p>
            <p className="user_about">About</p>
            <p className="user_job_discription">
              I am a senior Software Engineer at HCL Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
