"use client";

import { useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { FiChevronDown, FiChevronUp, FiClipboard } from "react-icons/fi";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Editor } from "@tinymce/tinymce-react";

export default function DropdownTable({ topics, sheetId }) {
  const [openTopics, setOpenTopics] = useState({});
  const [solvedQuestions, setSolvedQuestions] = useState({});
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [noteContent, setNoteContent] = useState("");
  const [noteName, setNoteName] = useState("");
  const [existingNote, setExistingNote] = useState(null);

  const toggleTopic = (topic) => {
    setOpenTopics((prev) => ({ ...prev, [topic]: !prev[topic] }));
  };

  const markAsSolved = async (questionId) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/sheets/question/mark-solved`, {
        sheetId,
        questionId,
      });
      setSolvedQuestions((prev) => ({
        ...prev,
        [questionId]: !prev[questionId],
      }));
    } catch (error) {
      console.error("Error marking as solved:", error);
    }
  };

  const fetchNoteForQuestion = async (question) => {
    if (!question.noteId) {
      setExistingNote(null);
      setNoteName(question.title);
      setNoteContent("");
      return;
    }

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/notes/${question.noteId}`);
      if (response.data.success) {
        setExistingNote(response.data.note);
        setNoteName(response.data.note.name || question.title);
        setNoteContent(response.data.note.content || "");
      } else {
        setExistingNote(null);
        setNoteName(question.title);
        setNoteContent("");
      }
    } catch (error) {
      console.error("Error fetching note:", error);
      setExistingNote(null);
      setNoteName(question.title);
      setNoteContent("");
    }
  };

  const handleSaveNote = async () => {
    if (!selectedQuestion || !noteContent || !noteName) return;
    try {
      const response = existingNote
        ? await axios.put(`${import.meta.env.VITE_API_URL}/api/notes/update`, {
            content: noteContent,
            noteId: selectedQuestion.noteId,
          })
        : await axios.post(`${import.meta.env.VITE_API_URL}/api/notes/create`, {
            question_id: selectedQuestion.questionId,
            content: noteContent,
            type: "question",
          });

      if (response.data.success) {
        setExistingNote(response.data.note);
        setSelectedQuestion(null);
      }
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  return (
    <div className="w-full space-y-4">
      {topics.map((topicData, index) => (
        <Card key={index} className="rounded-xl border bg-white shadow-sm">
          <div
            className="flex justify-between items-center px-5 py-3 bg-orange-50 hover:bg-orange-100 transition cursor-pointer rounded-t-xl"
            onClick={() => toggleTopic(topicData.topic)}
          >
            <h3 className="text-base font-semibold text-orange-900">{topicData.topic}</h3>
            <div className="flex items-center gap-2 text-sm text-orange-800">
              {topicData.questions.length} Questions
              {openTopics[topicData.topic] ? <FiChevronUp /> : <FiChevronDown />}
            </div>
          </div>

          {openTopics[topicData.topic] && (
            <div className="overflow-x-auto">
              <Table>
                <TableBody>
                  {topicData.questions.map((q) => {
                    const isSolved = q.status === "Completed" || solvedQuestions[q.questionId];
                    return (
                      <TableRow key={q.questionId} className="hover:bg-gray-50 transition-all group">
                        <TableCell>
                          <button onClick={() => markAsSolved(q.questionId)} className="focus:outline-none">
                            {isSolved ? (
                              <FaCheckCircle className="text-green-600 w-5 h-5" />
                            ) : (
                              <FaRegCircle className="text-gray-400 w-5 h-5 group-hover:text-green-500" />
                            )}
                          </button>
                        </TableCell>
                        <TableCell className="text-blue-600 font-medium text-sm hover:underline">
                          <a href={q.url} target="_blank" rel="noopener noreferrer">
                            {q.title}
                          </a>
                        </TableCell>
                        <TableCell>
                          <img
                            src={
                              q.platform === "leetcode"
                                ? "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                                : "https://miro.medium.com/v2/resize:fit:799/0*ilw552fVUGbwIzbE.jpg"
                            }
                            alt={q.platform}
                            className="w-6 h-6 rounded"
                          />
                        </TableCell>
                        <TableCell
                          className={`text-sm font-semibold ${
                            q.difficulty === "Hard"
                              ? "text-red-500"
                              : q.difficulty === "Medium"
                              ? "text-yellow-500"
                              : "text-green-500"
                          }`}
                        >
                          {q.difficulty}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {q.topicTags.slice(0, 2).map((tag, idx) => (
                              <Badge key={idx} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                            {q.topicTags.length > 2 && (
                              <Badge variant="outline">+{q.topicTags.length - 2}</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setSelectedQuestion(q);
                              fetchNoteForQuestion(q);
                            }}
                          >
                            <FiClipboard
                              className={`w-5 h-5 ${q.noteId ? "text-yellow-500" : "text-gray-400"}`}
                            />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>
      ))}

      {/* Note Editor Sheet */}
      <Sheet open={!!selectedQuestion} onOpenChange={() => setSelectedQuestion(null)}>
        <SheetContent side="right" className="w-screen max-w-[75vw]">
          <SheetHeader>
            <SheetTitle>{selectedQuestion?.title}</SheetTitle>
          </SheetHeader>

          <Card className="flex-grow p-4 flex flex-col gap-4 min-h-96 overflow-auto">
            <div className="flex justify-end">
              <Button onClick={handleSaveNote}>
                {existingNote ? "Save" : "Create"}
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="noteName" className="text-sm font-medium flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Note Name:
              </label>
              <Input
                id="noteName"
                placeholder="Untitled"
                maxLength={80}
                value={noteName}
                onChange={(e) => setNoteName(e.target.value)}
              />
              <Editor
                apiKey="06uys0mqhocineaoxtq8561s3od7hzci5bp9wjn4fzu2scdu"
                value={noteContent}
                onEditorChange={(content) => setNoteContent(content)}
                init={{
                  height: 400,
                  min_height: 300,
                  resize: false,
                  menubar: false,
                  plugins: "lists link image table code help wordcount",
                  toolbar:
                    "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | link image | code",
                  content_style: "body { font-family: Arial, sans-serif; font-size: 14px; }",
                }}
              />
            </div>
          </Card>
        </SheetContent>
      </Sheet>
    </div>
  );
}
