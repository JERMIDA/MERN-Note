import express from "express";
import { createNote, getNoteById,updateNote,deleteNotes, getAllNotes } from "../controllers/notesController.js";

const router=express.Router();

router.get("/s",getAllNotes);
router.get("/:id",getNoteById);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNotes);

export default router;