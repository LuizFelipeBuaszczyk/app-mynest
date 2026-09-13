

export class UnathourizedError extends Error {
    public readonly status_code: number;

    constructor(message: string, status_code: number = 400) {
        super(message);

        this.status_code = status_code;
    }
};
