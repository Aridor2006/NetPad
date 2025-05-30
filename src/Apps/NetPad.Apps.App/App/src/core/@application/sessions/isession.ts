import {DI} from "aurelia";
import {ISessionApiClient, ScriptEnvironment} from "@application";

export interface ISession extends ISessionApiClient {
    environments: ReadonlyArray<ScriptEnvironment>;

    get active(): ScriptEnvironment | null | undefined;

    initialize(): Promise<void>;

    getScriptName(scriptId: string): string | undefined;

    activate(scriptId: string, signal?: AbortSignal | undefined): Promise<void>;

    activateLastActive(signal?: AbortSignal | undefined): Promise<void>;
}

export const ISession = DI.createInterface<ISession>();
