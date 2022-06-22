import { Command, Flags } from '@oclif/core'
import { AxiosResponse } from 'axios'

import github from '../../helpers/github'
import { downloadFile, ensureExists } from '../../helpers/file'


export default class Generate extends Command {
    static aliases = ['g',]

    static description = 'Generates prefabricated files, e.g. component, page, ...'

    static examples = [
        '<%= config.bin %> <%= command.id %>',
    ]

    static flags = {

    }

    static args = [
        {
            name: 'type',
            required: true,
            description: 'Choose the type of file to get generated, e.g. component, page, ...',
            options: ['component', 'page'],
        },
        {
            name: 'file',
            required: true,
            description: 'Choose the the file you want to get generated, e.g. login, register, ... (See docs for all available files)',
        },
    ]

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(Generate)
        const files: AxiosResponse = await github.utils.getDirFiles('react', args.type, args.file)

        for (let file of files.data) {
            const projectDir = '/home/al/dev/refab-cli/' 
            const devDir = 'generated/'
            const localDir = 'src/' + args.type + 's/' + args.file + '/'
            const dir = projectDir + devDir + localDir
            const fileDir = dir + file.name
            this.log('Generating file ' + localDir + file.name)
            const url = github.utils.getRawURL('react', 'main', args.type, args.file) + '/' + file.name
            ensureExists(dir)
            await downloadFile(url, fileDir)
        }
    }
}
