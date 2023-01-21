import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import * as Sc from "./style"

export function Editor({
  setBody,
  theme = "snow",
  body,
}: {
  setBody?: (body: string) => void
  theme?: "snow" | "bubble" | "core"
  body?: string
}) {
  const modules = {
    toolbar: [
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

  if (body) {
    return (
      <Sc.QuillContentContainer>
        <ReactQuill
          value={body}
          readOnly={true}
          theme={theme}
          modules={{
            toolbar: {
              size: [14, 16, 18, 20],
            },
          }}
        />
      </Sc.QuillContentContainer>
    )
  }

  return (
    <Sc.Editor>
      <ReactQuill
        theme={theme}
        modules={modules}
        formats={formats}
        placeholder="Escreva algo..."
        onChange={(body) => {
          if (typeof setBody !== "undefined") {
            setBody(body)
          }
        }}
        style={{ height: "95.5vh" }}
      />
    </Sc.Editor>
  )
}
