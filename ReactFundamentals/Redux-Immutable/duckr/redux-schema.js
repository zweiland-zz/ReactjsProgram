{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar
      }
    }
  },
  ducks: {
    [duckId]: {
      info: {
        avatar,
        duckIdname,
        text,
        timestamp,
        uid
      }
    }
  },
  userDucks: {
    [uid]: {

    }
  }
}
