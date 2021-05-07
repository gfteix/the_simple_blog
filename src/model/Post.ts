const db = require("../database/database");

class Post{


    async get(){
       const data = await db.query("SELECT * FROM post ORDER BY created_at asc");
       
       return data.rows;
    }   
    async create(title: string, content: string, category: string, author: string){
        await db.query("INSERT INTO post(title, content, category, author) VALUES($1,$2,$3,$4)",
        [title,content,category,author])
        


    }
    async returnPost(id: number){
        const data = await db.query("SELECT id, title, content, category, author, created_at FROM post WHERE id=$1", [id]);

        return data.rows;
    }
    async update(id: number, title: string, content: string, category: string, author: string){

       await db.query("UPDATE post SET title=$1, content=$2, category=$3, author=$4 WHERE id=$5", [title,content,category,author,id]);

    }
    async filter(category: string){
        const data = await db.query("SELECT * FROM post WHERE category=$1", [category])

        return data.rows;
    }
    async search(value: string){
        value = '%' + value + '%';
        const data = await db.query("SELECT * FROM post WHERE title LIKE $1 or content LIKE $1", [value])

        return data.rows;
    }
    async delete(id: number){
        await db.query("DELETE FROM post WHERE id=$1", [id]);
    }

}

export {Post};