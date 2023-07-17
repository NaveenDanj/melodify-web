export interface UserAdditionalData {
    displayName: string;
    email: string;
    phoneNumber: string;
    photoURL: string;
    uid: string;
    playLists: PlayList[];
    recentlyPlayed: PlayList[];
    likedPlaylist: PlayList[];
    recentlyPlayedSongs: Song[];
    likedSongs: Song[]
}

export interface PlayList{
    uid: string;
    name: string;
    ownedBy: string;
    songs : Song[]
}

export interface Song {
    artist: string;
    destinationPath: string;
    originalTitle: string;
    path: string;
    url: string;
    meta : object;
}