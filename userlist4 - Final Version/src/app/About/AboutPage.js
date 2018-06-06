import React from 'react';
class AboutPage extends React.Component {
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
        <h1 className="AboutPage">About</h1>

        <p>

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, consequatur fuga? Unde laudantium ab dolore. Obcaecati
          nobis earum, dicta aut voluptatem fuga voluptatum, cumque autem vel nihil repudiandae delectus consectetur? Magni incidunt
          voluptate labore reiciendis odio consequatur, at perspiciatis, explicabo assumenda a reprehenderit recusandae ullam, omnis
          ipsam nostrum esse vel eius id atque dolor maiores facere. Eaque veritatis nihil laudantium. Libero necessitatibus perferendis,
          consequuntur mollitia perspiciatis quisquam cumque laudantium ex hic consequatur modi, maxime similique, doloribus quia
          soluta fugit? Aliquam autem consectetur ipsum, sunt quod labore. Cupiditate, quae ab. Inventore? Illo culpa, tenetur eveniet
          sit minima alias delectus fugiat eligendi consequuntur beatae deleniti eum ea saepe similique. Beatae laboriosam quidem
          inventore quae, asperiores commodi quos iste dolor possimus aspernatur! Doloremque.

        </p>;
      </div>
    );
  }
}

export default AboutPage;
