export class MOMScore {

    id: string = "";
    user_id: string | undefined;
    user_email: string | undefined | null;
    score: number;
    timestamp: string;

    constructor (user_id: string | undefined, user_email: string | undefined | null, score: number, timestamp: string) {
        this.user_id = user_id;
        this.user_email = user_email;
        this.score = score;
        this.timestamp = timestamp;
    }

    public getLiteralObjectRepresentation(): any {
        return {
            "user_id": this.user_id,
            "user_email": this.user_email,
            "score": this.score,
            "timestamp": this.timestamp
        }
    }

}