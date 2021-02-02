import fs from 'fs'
import remark from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'
import path from 'path'

const postDirectory = path.join(process.cwd(), 'posts')

export default async function getSortedPostData(){
    const fileNames = fs.readdirSync(postDirectory)
    const allPostData = await Promise.all(fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/,'')
        const fullPath = path.join(postDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')
    
        const matterResult = matter(fileContents)
        let content = matterResult.content
        let dot = 0
        for(let i=0; i<content.length; i++){
            if(content[i] === "."){
                dot++
            }
            if(dot == 5){
                content = content.slice(0,i+1)
                break;
            }
        }
        return{
            id,
            content,
            ...matterResult.data
        }
    }))

    return allPostData.sort((a,b) => {
        if(a.date < b.date){
            return 1
        } else{
            return -1
        }
    })
}

export async function getPostData(id){
    const fullPath = path.join(postDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')


    const matterResult = matter(fileContents)
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHTML = processedContent.toString() 

    return {
        id,
        contentHTML,
        ...matterResult.data
    }
}

export function getAllPostIds(){
    const fileNames = fs.readdirSync(postDirectory)

    return fileNames.map(fileName => {
        return{
        params: {
            id: fileName.replace(/\.md$/, '')
        }
    }})
}

