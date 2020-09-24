import React from "react";
import "./text.styles.scss";
import Footer from ".././footer/footer.component";
class Text extends React.Component {
  constructor(props) {
    super();
    this.state = {
      editableText: props.text,
      editing: false,
    };
  }
  editText = () => {
    this.setState({ editing: true });
  };
  save = (value) => {
    this.setState({
      editableText: value,
      editing: false,
    });
  };
  initEditor() {
    this.editor = (
      <textarea
        className="editor"
        defaultValue={this.state.editableText}
        onKeyPress={(event) => {
          const key = event.which || event.keyCode;
          if (key === 13) {
            //enter key
            this.save(event.target.value);
          }
        }}
        autoFocus={true}
        style={{ backgroundColor: this.props.color }}
      />
    );
  }
  componentDidUpdate() {
    this.initEditor();
  }

  render() {
    return (
      <div className="text-footer-container">
        <div className="text-div">
          <p>{this.state.editableText}</p>
        </div>
        {/* Renderiza o editor caso o o state Editing seja verdadeiro */}
        {this.state.editing ? this.editor : console.log("fail")}

        <div className="footer-div"></div>
        <Footer
          subcolor={this.props.subcolor}
          color={this.props.color}
          date={this.props.date}
          editText={this.editText}
        />
      </div>
    );
  }
}

export default Text;
