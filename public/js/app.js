"use strict";

class App{
  constructor(){
    this.teams = [
      {
        "id": 1,
        "coach": "Coach kokoy",
        "team": "Falcons",                
         "division": "west",           
        "photo": "img/4.jpg"
      
        
      },


      {
        "id": 2,
        "coach": "Coach Jan",
        "team": "Tigers",                
         "division": "west",           
        "photo": "img/6.jpg"
        
      
        
      },


      {

        "id": 3,
        "coach": "Coach Clark",
        "team": "Lions",                
         "division": "west",           
        "photo": "img/1.jpg"
        
      
      },


      {
        "id": 4,
        "coach": "Coach CJ",
        "team": "ComeBAcks",                
         "division": "west",           
        "photo": "img/2.jpg"
        
        
      }, 


      {
        "id": 5,
        "coach": "Coach popol",
        "team": "LEGENDS",                
         "division": "west",           
        "photo": "img/5.jpg"

      },

       {


       "id": 6,
        "coach": "Jan",
        "team": "Champs",                
         "division": "west",           
        "photo": "img/7.jpg"
        
        
      }, 


    ];
    
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

  showLandingPage(){
    $('#teamLayout').show();
    $('#teamRecent').hide();
     $('#createTeam').hide();
     $('#updateTeamNow').hide();
    
  }
}


class Component extends App{
	constructor(){
		super();
	}
	teamLayout(){
		let html = `



     <div id="brandLayout" class="container #bf360c deep-orange darken-4 ">
       <nav>
    <div class="nav-wrapper #bf360c deep-orange darken-4">
     <a href="#" onclick="component.showLandingPage()" class="brand-logo center">&nbsp;&nbsp;HoOpers</a>
      <ul class="right hide-on-med-and-down">
            
              <li><a href="#" onclick="component.teamList()"><i class="material-icons left">assignment</i>Teams</a></li>
              <li><a href="#" onclick="component.teamCreate()"><i class="material-icons left active">note_add</i>Create Team</a></li>
            </ul>
            <ul class="left hide-on-med-and-down">
            <li><a href="#" onclick="component.teamLayout()"><i class="material-icons left">view_list</i>HOME</a></li>
     </ul>
    </div>

    </br>
<hr>
  </br>
  </br>
   <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="img/1.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="img/2.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="img/3.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="img/7.jpg"></a>
    <a class="carousel-item" href="#five!"><img src="img/6.jpg"></a>
    <a class="carousel-item" href="#five!"><img src="img/4.jpg"></a>
  </div>
   </br>
  </br>

<hr>  
      <h5 class="center-align black-text">HoOPERs!</h5>
      <div class="row">

  
<div id="teamRecent"></div>
        <div id="teamView"></div>
        <div id="teamList"></div>
        <div id="teamCreate"></div>
              <div id="updateTeamNow"></div>





      
<footer class="page-footer #d84315 deep-orange darken-3">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Team App</h5>
                <p class="grey-text text-lighten-4">A Baskteball team App, this app can show you how many teams in the league and also you can put youe team here if you want and also you can update if there some problems. It is easy here so Enjoy and Make your TEAM NOW!</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="#" onclick="component.teamLayout()">
                      <!-- <i class="material-icons left">dashboard</i> -->
                      Home</a></li>
                      <li><a class="grey-text text-lighten-3" href="#" onclick="component.teamList()">
                        <!-- <i class="material-icons left">assignment</i> -->
                        Teams</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="footer-copyright #bf360c deep-orange darken-4">
                    <div class="container">
                      © 2016-2017 Copyright Text
                      

                    </div>
                  </div>
                </footer> 
</div>
             
  `;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
      
  }


   
  teamView(id){
    let r = this.findTeamByID(id);

    let html = `

      <h5 class="center-align black-text text-darken-2">${r.coach}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="card horizontal small">
          
            <div class="card-image">
              <img src="${r.photo}">
            </div>
            <div class="card-stacked">
              <div class="card-content #bf360c deep-orange darken-4">
              <span class="black-text text-darken-2">
                <p>Coach: ${r.coach}</p>
                <p> Team:${r.team}</p>
               <p> Division: ${r.division}</p></span>
              </div>
              <div class="card-action small">    
         
                    <a onclick="component.updateTeamNow(${r.id})" class="waves-effect waves-light btn">Update</a>
                <a onclick="component.deleteTeam(${r.id})" class="waves-effect waves-light btn">DELETE</a>
                <a onclick="component.teamList()" class="waves-effect waves-light btn">BACK TO Team LIST</a>

              </div>
            </div>          
          </div>        
        </div>      
      </div>

      

    `;

    

    html += `
          </ul>
        </div>      
      </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("teamView"));
    $('#teamView').show();
    $('#teamRecent').hide();
    $('#teamList').hide();
    $('#teamCreate').hide();
     $('#updateTeamNow').hide();
  }

  

updateTeam(id){

  id = id+1;
  let teamdummy = {
    "id" :  id,
    "coach" : $('#coach_1').val(),
    "team" : $('#Team_1').val(),
    "division" : $('#Division_1').val(),
    "photo" : $('#photo_1').val()
  }

  let r = this.teams;
  for(let i=0;i<r.length;i++){
    if(r[i].id == id){
      r[i] = teamdummy;
      break;
    }
  }

  this.teamList();
}

  teamSearch(){
    let m = this.teams;
    let value = $('#search1').val();
    let html = `
      <ul class="collection">
    `;    
    for(let i=0;i<m.length;i++){
      let expr1 = (m[i].style.toUpperCase().indexOf > -1);
      if(expr1){
        html += `       
            
         <li class="collection-item avatar">
            <i class="material-icons circle red">play_arrow</i>
            <span class="title">${this.teams[i].team}</span>
            <p>
              ${this.teams[i].division}
            </p>
            <a onclick="component.updateTeam(${this.teams[i].id})" href="#!" class="secondary-content"><i class="material-icons">mode_edit</i></a>
          </li>       

        `;  
      }     
    }

    html += `
      </ul>
    `;

  this.reRender(html,document.getElementById("searchPageTeamList"));
  }



   deleteTeam(key){
    let r = this.teams;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.teams.splice(i,1);
        break;
      }
    }   
    this.teamList();
  }

findTeamByID(id){
    let r = this.teams;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  } 
  teamList(){
    let html = `
     
     <br/>
        <nav>
          <div class="nav-wrapper #bf360c deep-orange darken-4">
          <form>
            <div class="input-field">       
              <input onkeyup="component.teamListItems(this.value)" id="search" type="search" placeholder="Search" required>
              <label for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <br/>

    `;

    html += `
      <div class="row" id="teamListItems">
    `;
    let r = this.teams;
    for(let i=0;i<r.length;i++){
      html+= `



        
<div class="col s12 m4">
          <div class="card small hoverable ">
            <div class="card-image">
              <img src="${r[i].photo}">
             
            </div>
            <div class="card-content #bf360c deep-orange darken-4">
               <span class="black-text text-darken-2 center html">
              <p>${r[i].coach}</p>
               <p>${r[i].team}</p>
             
                <p>${r[i].division}</p></span>
               
            </div>
            <div class="card-action #bf360c deep-orange darken-4" >
              <a href="#" onclick="component.teamView(${r[i].id})">Details</a>
            </div>
          </div>
        </div>

      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("teamList"));
    $('#teamList').show();
    $('#teamView').hide();
    $('#teamRecent').hide();
    $('#teamCreate').hide(); 
     $('#updateTeamNow').hide();   
  }
teamListItems(coach){
    let html = ``;
    let r = this.findTeamByCoach(coach);
    for(let i=0;i<r.length;i++){
      html+= `
        
   <div class="col s12 m">
    <h2 class="header">Horizontal Card</h2>
    <div class="card horizontal ">
      <div class="card-image">
        <img src="${r[i].photo}">
      </div>
      <div class="card-stacked">
        <div class="card-content #bf360c deep-orange darken-4">
          <span class="black-text text-darken-2 center">
              <p>${r[i].coach}</p>
               <p>${r[i].team}</p>
               <p>${r[i].division}</p></span>
        </div>
        <div class="card-action #bf360c deep-orange darken-4" >
          <a href="#" onclick="component.teamView(${r[i].id})">Details</a>
      </div>
    </div>
    </div>
            

       

      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("teamListItems"));
    $('#teamList').show();
    $('#teamView').hide();
    $('#teamRecent').hide();  
    $('#teamCreate').hide();
     $('#updateTeamNow').hide();
  }
  
   findTeamByCoach(coach){
    let objects = [];
    let r = this.teams;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].coach.toUpperCase().indexOf(coach.toUpperCase()) > -1);
      // console.log(name," vs ",r[i].name," = ",expr);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }

  teamCreate(){
    let html = `
        


       <div class="row">

            <div class="input-field col s6 ">
            <h3>Your Team</h3>
              <input disabled value="${this.teams.length+1}" id="car" type="text"class=" validate" >
            </div>
              <div class="row">
          <div class="input-field col s6 ">
              <input id="team_coach" type="text" class=" vintage">
              <label for="team_coach">Name Of Coach</label>
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s6 ">
              <input id="team_team" type="text" class="vintage">
             <label for="team_team">Name Of Team</label>
            </div>

             <div class="row">
            <div class="input-field col s6 ">
              <input id="team_division" type="text" class="vintage">
             <label for="team_division">Division</label>
            </div>

            <div class="row">
            <div class="input-field col s6 ">
              <input id="team_photo" type="text" class="vintage">
              <label for="team_photo">Team Logo</label>
            </div>
       
        <div align="left">
       
       <button onclick="component.teamList()" class="btn #ffa726 orange lighten-1">Back</button>
       <button onclick="component.createTeam()" class="btn #ffa726 orange lighten-1">Create</button> 
         </div>
       


                
    `;

    this.reRender(`
      ${html}
      `,document.getElementById("teamCreate"));
    $('#teamCreate').show();
    $('#teamList').hide();
    $('#teamView').hide();
    $('#teamRecent').hide();
      $('#updateTeamNow').hide();
    
  }


   createTeam(){
    let id = document.getElementById('team_id');
    let coach = document.getElementById('team_coach');
    let team = document.getElementById('team_team'); 
    let division = document.getElementById('team_division');
    let photo = document.getElementById('team_photo');

    let teamss = {      
   
      "coach": coach.value,
       "team": team.value,
      "division": division.value,
      "photo": photo.value,
      
 
    
    };


    this.teams.push(teamss);

    
   coach.value = team.value = division.value  = photo.value =''; 
  } 

  
    updateTeamNow(id){

    id = id - 1;
    let html = `
    
<center>
    <div class="form-style-3 #e3f2fd blue lighten-5">
    <div class="row">
    <fieldset>
    <center><h1>Update Your Team</h1></center>
    <center><span>Update Coach</span><input type="email" id="coach_1"value="${this.teams[id].coach}"/> </label></center>
    <center><span>Update Team</span><input type="email" id="Team_1"value="${this.teams[id].team}"/> </label></center>
    <center><span>Update Division</span><input type="email" id="Division_1"value="${this.teams[id].division}"/> </label></center>
  <center> <span>Update Photo</span><input type="email" id="photo_1"value="${this.teams[id].photo} "/> </label></center>
 

    <div class="center-align">
    <button onclick="component.teamList()" class="btn waves-effect waves-light">Back</button>
    <a onclick="component.updateTeam(${id})" class="waves-effect blue waves-light btn">Update</a>
    </div>
    </div>
</fieldset>

    </div>
    </center>

    `;  
    this.reRender(`

      ${html}

      `,document.getElementById("updateTeamNow"));   
 $('#teamCreate').hide();
    $('#teamList').hide();
    $('#teamView').hide();
    $('#teamRecent').hide();
      $('#updateTeamNow').show();
  
    
    
  }
  


}


let component = new Component();
component.teamLayout();
