import { createWriteStream, existsSync, mkdirSync } from 'fs';
import * as stream from 'stream';
import { promisify } from 'util';
import axios from 'axios'

const finished = promisify(stream.finished);

export const downloadFile = async (fileUrl: string, outputLocationPath: string): Promise<any> => {
    const writer = createWriteStream(outputLocationPath);
    return axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream',
    }).then(response => {
        response.data.pipe(writer);
        return finished(writer);
    });
}

export const ensureExists = (dir: string): void => {
    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }
}