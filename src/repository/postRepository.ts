import { Post } from "../model/post";

const db = require("../database/database");


export const listAllPosts = async () => {
    const posts: Post[] = await db.query("SELECT * FROM post ORDER BY created_at asc");
    return posts;
}   
export const create = async (post: Post) => {
   const postResult = await db.query("INSERT INTO post(title, content, category, author) VALUES($1,$2,$3,$4)",
    [post.title,post.content,post.category,post.author])
    return postResult;
}
export const remove = async (id: number) => {
    await db.query("DELETE FROM post WHERE id=$1", [id]);
}
export const returnPost = async (id: number) => {
    const post: Post = await db.query("SELECT id, title, content, category, author, created_at FROM post WHERE id=$1", [id]);

    return post;
}
export const update = async (post: Post) => {
    const postResult: Post =  await db.query("UPDATE post SET title=$1, content=$2, category=$3, author=$4 WHERE id=$5", 
    [post.title,post.content,post.category,post.author,post.id]);
    return postResult;
}
export const filterByCategory = async (category: string) => {
    const posts: Post[] = await 
    db.query("SELECT * FROM post WHERE category=$1", 
    [category])
    return posts;
}
export const search = async (value: string) => {
    value = '%' + value + '%';
    const posts: Post[] = await 
    db.query("SELECT * FROM post WHERE title LIKE $1 or content LIKE $1", 
    [value])
    return posts;
}
     
 


