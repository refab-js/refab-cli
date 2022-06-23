import { createReadStream, createWriteStream, existsSync, mkdirSync, readFileSync } from 'fs';
import * as stream from 'stream';
import { promisify } from 'util';
import { createInterface } from 'readline';
import axios from 'axios'

const finished = promisify(stream.finished);

export const download = async (url: string, path: string): Promise<any> => {
  const writer = createWriteStream(path);
  return axios({
    method: 'get',
    url,
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

export const read = async (path: string) => {
  const fileStream = readFileSync(path);

  return fileStream
}

export default {
  ensureExists,
  download,
  read,
}