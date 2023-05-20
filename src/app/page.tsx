"use client";
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Typewriter from "typewriter-effect";

const sendRequest = () => {
  const [formdata, setFormdata] = useState({});
  const [response, setResponse] = useState("");

  const loginFn = async () => {
    // const [submitStatus, setSubmitStatus] = useState(false);

    const url = "http://localhost:8080/chat";
    // const formdata = 1;
    // const payload = [
    //   {
    //     role: "user",
    //     content: formdata["content"],
    //   },
    // ];
    console.log(formdata);
    try {
      const response = await axios.post(url, formdata);
      console.log(response);
      if (response.status == 200) {
        setResponse(response.data);
        console.log("working");
        // setSubmitStatus(true);
        // setFormdata(initilObj);
      } else {
        console.log("none else");
        // setSubmitStatus(true);
      }
    } catch {
      console.log("none error");
      // setSubmitStatus(true);
    }
  };

  const handleChange = (e: {
    target: { name: string | number; value: any };
  }) => {
    console.log(e.target.value);
    let tempObj: any = {};
    tempObj["prompt"] = e.target.value;
    console.log(tempObj);
    setFormdata({ ...formdata, ...tempObj });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mb-3">
            <label className="form-label">Enter your request text here</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-md-6 offset-md-3 mb-3">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onClick={loginFn}
            >
              Send
            </button>
          </div>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: response }}></div> */}
        <Typewriter
          options={{
            strings: [response],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </div>
    </>
  );
};

export default sendRequest;
