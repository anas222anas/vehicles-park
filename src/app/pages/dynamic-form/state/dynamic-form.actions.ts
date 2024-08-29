export class SetConfigForDynamicFormAction {
    static readonly type = '[form] Add config';
    constructor(public payload: any[]) { }
}

export class GetConfigForDynamicFormAction {
    static readonly type = '[form] Get config';
}
