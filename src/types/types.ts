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
    destination_path: string;
    originalTitle: string;
    path: string;
    url: string;
    meta : object;
}

export interface Search {
    user_id : string;
    search_query : string;
    timestamp: number;
    result_count: number;
}

export interface SearchResult {
    song_id : number;
    title: string;
    count : number;
    search_string: string;
    artist_id : number;
    artist_name : string;
    scraper_string: string | null;
    downloaded : boolean;
    available: boolean;
}

