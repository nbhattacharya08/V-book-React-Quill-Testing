import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "./EdditorToolbar";
import "./App.css"

function App() {
  // const [quill, setQuill] = useState();
  // const TOOL_OPTIONS = [
  //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //   [{ list: "ordered" }, { list: "bullet" }],
  //   ['bold', 'underline', 'strike'],
  //   [{ color: [] }, { background: [] }],
  //   [{ script: "sub" }, { script: "super" }],
  //   [{ align: [] }],
  //   ["image", "blockquote", "code-block", "video"],
  //   ["clean"]
  // ]

  // const wrapperRef = useCallback((wrapper) => {
  //   if (wrapper == null) return
  //   wrapperRef.innerHTML = "";
  //   const editor = document.createElement("div");
  //   wrapper.append(editor);
  //   const q = new Quill(editor, {
  //     theme: 'snow',
  //     modules: { toolbar: TOOL_OPTIONS }
  //   });
  //   setQuill(q);
  // }, [])

  // let history = useHistory();
  const [userInfo, setuserInfo] = useState({
    title: '',
    author: '',
    description: '',
    information: '',
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  }
  const ondescription = (value) => {
    setuserInfo({
      ...userInfo,
      description: value
    });
  }
  const oninformation = (value) => {
    setuserInfo({
      ...userInfo,
      information: value
    });
  }
  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      if (userInfo.description.length < 50) {
        setError('Required, Add description minimum length 50 characters');
        return;
      }

    } catch (error) { throw error; }
  }

  return (
    <>

      <div className="App">
        <div className="container">
          <div className="row">
            <form onSubmit={addDetails} className="update__forms">
              {/* <h3 className="myaccount-content"> Add  </h3> */}
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label className="font-weight-bold"> Chapter Name <span className="required"> * </span> </label>
                  <input type="text" name="title" value={userInfo.title} onChange={onChangeValue} className="form-control" placeholder="Title" required />
                </div>
                <div className="form-group col-md-12">
                  <label className="font-weight-bold"> Author <span className="required"> * </span> </label>
                  <input type="text" name="author" value={userInfo.author} onChange={onChangeValue} className="form-control" placeholder="author" required />
                </div>
                <div className="clearfix"></div>
                <div className="form-group col-md-12 editor" style={{ margin: "auto", minHeight: "80vh", borderBottom: "none" }}>
                  <label className="font-weight-bold"> Page Content <span className="required"> * </span> </label>
                  <EditorToolbar toolbarId={'t1'} />
                  <ReactQuill
                    theme="snow"
                    value={userInfo.description}
                    onChange={ondescription}
                    placeholder={"Write something awesome..."}
                    modules={modules('t1')}
                    formats={formats}
                  />
                </div>
                {/* <br /> */}
                {/* <div className="form-group col-md-12 editor">
                  <label className="font-weight-bold"> Additional Information  </label>
                  <EditorToolbar toolbarId={'t2'} />
                  <ReactQuill
                    theme="snow"
                    value={userInfo.information}
                    onChange={oninformation}
                    placeholder={"Write something awesome..."}
                    modules={modules('t2')}
                    formats={formats}
                  />
                </div> */}
                <br />
                {isError !== null && <div className="errors"> {isError} </div>}
                <div className="form-group col-sm-12 text-right">
                  <button type="submit" className="btn btn__theme"> Save  </button>
                  <button type="submit" className="btn btn__theme"> Save next  </button>
                  <button type="submit" className="btn btn__theme"> Submit  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
