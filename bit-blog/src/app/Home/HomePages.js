import React from 'react';
class HomePages extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showButton: false,
      users: [],
    };
  }
  render () {
    return (
      <div className="container">

        <h1>POSTS</h1>

        <div className="titleBlog">
          <a href="">Title 1</a>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate modi veniam fugiat? Eligendi quam quis
            aperiam praesentium similique........
          </p>
        </div>

        <div className="titleBlog">
          <a href="">Title 1</a>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate modi veniam fugiat? Eligendi quam quis
            aperiam praesentium similique.......
          </p>
        </div>
        <div className="titleBlog">
          <a href="">Title 1</a>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate modi veniam fugiat? Eligendi quam quis
            aperiam praesentium similique.......
          </p>
        </div>
        <div className="titleBlog">
          <a href="">Title 1</a>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate modi veniam fugiat? Eligendi quam quis
            aperiam praesentium similique..........
          </p>
        </div>

      </div>
    );
  }
}

export default HomePages;
