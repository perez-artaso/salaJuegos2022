export class Survey {

    id: string = "";
    user_id: string | undefined;
    name: string;
    last_name: string;
    phone_number: number;
    favourite_game: string;
    gender: string;
    played_all_games: string;
    timestamp: string;

    constructor (user_id: string | undefined, timestamp: string, name: string, last_name: string, phone_number: number,  favourite_game: string, gender: string, played_all_games: string) {
        this.user_id = user_id;
        this.name = name;
        this.last_name = last_name;
        this.phone_number = phone_number;
        this.favourite_game = favourite_game;
        this.gender = gender;
        this.played_all_games = played_all_games;
        this.timestamp = timestamp;
    }

    public getLiteralObjectRepresentation(): any {
        return {
            "user_id": this.user_id,
            "timestamp": this.timestamp,
            "name": this.name,
            "last_name": this.last_name,
            "phone_number": this.phone_number,
            "favourite_game": this.favourite_game,
            "gender": this.gender,
            "played_all_games": this.played_all_games
        }
    }

}