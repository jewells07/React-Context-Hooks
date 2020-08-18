import React, { useState } from 'react';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ]);

  const addSong = () => {
    setSongs([
      ...songs,
      {
        title: 'New Song',
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
      <button onClick={addSong}>Add a Song</button>
    </div>
  );
};

export default SongList;
