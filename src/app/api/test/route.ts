import { Comment } from '@/models/Comment';
import { User } from '@/models/User';
import { connectToDb } from '@/utils/db/connect';
import { NextRequest, NextResponse } from 'next/server';
import { Series } from '@/models/Series';
import { WatchList } from '@/models/WatchList';
import { Movie } from '@/models/Movie';
import { Episodes } from '@/models/Episodes';
import { Season } from '@/models/Season';

export const GET = async (request: NextRequest) => {
  try {
    await connectToDb();
    console.log('request handled');
    return NextResponse.json({ message: 'YEYYYYYY!' }, { status: 200 });

    //   Practices

    const users = await User.find();
    const comments = await Comment.find();
    const movies = await Movie.find();
    const series = await Series.find();
    const watchLists = await WatchList.find();
    const episodes = await Episodes.find();
    console.log(users, 'Users from route');
    console.log('request handled');

    //   Save User

    const userData = {
      name: 'Edmont Dante',
      username: 'The Count of Monte Cristo',
      email: 'alexander@dumas.com',
      password: 'revenge',
      profilePicture:
        'https://images.pexels.com/photos/19415783/pexels-photo-19415783/free-photo-of-adam-takim-elbise-oturmak-bagbozumu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      age: 36,
    };
    const user = new User(userData);
    await user.save();
  } catch (error) {
    console.log('request failed');
    return NextResponse.json(
      { message: "things didn't go well" },
      { status: 500 }
    );
  }
  try {
    await connectToDb();
    const episodesData = {
      episodes: [
        { id: 1, title: 'Dio/Jonathan', body: 'Start of a legend', url: '' },
      ],
    };
    const episodes = new User(episodesData);
    await episodes.save();

    const episodeData = {
      episodes: [
        { id: '1', title: 'Dio/Jonathan', body: 'A legend born!', url: '' },
      ],
    };

    const episode = new Episodes(episodeData);
    episode.save();

    const seriesData = {
      title: 'The Count of Monte Cristo Series Fixed',
      year: '1954 October 5',
      rated: '9.5',
      released: '1954',
      runtime: '108',
      genre: 'Drama',
      director: ['Christopher Nolan?'],
      writer: ['Alexander Dumas'],
      actors: ['Christian Bale?'],
      plot: 'Sint Lorem excepteur esse tempor est non. Fugiat adipisicing non est cupidatat qui. Magna laboris dolor sit incididunt id enim ipsum cupidatat magna deserunt dolore. Non quis sunt aliquip labore aliqua ullamco irure consectetur officia incididunt ullamco mollit laboris laborum. Est amet tempor elit non. Do ex labore exercitation pariatur qui',
      language: 'English , French',
      country: 'France',
      awards:
        'Excepteur laboris incididunt mollit commodo ex incididunt ad pariatur aute consequat sunt ullamco id. Irure voluptate occaecat reprehenderit adipisicing amet amet non adipisicing ullamco. Id est qui reprehenderit magna cillum veniam enim excepteur ea anim consequat. Dolor pariatur Lorem laborum aliqua anim id do dolor id ipsum id ea.',
      poster:
        'https://images.pexels.com/photos/19415783/pexels-photo-19415783/free-photo-of-adam-takim-elbise-oturmak-bagbozumu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      ratings: [
        { source: 'bla', value: '9.5', _id: '65aed3adf468c6f384162257' },
        { source: 'bla', value: '9.5', _id: '65aed3adf468c6f384162258' },
      ],
      metaScore: '9/0',
      imdbRating: '9.5',
      imdbVotes: '1,023,12',
      imdbId: 'blabla',
      totalSeasons: 2,
      seasons: [],
      comments: [],
    };

    const series = new Series(seriesData);
    series.save();

    return NextResponse.json(series);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "things didn't go well" },
      { status: 500 }
    );
  }
};
