import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
           data: 
           [
              {
                 "id":1,
                 "name":"Foo",
                 "age":"80"
              },
              {
                 "id":2,
                 "name":"Bar",
                 "age":"90"
              },
              {
                 "id":3,
                 "name":"Baz",
                 "age":"100"
              }
           ]
        }
     }
    render(){
         var i = 9;
         var myStyle = {
                color:'#FF0000',
                fontSize: 70
         }
        return (
           
            <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>

                <h1> Hello, {this.props.name} </h1>
                <h3>Array: {this.props.propArray}</h3>			
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>


                {/*<p data-myattribute = "somevalue">This is an attribute</p>
                <h1>{30*3}</h1>
                <h1 style={myStyle}> { i == 9? 'True':'False'}</h1>*/}

            </div>
        );
    }
}
class Header extends React.Component {
    render() {
       return (
          <div>
             <h1> new Header here </h1>
          </div>
       );
    }
 }
 {/*class Content extends React.Component {
    render() {
       return (
          <div>
             <h2>Content</h2>
             <p>The new content text Here </p>
          </div>
       );
    }
 } */}
 class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
          </tr>
       );
    }
 }

 App.propTypes = {
     name: PropTypes.string,
     propArray: PropTypes.Array.isRequired,
     propBool: PropTypes.bool.isRequired,
     propFunc: PropTypes.func,
     propNumber: PropTypes.number,
     propString: PropTypes.string
 }; 
 App.defaultProps = {
    name: 'Tutorialspoint.com',
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function(e) {return e},
    propNumber: 1,
    propString: "String value..."
 }
 export default App;