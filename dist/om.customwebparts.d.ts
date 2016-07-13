/// <reference path="../typings/main.d.ts" />
declare namespace OM.CustomWebParts {
    class WebPart {
        instance: any;
        id: Array<string>;
        renderfunction: string;
        properties: Array<Object>;
        render(): void;
        constructor(element: any);
    }
    var WebParts: any[];
    namespace Manager {
        function Init(): void;
        function Render(webpart: WebPart): void;
    }
}