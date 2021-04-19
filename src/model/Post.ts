const db = require("../database/database");

class Post{


    async get(){
       const data = await db.query("SELECT * FROM post");
        
       return data.rows;
    }   
    async create(title: string, content: string, category: string, author: string){
        await db.query("INSERT INTO post(title, content, category, author) VALUES($1,$2,$3,$4)",
        [title,content,category,author])


    }
    async findPost(id: number){
        const data = await db.query("SELECT id, title, content, category, author, created_at FROM post WHERE id=$1", [id]);

        return data.rows;
    }
    async update(id: number, title: string, content: string, category: string, author: string){

       await db.query("UPDATE post SET title=$1, content=$2, category=$3, author=$4 WHERE id=$5", [title,content,category,author,id]);

    }
    async delete(id: number){
        await db.query("DELETE FROM post WHERE id=$1", [id]);
    }

}

export {Post};