import React from 'react'
import "./Styles/style.css"
class AddButton extends React.Component {
  componentDidMount(){
    this.button.style.width = this.button.offsetHeight + "px"
    this.fileInput.style.width = this.fileInput.offsetHeight + "px"
    let self = this;
    this.fileInput.addEventListener('change',function(){
      self.handleFileChange(this.files[0])
    })
  }
  componentDidUpdate(){
    this.button.style.width = this.button.offsetHeight + "px"
    this.fileInput.style.width = this.fileInput.offsetHeight + "px"
  }
  handleFileChange(path){
    this.props.onAdd(path);
  }
 render() {
  return (
    <div id="addButton"
       className={this.props.className}
       ref={b => {this.button = b}}
       >
      <div className="addIcon"></div>
      <input
        ref={i => {this.fileInput = i}}
        type="file" />
    </div>
  );
 }
}
export default AddButton;
