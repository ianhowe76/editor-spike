import React, { useState, ChangeEvent } from "react";

interface IEditorProps {
  initialText: string;
  onSave: (text: string) => void;
}

const Editor: React.FC<IEditorProps> = ({ initialText, onSave }) => {
  const [text, setText] = useState<string>(initialText);

  return (
    <div>
      <input type="textbox" value={text} onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
      <button onChange={() => onSave(text)} />
    </div>
  )
};

export default Editor;
