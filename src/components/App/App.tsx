import { FormEventHandler, useEffect, useState } from "react";

import NavigateBar from "../NavigateBar/NavigateBar";
import Field from "../Field/Field";
import Form from "../Form/Form";
import Submit from "../Submit/Submit";
import AddMore from "../AddMore/AddMore";
import RemoveItem from "../RemoveItem/RemoveItem";

import readUploadFile from "../../utils/readUploadFile";

import styles from "./App.module.css";

function App() {
  const [textInput, setTextInput] = useState("");
  const [fileInput, setFileInput] = useState({ value: "", files: "" });

  const formSubmitFunction: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    return;
  }

  async function readUpload() {
    if (fileInput.value) {
      const res = await readUploadFile(fileInput.files[0]);

      console.log("res", res)
    }
  }

  useEffect(() => {
    readUpload();
  }, [fileInput])

  return (
    <div className={styles["aplication--container"]}>
      <NavigateBar />
      <div className={styles["aplication--content"]}>
        <Form formSubmitFunction={formSubmitFunction}>
          <Field type="text" value={textInput} change={setTextInput} placeholder="Link Url" />
          <Field type="text" value={textInput} change={setTextInput} placeholder="Link Text" />
          <Field type="text" value={textInput} change={setTextInput} placeholder="Name" />
          <Field type="text" value={textInput} change={setTextInput} placeholder="Name" />
          <Field
            type="file"
            value={fileInput.value}
            text={fileInput.value}
            change={setFileInput}
            placeholder="Escolha uma lista com os seus produtos"
            accept=".xls,.xlsx,.csv"
          />
          <AddMore />
          <RemoveItem />
          <Submit text="SALVAR"/>
        </Form>
      </div>
    </div>
  )
}

export default App;
