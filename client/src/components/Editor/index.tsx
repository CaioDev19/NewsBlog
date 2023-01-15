import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import * as Sc from "./style"

export const Quill: React.FC = () => {
  const [body, setBody] = useState("")
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      [{ size: [] }, { color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
    clipboard: {
      matchVisual: false,
    },
  }

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "color",
    "background",
  ]

  return (
    <Sc.Editor>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Write somethings..."
        onChange={(e) => setBody(e)}
        value={body}
        style={{ height: "95.5vh" }}
      />
    </Sc.Editor>
  )
}

export default Quill
