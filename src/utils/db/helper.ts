import { Comment } from '@/models/Comment';
import { Episodes } from '@/models/Episodes';
import { Movie } from '@/models/Movie';
import { Series } from '@/models/Series';
import { User } from '@/models/User';
import { WatchList } from '@/models/WatchList';

export const helper = async (
  reqType: string,
  model: string,
  isSingleData: boolean,
  id: string,
  data: any
) => {
  if (isSingleData) {
    switch (reqType) {
      case 'GET':
        return await getOne(model, id);
        break;
      case 'PUT':
        return await putItem(model, id, data);
        break;
      case 'DELETE':
        return await deleteItem(model, id);
        break;

      default:
        break;
    }
  } else {
    switch (reqType) {
      case 'GET':
        return await getAll(model);
        break;
      case 'POST':
        return await postItem(model, data);
        break;

      default:
        break;
    }
  }
};

const getAll = async (model: string) => {
  switch (model) {
    case 'comments':
      return await Comment.find();
      break;
    case 'episodes':
      return await Episodes.find();
      break;
    case 'movies':
      return await Movie.find();
      break;
    case 'series':
      return await Series.find();
      break;
    case 'user':
      return await User.find();
      break;
    case 'watchList':
      return await WatchList.find();
      break;

    default:
      break;
  }
};

const getOne = async (model: string, id: string) => {
  switch (model) {
    case 'comments':
      return await Comment.findById(id);
      break;
    case 'episodes':
      return await Episodes.findById(id);
      break;
    case 'movies':
      return await Movie.findById(id);
      break;
    case 'series':
      return await Series.findById(id);
      break;
    case 'user':
      return await User.findById(id);
      break;
    case 'watchList':
      return await WatchList.findById(id);
      break;

    default:
      break;
  }
};

const postItem = async (model: string, data: any) => {
  switch (model) {
    case 'comments':
      const comment = new Comment(data);
      const commentResponse = await comment.save();
      return commentResponse;
      break;
    case 'episodes':
      const episode = new Episodes(data);
      const episodeResponse = await episode.save();
      return episodeResponse;
      break;
    case 'movies':
      const movie = new Movie(data);
      const movieResponse = await movie.save();
      return movieResponse;
      break;
    case 'series':
      const series = new Series(data);
      const seriesResponse = await series.save();
      return seriesResponse;
      break;
    case 'user':
      const user = new User(data);
      const userResponse = await user.save();
      return userResponse;
      break;
    case 'watchList':
      const watchList = new WatchList(data);
      const watchListResponse = await watchList.save();
      return watchListResponse;
      break;

    default:
      break;
  }
};

const putItem = async (model: string, id: string, data: any) => {
  switch (model) {
    case 'comments':
      return await Comment.findOneAndReplace({ _id: id }, data);
      break;
    case 'episodes':
      return await Episodes.findOneAndReplace({ _id: id }, data);
      break;
    case 'movies':
      return await Movie.findOneAndReplace({ _id: id }, data);
      break;
    case 'series':
      return await Series.findOneAndReplace({ _id: id }, data);
      break;
    case 'user':
      return await User.findOneAndReplace({ _id: id }, data);
      break;
    // case 'watchList':
    //   return await WatchList.findOneAndReplace({ _id: id }, data);
    //   break;

    default:
      break;
  }
};

const deleteItem = async (model: string, id: string) => {
  switch (model) {
    case 'comments':
      return await Comment.findByIdAndDelete(id);
      break;
    case 'episodes':
      return await Episodes.findByIdAndDelete(id);
      break;
    case 'movies':
      return await Movie.findByIdAndDelete(id);
      break;
    case 'series':
      return await Series.findByIdAndDelete(id);
      break;
    case 'user':
      return await User.findByIdAndDelete(id);
      break;
    // case 'watchList':
    //   return await User.findByIdAndDelete(id);
    //   break;

    default:
      break;
  }
};
