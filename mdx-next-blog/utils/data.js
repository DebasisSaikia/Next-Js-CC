import fs from 'fs'
import path from 'path';
import matter from 'gray-matter'

const markdownFolder = path.join(process.cwd, 'markdown');

export function getAllDatas() {
    console.log(markdownFolder);
    const allDatas = fs.readdirSync(markdownFolder);

    return allDatas.map(fileName => {
        const slug = fileName.replace('.md', '');
        const fileContents = fs.readFileSync(
            path.join(markdownFolder, fileName),
            'utf-8'
        )

        const { data, content } = matter(fileContents);

        return {
            data,
            content,
            slug
        }
    })
}

export const blogPost = [
    {
        title: 'First Blog Post',
        date: new Date().toString(),
        slug: 'first',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum, ad pariatur sequi eos ratione facere itaque commodi atque laboriosam! Numquam, nisi perspiciatis? Repudiandae necessitatibus corporis aliquid dicta ex obcaecati!'
    },
    {
        title: 'Second Blog Post',
        date: new Date().toString(),
        slug: 'second',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum, ad pariatur sequi eos ratione facere itaque commodi atque laboriosam! Numquam, nisi perspiciatis? Repudiandae necessitatibus corporis aliquid dicta ex obcaecati!'
    },
    {
        title: 'Third Blog Post',
        date: new Date().toString(),
        slug: 'third',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum, ad pariatur sequi eos ratione facere itaque commodi atque laboriosam! Numquam, nisi perspiciatis? Repudiandae necessitatibus corporis aliquid dicta ex obcaecati!'
    }
]