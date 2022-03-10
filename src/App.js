import React, { Component } from 'react';
//ייבוא ספריות של CSS עם BOOTSRTAP
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Contact from './components/Contact';
import AddContact from './components/AddContact';


//state זה אובייקט שיהיו בתוכו כל הנתונים
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  state={
    toggleAdd:false,
    new_name:"",
    new_email:"",
    new_phone:"",
    contacts:[]
  }
 

    
    
    //יצירת מערך של אובייקטים
    //contacts:[
      //{
        //id:1,
      //  name:"golan",
    //    email:"golan@gmail.com",
    //    phone:"054-677294"
    //  },
    //  {
     //   id:2,
      //  name:"doron",
      //  email:"doron@gmail.com",
      //  phone:"052-47475368"
     // },
    //  {
       // id:3,
       // name:"ashraf",
      //  email:"ashrf@gmail.com",
       // phone:"058-4785654"
     // }
  //  ]
//  }
//jason.parse-הופך טקסט לאובייקט אמיתי
//componentWillMount אתחול ראשוני בבניית קונסטרקטור
//לוקח נתונים מlocal storage
  componentWillMount(){//init
    localStorage.getItem('contact')&&
    this.setState({contacts:JSON.parse(localStorage.getItem('contact'))})
  }
  //כל שינוי שיעשה נשמור אותו ב local storage מחיקה,רענון וכו'
  //willupdate-לקבל את השינויים שנעשו אחרי
  // שומר נתונים ב DATA BASE
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('contact',JSON.stringify(nextState.contacts))
  }

  
    
  

  //render קובע מה הרכיב מראה מה הוא מחזיר
  //סריקת המערך contacts
  //map זה פונקציה שרצה על מערך ויש בה לולאות
  // key מילה שמורה 

  //פונקציה
  handleDelete=(id)=>{
    const elementsIndex = this.state.contacts.findIndex(element => element.id == id)
    const update=this.state.contacts.filter(person=>person.id!=id);
    alert("Delete "+this.state.contacts[elementsIndex].name)
    this.setState({contacts:update})
  }

//setstate מבצע 
//event זה בעצם אירוע של onchange כאשר משהו מתבצע ואז מופעלת הפונקציה event.target
//
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }
  handleChange1=(event)=>{
    this.setState({value: event.target.value});
   
  }
  //ולידציה מוודאים
  handleAdd=()=>{
    if(this.state.new_name=="")return;
    if(!/^\w+(.\w+)@\w+(.\w+)\.([a-zA-Z]{2,3})$/i.test(this.state.new_email)){
      alert("Invalid Email"); return;
    }



   //temp מערך זמני שמכיל אובייקט אחד
    const temp = [{
      id:0,
      name:this.state.new_name,
      email:this.state.new_email,
      phone:this.state.new_phone,
     

    }]
    //מערך זמני שכביכול דורס את המערך CONTACTS
    //set מעדכן את הערכים 
    //מאפס את השדות לאחר שממלאים אותם
    const tempArray =temp.concat(this.state.contacts)
    this.setState({contacts:tempArray});
    this.setState({new_name:""})
    this.setState({new_email:""})
    this.setState({new_phone:""})
  }


  clickPersonAdd=()=>{
    this.setState({toggleAdd:!this.state.toggleAdd})
  }

  updateUser=(id)=>{
    
    const elementsIndex = this.state.contacts.findIndex(element => element.id == id)
    let newArray = this.state.contacts
    
    this.setState({new_name:newArray[elementsIndex].name})
    this.setState({new_phone:newArray[elementsIndex].phone})
    this.setState({new_email:newArray[elementsIndex].email})
    
    const update=newArray.filter(person=>person.id!=id);
    alert("to Update user : "+newArray[elementsIndex].name+" you will delete it first")
    this.setState({toggleAdd:true})
    this.setState({contacts:update}) 
  }
  sorting=(e)=>{
    let newArray = this.state.contacts
    if (e.target.value === "name"){
      newArray.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }else if (e.target.value === "phone"){
      // i add paseInt to casting the phone number to Integer 
      newArray.sort((a, b) => (parseInt(a.phone) > parseInt(b.phone)) ? 1 : -1)
    }
    this.setState({contacts:newArray})
  }
  handleSearch(event) {
    let flag=false
    let i=0
    for (i=0 ;i<this.state.contacts.length;i++){
      if(this.state.contacts[i].name==this.state.value){
        alert("name : "+this.state.contacts[i].name + "\nEmail : "+this.state.contacts[i].email+
              "\nphone : "+this.state.contacts[i].phone)
        flag=true
      }
    }
    if(!flag){
      alert("that name not found !")
    }
    
    this.setState({value:""})
    //event.preventDefault();
  }
  

 
//handle זה טיפול ב EVENT
render() {
  
  return (
  <div>
    

    <Header brand="Contact List"/>
    <span Style="font-size:50px;cursor;pointer; color:blue; margin-left:100px;"
     onClick={this.clickPersonAdd}>&#128103; 	&#128102; &#43;</span>
   
    {this.state.toggleAdd?(
    <AddContact
    name={this.state.new_name}
    email={this.state.new_email}
    phone={this.state.new_phone}
    addButton={this.handleAdd}
    onChangeText={this.handleChange}
    />):null}

    <div  className="container p-2" >
      <select name="select1" onClick={this.sorting}>
                <option value='name'>Sorting by name</option>
                <option value='phone'>Sorting by Phone</option>
      </select>
    </div>

    
    <div className="container p-2">
    <form onSubmit={this.handleSearch}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange1} />
      </label>
      <input type="submit" value="Search" />
    </form>
    </div>


    <div className="container p-2" brand="Contact List">
    
      {
        
        this.state.contacts.map((person, index)=>(
          person.id=index, 

          <Contact
          key={index}
          name={person.name}
          email={person.email}
          phone={person.phone}
          id={index}
          onDelete={this.handleDelete}
          onChange={this.updateUser}
          />
        ))
      }
    </div>
    
  </div>
  );
  
}
}

export default App;