export class HomeGameWindow {

    _game_url: string;
    _photo_url: string;
    _game_description: string;
    _game_title: string;

    constructor ( game_url: string, photo_url: string, game_description: string, game_title: string ) {
        this._game_description = game_description;
        this._game_url = game_url;
        this._photo_url = photo_url;
        this._game_title = game_title;
    }

}