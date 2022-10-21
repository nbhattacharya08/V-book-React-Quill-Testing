import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "./EdditorToolbar";
import "./App.css"
import Home from "./Home";

function App() {

  const [height, setHeight] = useState({});
  const [intialVal, setInitVal] = useState({});




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
    console.log(value);
    let totalHeight = (document.getElementsByClassName("quill")[0].clientHeight);
    if (height > 800) {
      window.alert("You have reached the max word-limit");
    }
    console.log(totalHeight);
    setHeight(totalHeight);
    // console.log(height)

    if (totalHeight)
      setInitVal(userInfo.description);
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
      // console.log(this.refs.inner.clientHeight);
      event.persist();
      if (userInfo.description.length < 50) {
        setError('Required, Add description minimum length 50 characters');
        return;
      }

    } catch (error) { throw error; }
  }

  return (
    <>
      {/* <Home /> */}
      <div className="App">
        <div className="container">
          <div className="row">
            <form onSubmit={addDetails} className="update__forms">
              <div className="form-row">
                {/* <div className="chapter_name form-group col-md-12 ">
                  <label className="font-weight-bold"><strong> Chapter Name</strong> <span className="required"> * </span> </label>
                  <input type="text" name="title" value={userInfo.title} onChange={onChangeValue} className="form-control" placeholder="Title" required />
                </div>
                <div className="form-group col-md-12">
                  <label className="font-weight-bold"><strong>Author</strong>  <span className="required"> * </span> </label>
                  <input type="text" name="author" value={userInfo.author} onChange={onChangeValue} className="form-control" placeholder="author" required />
                </div>
                <div className="clearfix"></div> */}

                {/* Controlling its height */}
                <div className="editor form-group col-md-12 ">
                  <label className="font-weight-bold"><strong>Page Content </strong> <span className="required"> * </span> </label>
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
