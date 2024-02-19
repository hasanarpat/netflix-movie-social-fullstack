import Image from 'next/image';
import './comment.scss';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';

const Comment = ({ img }: { img: string }) => {
  return (
    <div className='comment'>
      <div className='singleComment'>
        <Image
          alt=''
          src={img}
          className='singleCommentAvatar'
          width={50}
          height={50}
        />
        <div className='commentDivider'>
          <p className='singleCommentDetails'>
            <span>Dave Mustain</span>
            <span>3 years ago</span>
          </p>
          <p className='singleCommentDesc'>
            Veniam dolor qui cillum aliqua proident. Et magna dolor officia
            mollit enim cillum do non. Mollit sit eu culpa adipisicing enim
            aliquip officia. Occaecat laboris est elit amet. Eu nisi sunt
            cupidatat aliquip ullamco ipsum id ex voluptate est sunt. Anim
            fugiat elit pariatur mollit dolore quis magna occaecat incididunt
            velit magna commodo.
          </p>
        </div>
      </div>
      <div className='buttons'>
        <div className='commentIcons'>
          <AiOutlineLike className='commentIcon' />
          <BiDislike className='commentIcon' />
          <span className='singleCommentAnswer'>Comment</span>
        </div>
        <p className='singleCommentSeeOthers'>See other 6 comments</p>
      </div>
    </div>
  );
};

export default Comment;
