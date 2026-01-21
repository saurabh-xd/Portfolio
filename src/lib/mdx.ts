 import {promises as fs} from "fs"
import { compileMDX } from "next-mdx-remote/rsc";
 import path from "path"
import rehypePrettyCode from "rehype-pretty-code";
import { Pre } from "@/components/mdx/CodeBlock";
 
type FrontMatter = {
    title: string;
    description: string;
    date: string;
    image: string;
}

const rehypePrettyCodeOptions = {
    theme: "github-dark",
    keepBackground: true,
    defaultLang: "plaintext",
    onVisitLine(node: { children: unknown[] }) {
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }];
        }
    },
    onVisitHighlightedLine(node: { properties: { className: string[] } }) {
        node.properties.className.push("highlighted");
    },
};

export const getSingleBlog = async (slug: string) => {
    try {
        const decodedSlug = decodeURIComponent(slug);
        const singleBlog = await fs.readFile(
            path.join(process.cwd(), "src/data/blogs", `${decodedSlug}.mdx`),
            "utf-8",
        );

        if (!singleBlog) {
            return null;
        }

const {content, frontmatter} = await compileMDX<FrontMatter>({
    source: singleBlog,
    options: {
        parseFrontmatter: true,
        mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
    },
    components: {
        pre: Pre,
    },
})

        return {content, frontmatter};
    } catch (error) {
        console.error("Failed to read blog:", error);
        return null;
    }
}



export const getBlogs = async () => {
    const files = await fs.readdir(path.join(process.cwd(), 'src/data/blogs'));

    const allBlogs = await Promise.all(files.map(async file => {
        const slug = file.replace('.mdx', '');
        const frontmatter = await getBlogFrontMatterBySlug(slug);

        

        return {
            slug,
            ...frontmatter
        }
    }))

    return allBlogs;
}

export const getBlogFrontMatterBySlug = async (slug: string) => {
    const decodedSlug = decodeURIComponent(slug);
    const singleBlog = await fs.readFile(
        path.join(process.cwd(), "src/data/blogs", `${decodedSlug}.mdx`),
        "utf-8"
    );

    if(!singleBlog){
        return null;
    }

    const { frontmatter } = await compileMDX<FrontMatter>({
        source: singleBlog,
        options: {parseFrontmatter: true}
    })

    return frontmatter
}
