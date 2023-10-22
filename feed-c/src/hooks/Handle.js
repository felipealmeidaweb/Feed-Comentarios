import { useState } from "react";


export default function Handle() {
  const [autor, setAutor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComment] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newComment = {
      id: Math.floor(Math.random() * 100000),
      autor: autor,
      content: content,
      data: new Date(),
    };
    setComment((state) => [newComment, ...state]);
    setContent("");
    setAutor("");
  }

  return { autor, setAutor, content, setContent, comments, handleSubmit };
}