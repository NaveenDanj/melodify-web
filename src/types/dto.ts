export interface SearchResults {
    album: AlbumDTO ;
    artist: ArtistDTO;
    duration: number;
    explicit_content_cover: number;
    explicit_content_lyrics: number;
    explicit_lyrics: boolean;
    id: number;
    link: string;
    md5_image: string;
    preview: string;
    rank: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    type:string;
    destination_path:string;
}


export interface AlbumDTO {
    cover: string;
    cover_big:string;
    cover_medium:string;
    cover_small:string;
    cover_xl:string;
    id:number;
    md5_image:string;
    title:string;
    tracklist:string;
    type:string;
}

export interface ArtistDTO {
    id: number;
    link : string;
    name: string;
    picture: string;
    picture_big: string;
    picture_medium: string;
    picture_small: string;
    picture_xl: string;
    tracklist:string;
    type:string;
}

export interface MusicMetaDataDTO {
    photoURL: string;
    title: string;
    artist: string;
}