import { Post } from "../model/post";

const db = require("../database/database");


export const listAll = async () => {
    const data = await db.query("SELECT * FROM post ORDER BY created_at asc");
    console.log(data.rows);
    return data.rows;
}   
export const create = async (post: Post) => {
    const data = await db.query("INSERT INTO post(title, content, category, author) VALUES($1,$2,$3,$4)",
    [post.title,post.content,post.category,post.author])
    return data.rows;
}
export const remove = async (id: number) => {
    const data= await db.query("DELETE FROM post WHERE id=$1", [id]);
    return data;
}
export const getPost = async (id: number) => {
    const data = await db.query("SELECT id, title, content, category, author, created_at FROM post WHERE id=$1", [id]);
    return data.rows;
}
export const update = async (post: Post) => {
    console.log('updatando');
    const data =  await db.query("UPDATE post SET title=$1, content=$2, category=$3, author=$4 WHERE id=$5", 
    [post.title,post.content,post.category,post.author,post.id]);
    return data.rows;
}
export const filterByCategory = async (category: string) => {
    const data = await 
    db.query("SELECT * FROM post WHERE category=$1", 
    [category])
    return data.rows;
}
export const search = async (value: string) => {
    value = '%' + value + '%';
    const data = await 
    db.query("SELECT * FROM post WHERE title LIKE $1 or content LIKE $1", 
    [value])
    return data.rows;
}
     
 


