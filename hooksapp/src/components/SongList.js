import React, { useState } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([
      ...songs,
      {
        title,
        id: 4,
      },
    ]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song, index) => {
          return <li key={index}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
