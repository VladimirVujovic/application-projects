import React from 'react';
import MorePosts from './MorePosts';
class PostTitle extends React.Component {
  render () {
    return (
      <div className="container">

        <h1>POSTS</h1>

        <a href="">Author Name</a>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fugit dolores rem dolorem in dicta accusantium dignissimos
          provident? Voluptates vitae necessitatibus consectetur autem veritatis quibusdam aperiam suscipit aspernatur illo molestiae!
          Culpa obcaecati molestias eaque possimus modi? Eligendi, quibusdam. Unde qui assumenda aperiam placeat cupiditate at nam
          ducimus natus dolorem quasi. Doloremque fugiat aspernatur omnis, aut nisi obcaecati at consectetur dolores. Odio veritatis
          commodi labore, repudiandae, harum quia quae rem voluptatum sed quam molestias odit nostrum totam? Id, ut quibusdam distinctio
          eius in quae quis fugiat laboriosam quisquam, cupiditate incidunt possimus? Modi porro earum illum accusantium. Ducimus
          officia et officiis cumque corrupti provident excepturi non. Tenetur eaque, id, aliquam expedita distinctio praesentium
          esse consequatur aut ipsa architecto quibusdam ab exercitationem temporibus!
        </p>
        <MorePosts />
      </div>
    );
  }
}

export default PostTitle;
