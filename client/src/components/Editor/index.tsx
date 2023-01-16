import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import * as Sc from "./style"

export function Editor({
  setBody,
}: {
  setBody: (body: string) => void
}) {
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
        placeholder="Escreva algo..."
        onChange={(body) => setBody(body)}
        style={{ height: "95.5vh" }}
      />
    </Sc.Editor>
  )
}
