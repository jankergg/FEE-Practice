export class Promisse {
    constructor(executor) {
        // states: 'pending'|'rejected'|'fulfilled'
        this.state = "pending";
        // resolved value
        this.value = null;
        // reject reason
        this.reason = "";

        this.resolveCallbacks = [];
        this.rejectCallbacks = [];

        const resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.resolveCallbacks.map((fn) => fn());
            }
        };

        const reject = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.reason = reason;
                this.rejectCallbacks.map((fn) => fn());
            }
        };

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onResolve, onReject) {
        if (this.state === "pending") {
            this.resolveCallbacks.push(() => onResolve(this.value));
            this.rejectCallbacks.push(() => onReject(this.reason));
        }

        if (this.state === "fulfilled") {
            onResolve(this.value);
            onReject(this.reason);
        }
    }
}
