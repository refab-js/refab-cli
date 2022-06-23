
import axios, { AxiosResponse } from 'axios'



const apiBaseURL: string = "https://api.github.com"
const rawBaseURL: string = "https://raw.githubusercontent.com"

const axiosClient = axios.create({
    baseURL: apiBaseURL
})


const owner = 'refab-js'
const repo = (framework: string) => `refab-${framework}`

const getFilePath = (type: string, fileName: string) => `src/${type}s/${fileName}` 
const getContentsURL = (framework: string, content: string) => `${apiBaseURL}/repos/${owner}/${repo(framework)}/contents/${content}`
const getRawURL = (framework: string, branch: string, path: string) => `${rawBaseURL}/${owner}/${repo(framework)}/${branch}/${path}`

const github = {
    apiBaseURL,
    rawBaseURL,

    owner,
    repo: (framework: string): string => repo(framework),

    endpoints: {
        contents: (framework: string, content: string): string => getContentsURL(framework, content),
        raw: (framework: string, branch: string, path: string): string => getRawURL(framework, branch, path),
    },

    utils: {
        getFilePath,
        getRawURL,
        getRawFileURL: (framework: string, branch: string, type: string, fileName: string) => getRawURL(framework, branch, getFilePath(type, fileName)),
        getDirFiles: (framework: string, type: string, fileName: string): Promise<AxiosResponse> => {
            const url = getContentsURL(framework, getFilePath(type, fileName))
            return axiosClient.get(url)
        }
    }
}

export default github