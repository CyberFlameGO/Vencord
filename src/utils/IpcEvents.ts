type Enum<T extends Record<string, string>> = {
    [k in keyof T]: T[k];
} & { [v in keyof T as T[v]]: v; };

function strEnum<T extends Record<string, string>>(obj: T): T {
    const o = {} as T;
    for (const key in obj) {
        o[key] = obj[key] as any;
        o[obj[key]] = key as any;
    };
    return o;
}

export default strEnum({
    QUICK_CSS_UPDATE: "VencordQuickCssUpdate",
    GET_QUICK_CSS: "VencordGetQuickCss",
    GET_SETTINGS_DIR: "VencordGetSettingsDir",
    GET_SETTINGS: "VencordGetSettings",
    SET_SETTINGS: "VencordSetSettings",
    OPEN_EXTERNAL: "VencordOpenExternal",
    OPEN_PATH: "VencordOpenPath",
} as const);
