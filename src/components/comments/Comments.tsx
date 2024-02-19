import Image from 'next/image';
import Comment from './comment/Comment';
import './comments.scss';
import { VscListFlat } from 'react-icons/vsc';
import { getServerSession } from 'next-auth';

const Comments = async () => {
  const session = await getServerSession();

  return (
    <div className='comments'>
      <div className='details'>
        <div className='commentDetails'>
          <strong>983 Comments</strong>
          <div className='sort'>
            <VscListFlat />
            <span>Sorting Value:</span>
          </div>
        </div>
        <hr />
        <div className='addComment'>
          <div className='imgContainer'>
            <Image
              alt=''
              src={session?.user?.image as string}
              fill
              className='avatar'
            />
          </div>
          <div className='writeComment'>
            <form action=''>
              <input type='text' required placeholder='Add a comment...' />
            </form>
          </div>
        </div>
      </div>
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
      <Comment img={session?.user?.image as string} />
    </div>
  );
};

export default Comments;
