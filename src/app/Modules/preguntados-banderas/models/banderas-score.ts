export class BanderasScore {

    id: string = "";
    user_id: string | undefined;
    score: number;
    timestamp: string;

    constructor (user_id: string | undefined, score: number, timestamp: string) {
        this.user_id = user_id;
        this.score = score;
        this.timestamp = timestamp;
    }

    public getLiteralObjectRepresentation(): any {
        return {
            "user_id": this.user_id,
            "score": this.score,
            "timestamp": this.timestamp
        }
    }

}