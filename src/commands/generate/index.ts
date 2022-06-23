import { resolve } from 'path'
import { Command, Flags } from '@oclif/core'
import { AxiosResponse } from 'axios'
import { parse } from '@babel/parser'
import * as npm from 'npm'
import { spawnSync } from 'child_process'

import github from '../../helpers/github'
import fileHelpers from '../../helpers/file'


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
        const framework = 'react'
        const branch = 'main'

        const response: AxiosResponse = await github.utils.getDirFiles(framework, args.type, args.file)
        const files = response.data.filter((file: any) => !file.name.includes('stories'))

        for (let file of files) {
            const projectDir = resolve('.') + '/'
            const devDir = '' // 'generated/'
            const localDir = 'src/' + args.type + 's/' + args.file + '/'
            const dir = projectDir + devDir + localDir
            const fileDir = dir + file.name
            this.log('Generating file ' + localDir + file.name)
            const url = github.utils.getRawFileURL(framework, branch, args.type, args.file) + '/' + file.name
            fileHelpers.ensureExists(dir)
            await fileHelpers.download(url, fileDir)
            const fileContent = fileHelpers.read(fileDir)

            const parsed = parse((await fileContent).toString(), {
                sourceType: "module",

                plugins: [
                    "jsx",
                    "typescript",
                ],
            })
            const imports: any[] = parsed.program.body.filter(node => node.type === 'ImportDeclaration')

            for (let node of imports) {
                const module: string = node.source.value

                const packageJSONURL = github.utils.getRawURL(framework, branch, 'package.json')
                fileHelpers.ensureExists(projectDir + '.refab/')
                await fileHelpers.download(packageJSONURL, projectDir + '.refab/package.json')
                const packageJSON = JSON.parse((await fileHelpers.read(projectDir + '.refab/package.json')).toString())

                if (!module.startsWith('.')) {
                    const version = packageJSON.dependencies[module]
                    console.log("Installing", module, version)
                    const child = spawnSync('yarn', ['add', module]);
                    // const child = spawn('ls');
                    
                    console.log('error', child.error?.message);
                    console.log('stdout ', child.stdout.toString());
                    console.log('stderr ', child.stderr.toString());

                } else {
                    console.log("Adding", module)
                    // const moduleFile = module.split('/')[module.split('/').length - 1]
                    // const moduleType = module.split('/')[module.split('/').length - 2]
                    // const moduleFileURL = github.utils.getRawFileURL(framework, branch, moduleFile, moduleType)
                    // const moduleFileDir = projectDir + 'src/' + moduleType + 's/' + moduleFile + '/' 
                    // fileHelpers.ensureExists(moduleFileDir)

                    // await fileHelpers.download(moduleFileURL, moduleFileDir )
                }
            }
        }
    }
}
