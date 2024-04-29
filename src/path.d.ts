// This is the declaration file mentioned for the error d.ts file could not be found for path module in vite.config.ts but it is not working or typescript is not recognising this declaration file even though it is mentioned as i donot know where to mention it for typescript recognition or what tsconfig.ts compiler options should be mentioned so alternatively i used package called @type/node which has type declaration for path

declare module 'path' {
  function normalize(p: string): string;
  function join(...paths: string[]): string;
  function resolve(...pathSegments: string[]): string;
  function isAbsolute(path: string): boolean;
  function relative(from: string, to: string): string;
  function dirname(p: string): string;
  function basename(p: string, ext?: string): string;
  function extname(p: string): string;
  function format(pathObject: {
    dir?: string;
    root?: string;
    base?: string;
    name?: string;
    ext?: string;
  }): string;
  function parse(pathString: string): {
    root: string;
    dir: string;
    base: string;
    ext: string;
    name: string;
  };
}
