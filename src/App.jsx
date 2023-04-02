import React, { Component } from "react";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FcStart } from 'react-icons/fc';
import { IconName } from "react-icons/gr";


class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "",
      todo: []
    }
  }

  handlechg = (val) => {
    this.setState({
      value: val
    })

  }

  setdata = () => {
    // console.log(this.state.value)
    let obj = {
      title: this.state.value,
      s: 0
    }
    this.state.todo = [...this.state.todo, obj]
    localStorage.setItem("Todo_List", JSON.stringify(this.state.todo))
    this.setState({
      value: ""
    })
    // console.log(this.state.todo)
  }

  edit = (ind) => {
    for (var i = 0; i < this.state.todo.length; i++) {
      this.state.todo[i].s = 0
    }

    this.state.todo[ind].s = 1
    this.setState({})
  }

  setnewtext = (val, ind) => {
    this.state.todo[ind].title = val
    this.setState({})
  }

  update = (i) => {
    this.state.todo[i].s = 0
    localStorage.setItem("Todo_List", JSON.stringify(this.state.todo))
    this.setState({

    })
  }

  delete = (e) => {
    this.state.todo.splice(e, 1)
    this.setState({})
    localStorage.setItem("Todo_List", JSON.stringify(this.state.todo))
  }

  componentDidMount() {
    let data = localStorage.getItem('Todo_List')
    // console.log(data)
    this.state.todo = JSON.parse(data)
    this.setState({})
    if (data == null) {
      this.state.todo = []
    } else {
      this.state.todo = JSON.parse(data)
      this.setState({})
    }
  }

  render() {
    return (
      <div >

        <nav className="navbar bg-dark" data-bs-theme="dark">
          <div className="container-fluid">

            <div className="input-group mb-3 mt-3 w-50 mx-3">
              <input value={this.state.value} onChange={(e) => this.handlechg(e.target.value)} type="text" className="form-control text-dark" placeholder="Enter Your Tasks" aria-label="Enter Your Tasks" aria-describedby="button-addon2" />

              <div className="input-group-append mx-3">
                <button className="btn btn-outline-info" type="button" id="button-addon2" onClick={() => this.setdata()} > <IoIosAddCircleOutline color="red" /> Button</button>

              </div>

            </div>

            <h1 className="w-40" style={{ margin: "auto" }}> Todo App</h1>

          </div>

        </nav>




        {/* <h1>Todo List </h1>
        <input value={this.state.value} onChange={(e) => this.handlechg(e.target.value)} type="text" />

        <button style={{ margin: 3 + "px" }} onClick={() => this.setdata()}>
          <IoIosAddCircleOutline color="red" />
        </button> */}

        {
          this.state.todo.map((v, i) => {
            return (
              v.s == 0 ?
                //text 

                <div className="container fluid mt-3 mx-3 ">
                  <li key={i} className="fw-bold h3">
                    <i><FcStart /></i>
                    {v.title}
                    <button type="button" class="btn btn-outline-success mx-3" onClick={() => this.edit(i)} > <IoIosAddCircleOutline className="mx-2" />Edit</button>
                    <button type="button" class="btn btn-outline-danger mx-3" onClick={() => this.delete(i)} > <IoIosAddCircleOutline className="mx-2" /> Delete</button>
                    {/* <button className="mx-3" onClick={() => this.edit(i)}>edit</button>
                    <button style={{ margin: 3 + "px" }} onClick={() => this.delete(i)}>delete</button> */}
                  </li>
                </div>
                :

              <li key={i} className="fw-bold h3" >
                <i><FcStart /></i>
                <input type="text" value={v.title} onChange={(e) => this.setnewtext(e.target.value, i)} />
                <button type="button" class="btn btn-outline-danger mx-3" onClick={() => this.update(i)} > <IoIosAddCircleOutline className="mx-2" /> Update</button>
              </li>




              // <li key={i} style={{ listStyle: "none", margin: 12 + "px" }}>
              //   <i><FcStart /></i>
              //   <input type="text" value={v.title} onChange={(e) => this.setnewtext(e.target.value, i)} />
              //   <button style={{ margin: 3 + "px" }} onClick={() => this.update(i)}>update</button>
              // </li>

            )
          })
        }
      </div>
    )
  }
}

export default App