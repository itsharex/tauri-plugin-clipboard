export declare const TEXT_CHANGED = "text_changed";
export declare const IMAGE_CHANGED = "image_changed";
export declare function writeText(text: string): Promise<void>;
export declare function readText(): Promise<string>;
/**
 * read clipboard image
 * @returns image in base64 string
 */
export declare function readImage(): Promise<string>;
/**
 * write image to clipboard
 * @param data image data in base64 encoded string
 * @returns Promise<void>
 */
export declare function writeImage(data: string): Promise<void>;
export declare function listenText(delay?: number): Promise<void>;
export declare function listenImage(delay?: number): Promise<void>;
