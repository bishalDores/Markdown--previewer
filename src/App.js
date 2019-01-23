import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

let marked = require("marked");

class App extends Component {
    state = {
        markdown:"# Welcome to my React Markdown Previewer!\n" +
            "\n" +
            "## This is a sub-heading...\n" +
            "### And here's some other cool stuff:\n" +
            "  \n" +
            "Heres some code, `<div></div>`, between 2 backticks.\n" +
            "\n" +
            "```\n" +
            "// this is multi-line code:\n" +
            "\n" +
            "function anotherExample(firstLine, lastLine) {\n" +
            "  if (firstLine == '```' && lastLine == '```') {\n" +
            "    return multiLineCode;\n" +
            "  }\n" +
            "}\n" +
            "```\n" +
            "  \n" +
            "You can also make text **bold**... whoa!\n" +
            "Or _italic_.\n" +
            "Or... wait for it... **_both!_**\n" +
            "And feel free to go crazy ~~crossing stuff out~~.\n" +
            "\n" +
            "There's also [links](https://www.freecodecamp.com), and\n" +
            "> Block Quotes!\n" +
            "\n" +
            "And if you want to get really crazy, even tables:\n" +
            "\n" +
            "Wild Header | Crazy Header | Another Header?\n" +
            "------------ | ------------- | ------------- \n" +
            "Your content can | be here, and it | can be here....\n" +
            "And here. | Okay. | I think we get it.\n" +
            "\n" +
            "- And of course there are lists.\n" +
            "  - Some are bulleted.\n" +
            "     - With different indentation levels.\n" +
            "        - That look like this.\n" +
            "\n" +
            "\n" +
            "1. And there are numbererd lists too.\n" +
            "1. Use just 1s if you want! \n" +
            "1. But the list goes on...\n" +
            "- Even if you use dashes or asterisks.\n" +
            "* And last but not least, let's not forget embedded images:\n" +
            "\n" +
            "![React Logo w/ Text](https://goo.gl/Umyytc)\n"
    }

    updateMarkdown = function(markdown){
        this.setState({markdown})
    }
    render() {
        let {markdown} = this.state;
        return (
            <div className="App container">
                <div className="row">

                    <div className="col-md-6">
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Markdown Input</ControlLabel>
                            <FormControl componentClass={"textarea"}
                                         placeholder={"Enter Markdown"}
                                         value={markdown}
                                         rows={20}
                                         cols={8}
                                         onChange={(event)=>this.updateMarkdown(event.target.value)}
                                         id="editor"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <div dangerouslySetInnerHTML={{__html:marked(markdown)}} className="markdown-output" id="preview">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
