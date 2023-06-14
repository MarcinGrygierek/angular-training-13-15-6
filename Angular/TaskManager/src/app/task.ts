export enum TaskStatus {
    New = 'New',
    InProgress = 'InProgress',
    Done = 'Done',
}

export class Task {
    private _name: string;
    private _status: TaskStatus = TaskStatus.New;
    private readonly _id: number = Math.round(Math.random() * 1000) + new Date().getTime();

    constructor(name: string) {
        this._name = name;
    }

    setNew() {
        this._status = TaskStatus.New;
    }

    setInProgress() {
        this._status = TaskStatus.InProgress;
    }

    
    setDone() {
        this._status = TaskStatus.Done;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get status() {
        return this._status;
    }

    set status(newStatus: TaskStatus) {
        this._status = newStatus;
    }

    get isNew() {
        return this._status === TaskStatus.New;
    }

    get isInProgress() {
        return this._status === TaskStatus.InProgress;
    }

    get isDone() {
        return this._status === TaskStatus.Done;
    }
}
