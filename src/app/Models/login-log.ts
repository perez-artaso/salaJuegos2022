export class LoginLog {

    user_email: string;
    timestamp: string;

    constructor (user_email: string, timestamp: string) {
        this.user_email = user_email;
        this.timestamp = timestamp;
    }

    public getLiteralObjectRepresentation(): any {
        return {
            "user_email": this.user_email,
            "timestamp": this.timestamp 
        }
    }

}
