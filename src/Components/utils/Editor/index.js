import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor({
  content,
  loadedContent,
  setContent,
  setLoadedContent,
}) {
  return (
    <div className="form-wrapper">
      <CKEditor
        className="editor"
        data={
          loadedContent !== undefined
            ? loadedContent
            : content !== undefined
            ? content
            : ''
        }
        editor={ClassicEditor}
        onChange={(event, editor) => {
          setContent(editor.getData());
          setLoadedContent && setLoadedContent(data);
        }}
      ></CKEditor>
    </div>
  );
}
