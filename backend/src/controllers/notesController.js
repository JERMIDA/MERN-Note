import Note from "../models/Note.js"
export  async function getAllNotes(req,res){
try {
    const notes= await Note.find();
    res.status(200).json(notes);
    
} catch (error) {
    console.error("Error fetching notes:",error);
    res.status(500).json({message:"Internal server error"});
}
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json({ message: "Note created successfully" });
    } catch (error) {
        console.error("error while creating notes", error);
        if (!res.headersSent) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export function updateNote(req,res){
    res.status(201).json({message:"updated successfully created "});
}

export function deleteNotes(req,res){
    res.status(201).json({message:"deleted successfully created "});
}
