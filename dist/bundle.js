/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,body{
    height: 100%;
    margin: 0;

}



body{
    background: hsla(337, 65%, 78%, 1);
    background: linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);
    background: -moz-linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);
    background: -webkit-linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);

    display: flex;
    justify-content: center;
    align-items: center;
}

input[type="checkbox"] {
    position: relative;
    appearance: none;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    border: 2px solid rgb(240, 203, 134);


  }

  input[type="checkbox"]::before {
    content: " ";
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    font-size: 1.2em;
    visibility: hidden;
  }
  input[type="checkbox"]:hover{
    background-color: rgb(21, 172, 71);

  }
 
  
  input[type="checkbox"]:checked::before {
    /* Use \`visibility\` instead of \`display\` to avoid recalculating layout */
    visibility: visible;
  }
  
  input[type="checkbox"]:disabled {
    border-color: black;
    background: #ddd;
    color: gray;
  }

h1{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 42px;
    color: rgb(255, 255, 255);
}

.main-container{
    height: 700px;
    width: 1000px;
    background-color: rgb(255, 255, 255);
    border-radius: 24px;

    display: grid;

    grid-template: 0.2fr 1fr/ 0.3fr 1fr;

}


.header{
    grid-area: 1/1/2/3;
    display: flex;
    background-color: rgb(240, 203, 134);
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    justify-content: flex-start;
    align-items: center;
    padding-left: 24px;
    box-sizing: border-box;



}
.logo{
    display: flex;
    flex-direction: row;
    flex-basis: 50%;
    justify-content: flex-start;
    align-items: center;
}
.logo > i{
    margin-right: 24px;
}


.sidebar{
    background-color: rgb(255, 242, 225);
    grid-area: 2/1/3/2;
    display: flex;
    border-bottom-left-radius: 24px;
    flex-direction: column;
    padding: 18px;

}
.sidebar > *{

    flex-basis: 30%;
}

.sidebar button{
    height: 42px;
    width: 90%;
    text-align: start;
}
.user-projects{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap:10px;
    max-height: 250px;
    overflow-y: auto;
    flex-shrink: 0
}


.user-projects button{
    height: 42px;
    min-height: 42px;
    width: 90%;

}
.user-projects button:hover{
    background-color: rgb(240, 203, 134);

}


.highlighted{
    background-color: rgb(240, 203, 134);
    border-radius: 4px;
}



.default-projects-list{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;


}
.projects-list{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

}


.default-projects-list > *:hover{

    background-color: rgb(240, 203, 134);

}

.project-name-input{
    display: none;
}



.projects-title{
    color: rgb(109, 109, 109);
    font-size: 24px;
}




button{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: none;
    background-color: rgb(255, 242, 225);
    font-size: 18px;
    color: rgb(143, 143, 143);
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;

}

.todo-container{
    height: 100%;
    width: 100%;
    padding: 24px;
    grid-area: 2/2/3/3;
    display: flex;
    flex-direction: column;
    /* grid-template: 0.25fr 1fr/1fr; */
    box-sizing: border-box;

}
.todo-container > div{
}

.task{
    padding: 12px;
    margin: 8px;
    display: flex;
    align-items: center;
    background-color: rgb(255, 242, 225);
    border-radius: 4px;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 24px;
    width: 650px;
    height: 75px;
    white-space: nowrap;
    box-sizing: border-box;
    transition: box-shadow 0.12s;
}

.task:hover{
    box-shadow: 5px 1px 15px -7px rgba(0,0,0,0.32);
}

.task *{
    margin-top: 0px;
    margin-bottom: 0px;
}

.task-left{
    display: flex;
    align-items: center;
    

}

.task-center{
    overflow: hidden;
    text-overflow:ellipsis; 
    width: 400px;
    display: flex;
    margin-left: 24px;
}

.task-center p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis; 
  color: rgb(143, 143, 143);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


}

.task-right{
    display: flex;
    align-items: center;
    gap: 18px;
}


i{
    cursor: pointer;
}

i:hover{
    color: rgb(190, 125, 71) !important;
}






ul{
    position: relative;
    top: 24px;
    right: 64px;
    gap: 4px;
    display: flex;
    flex-direction: column;
}

ul > div{

    
    background-color: rgb(240, 203, 134);
    color: rgb(255, 255, 255);
    font-weight: 500;
    height: 20px;
    width: 50px;
    border-radius: 4px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    padding-left: 8px;
    list-style: none;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    
}

.dropdown-container{
    
    position: relative;
    width: 0;
    height: 0;

}


ul>div:hover{
    background-color: rgb(240, 210, 156);

}



.task h1{
    color: rgb(109, 109, 109);
    margin-left: 4px;
    font-size: 24px;
    font-weight: 500;

}

.task h2 {
    color: rgb(143, 143, 143);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
}

.add-task{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    grid-area: 2/1/3/2;
}

.add-task-button{
    background-color: white;
    display: flex;
    align-items: center;
    gap: 8px;
}

.add-task h2{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
    color: rgb(109, 109, 109);

}

.tasks{
    max-height: 430px;
    overflow-y: auto;
}

#modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #modal-content {
    background-color: #fff;
    border-radius: 4px;
    height: 450px;
    width: 600px;
    display: grid;
    grid-template: 0.2fr 1fr/1fr;
  }

  .modal-header{
      display: flex;
      align-items: center;
      grid-area: 1/1/2/2;
      background-color: rgb(240, 203, 134);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;

  }
  .modal-header h1{
      font-size: 32px;
      margin: 0;
      margin-left: 12px;
      margin-top: 12px;
      margin-bottom: 12px;
      
  }

  .modal-form{
      display: flex;
      justify-content: flex-start;
      padding: 24px;
      flex-direction: column;
  }

  .modal-form > form{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 75%;
      gap: 8px;
  }
  form > input, form > textarea{
      border: none;
      border-bottom: solid rgb(207, 150, 44) 1px;
      margin: 12px 2px;
  }

  .projects-list input{
    border: none;
    border-bottom: solid rgb(207, 150, 44) 1px;
    margin: 12px 2px;
    background-color: rgb(255, 242, 225);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 75%;
    color: rgb(110, 110, 110);
    font-size: 16px;
    font-weight: 300;

  }

  .project-name-input{
    display: none;
    gap:8px;
    font-weight: 300;
    font-size: 16px;
  }

  .project-name-input-buttons{
    display: flex;
    flex-direction: column;
    gap: 4px;


  }


.project-name-input-buttons > :nth-child(1){
    
    color: rgb(13, 148, 13);

  }
  .project-name-input-buttons > :nth-child(2){
    
    color: rgb(201, 20, 20);

  }


 

  form > input{
      font-size: 24px;
      
  }

form > textarea{
      font-size: 18px;
      height: 48px;
      
  }
form > input[type='date']{
    color: rgb(131, 131, 131);
    width: 50%;
}

.priority-select{
    margin-top: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(131, 131, 131);
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.submit-task-button{
    height: 60px;
    width: 60px;
    align-self: flex-end;
    background-color: white;
    border: solid 2px rgb(255, 255, 255);
    background-color: rgb(240, 203, 134);
    border-radius: 50%;
    margin-right: 8px;
    box-shadow: 5px 5px 13px 3px rgba(0,0,0,0.23);
    border: none;
    transition: box-shadow 0.2s;

}

.submit-task-button:active{
    box-shadow: 5px 5px 13px 0px rgba(0,0,0,0.23);

    
}



input[type="radio"]{
    appearance: none;
    margin: 0;
    height: 30px;
    width: 55px;
    border-radius: px;
   
  

}

#radio-form > input:nth-child(1){
    height: 32px;
    width: 32px;
    border: solid 2px rgb(5, 163, 0);
    color: rgb(5, 163, 0);
    border-radius: 50%;
    transition: background-color 0.2s;
}

#radio-form > input:nth-child(1):hover{
   
    background-color: rgb(5, 163, 0);
    color: white;
}
#radio-form > input:nth-child(1):checked{
   
    background-color: rgb(5, 163, 0);
    color: white;
} 


#radio-form > input:nth-child(2){
    height: 32px;
    width: 32px;
    border: solid 2px rgb(247, 203, 59);
    border-radius: 50%;
    color: rgb(247, 203, 59);
    transition: background-color 0.2s;
}  
#radio-form > :nth-child(2):hover{
   
    background-color: rgb(247, 203, 59);
    color: white;
     
 }
 #radio-form > :nth-child(2):checked{
   
    background-color: rgb(247, 203, 59);
    color: white;
     
 } 


 #radio-form > input:nth-child(3){
    height: 32px;
    width: 32px;
    border: solid 2px rgb(199, 68, 68);
    border-radius: 50%;
    color: rgb(199, 68, 68);
    transition: background-color 0.2s;

}
#radio-form > input:nth-child(3):hover{
   
    background-color: rgb(199, 68, 68);
    color: white;
     
 }
 #radio-form > input:nth-child(3):checked{
   
    background-color: rgb(199, 68, 68);
    color: white;
     
 } 




.priority-select > h1{
    color:rgb(131, 131, 131) ;
    font-weight: 400;
    font-size: 24px;
}



::placeholder{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:rgb(131, 131, 131) ;

}



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,body{\n    height: 100%;\n    margin: 0;\n\n}\n\n\n\nbody{\n    background: hsla(337, 65%, 78%, 1);\n    background: linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);\n    background: -moz-linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);\n    background: -webkit-linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ninput[type=\"checkbox\"] {\n    position: relative;\n    appearance: none;\n    width: 1.5em;\n    height: 1.5em;\n    border-radius: 50%;\n    border: 2px solid rgb(240, 203, 134);\n\n\n  }\n\n  input[type=\"checkbox\"]::before {\n    content: \" \";\n    border-radius: 50%;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    font-size: 1.2em;\n    visibility: hidden;\n  }\n  input[type=\"checkbox\"]:hover{\n    background-color: rgb(21, 172, 71);\n\n  }\n \n  \n  input[type=\"checkbox\"]:checked::before {\n    /* Use `visibility` instead of `display` to avoid recalculating layout */\n    visibility: visible;\n  }\n  \n  input[type=\"checkbox\"]:disabled {\n    border-color: black;\n    background: #ddd;\n    color: gray;\n  }\n\nh1{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 42px;\n    color: rgb(255, 255, 255);\n}\n\n.main-container{\n    height: 700px;\n    width: 1000px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 24px;\n\n    display: grid;\n\n    grid-template: 0.2fr 1fr/ 0.3fr 1fr;\n\n}\n\n\n.header{\n    grid-area: 1/1/2/3;\n    display: flex;\n    background-color: rgb(240, 203, 134);\n    border-top-left-radius: 24px;\n    border-top-right-radius: 24px;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 24px;\n    box-sizing: border-box;\n\n\n\n}\n.logo{\n    display: flex;\n    flex-direction: row;\n    flex-basis: 50%;\n    justify-content: flex-start;\n    align-items: center;\n}\n.logo > i{\n    margin-right: 24px;\n}\n\n\n.sidebar{\n    background-color: rgb(255, 242, 225);\n    grid-area: 2/1/3/2;\n    display: flex;\n    border-bottom-left-radius: 24px;\n    flex-direction: column;\n    padding: 18px;\n\n}\n.sidebar > *{\n\n    flex-basis: 30%;\n}\n\n.sidebar button{\n    height: 42px;\n    width: 90%;\n    text-align: start;\n}\n.user-projects{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%;\n    gap:10px;\n    max-height: 250px;\n    overflow-y: auto;\n    flex-shrink: 0\n}\n\n\n.user-projects button{\n    height: 42px;\n    min-height: 42px;\n    width: 90%;\n\n}\n.user-projects button:hover{\n    background-color: rgb(240, 203, 134);\n\n}\n\n\n.highlighted{\n    background-color: rgb(240, 203, 134);\n    border-radius: 4px;\n}\n\n\n\n.default-projects-list{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n\n\n}\n.projects-list{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n\n}\n\n\n.default-projects-list > *:hover{\n\n    background-color: rgb(240, 203, 134);\n\n}\n\n.project-name-input{\n    display: none;\n}\n\n\n\n.projects-title{\n    color: rgb(109, 109, 109);\n    font-size: 24px;\n}\n\n\n\n\nbutton{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    border: none;\n    background-color: rgb(255, 242, 225);\n    font-size: 18px;\n    color: rgb(143, 143, 143);\n    font-weight: 600;\n    cursor: pointer;\n    transition: background-color 0.2s;\n\n}\n\n.todo-container{\n    height: 100%;\n    width: 100%;\n    padding: 24px;\n    grid-area: 2/2/3/3;\n    display: flex;\n    flex-direction: column;\n    /* grid-template: 0.25fr 1fr/1fr; */\n    box-sizing: border-box;\n\n}\n.todo-container > div{\n}\n\n.task{\n    padding: 12px;\n    margin: 8px;\n    display: flex;\n    align-items: center;\n    background-color: rgb(255, 242, 225);\n    border-radius: 4px;\n    justify-content: space-between;\n    padding-left: 12px;\n    padding-right: 24px;\n    width: 650px;\n    height: 75px;\n    white-space: nowrap;\n    box-sizing: border-box;\n    transition: box-shadow 0.12s;\n}\n\n.task:hover{\n    box-shadow: 5px 1px 15px -7px rgba(0,0,0,0.32);\n}\n\n.task *{\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\n.task-left{\n    display: flex;\n    align-items: center;\n    \n\n}\n\n.task-center{\n    overflow: hidden;\n    text-overflow:ellipsis; \n    width: 400px;\n    display: flex;\n    margin-left: 24px;\n}\n\n.task-center p{\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow:ellipsis; \n  color: rgb(143, 143, 143);\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n\n}\n\n.task-right{\n    display: flex;\n    align-items: center;\n    gap: 18px;\n}\n\n\ni{\n    cursor: pointer;\n}\n\ni:hover{\n    color: rgb(190, 125, 71) !important;\n}\n\n\n\n\n\n\nul{\n    position: relative;\n    top: 24px;\n    right: 64px;\n    gap: 4px;\n    display: flex;\n    flex-direction: column;\n}\n\nul > div{\n\n    \n    background-color: rgb(240, 203, 134);\n    color: rgb(255, 255, 255);\n    font-weight: 500;\n    height: 20px;\n    width: 50px;\n    border-radius: 4px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 12px;\n    padding-left: 8px;\n    list-style: none;\n    position: relative;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    cursor: pointer;\n\n    \n}\n\n.dropdown-container{\n    \n    position: relative;\n    width: 0;\n    height: 0;\n\n}\n\n\nul>div:hover{\n    background-color: rgb(240, 210, 156);\n\n}\n\n\n\n.task h1{\n    color: rgb(109, 109, 109);\n    margin-left: 4px;\n    font-size: 24px;\n    font-weight: 500;\n\n}\n\n.task h2 {\n    color: rgb(143, 143, 143);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n}\n\n.add-task{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 4px;\n    grid-area: 2/1/3/2;\n}\n\n.add-task-button{\n    background-color: white;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.add-task h2{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 24px;\n    color: rgb(109, 109, 109);\n\n}\n\n.tasks{\n    max-height: 430px;\n    overflow-y: auto;\n}\n\n#modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  #modal-content {\n    background-color: #fff;\n    border-radius: 4px;\n    height: 450px;\n    width: 600px;\n    display: grid;\n    grid-template: 0.2fr 1fr/1fr;\n  }\n\n  .modal-header{\n      display: flex;\n      align-items: center;\n      grid-area: 1/1/2/2;\n      background-color: rgb(240, 203, 134);\n      border-top-left-radius: 4px;\n      border-top-right-radius: 4px;\n\n  }\n  .modal-header h1{\n      font-size: 32px;\n      margin: 0;\n      margin-left: 12px;\n      margin-top: 12px;\n      margin-bottom: 12px;\n      \n  }\n\n  .modal-form{\n      display: flex;\n      justify-content: flex-start;\n      padding: 24px;\n      flex-direction: column;\n  }\n\n  .modal-form > form{\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      width: 75%;\n      gap: 8px;\n  }\n  form > input, form > textarea{\n      border: none;\n      border-bottom: solid rgb(207, 150, 44) 1px;\n      margin: 12px 2px;\n  }\n\n  .projects-list input{\n    border: none;\n    border-bottom: solid rgb(207, 150, 44) 1px;\n    margin: 12px 2px;\n    background-color: rgb(255, 242, 225);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    width: 75%;\n    color: rgb(110, 110, 110);\n    font-size: 16px;\n    font-weight: 300;\n\n  }\n\n  .project-name-input{\n    display: none;\n    gap:8px;\n    font-weight: 300;\n    font-size: 16px;\n  }\n\n  .project-name-input-buttons{\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n\n\n  }\n\n\n.project-name-input-buttons > :nth-child(1){\n    \n    color: rgb(13, 148, 13);\n\n  }\n  .project-name-input-buttons > :nth-child(2){\n    \n    color: rgb(201, 20, 20);\n\n  }\n\n\n \n\n  form > input{\n      font-size: 24px;\n      \n  }\n\nform > textarea{\n      font-size: 18px;\n      height: 48px;\n      \n  }\nform > input[type='date']{\n    color: rgb(131, 131, 131);\n    width: 50%;\n}\n\n.priority-select{\n    margin-top: 12px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: rgb(131, 131, 131);\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n}\n\n.submit-task-button{\n    height: 60px;\n    width: 60px;\n    align-self: flex-end;\n    background-color: white;\n    border: solid 2px rgb(255, 255, 255);\n    background-color: rgb(240, 203, 134);\n    border-radius: 50%;\n    margin-right: 8px;\n    box-shadow: 5px 5px 13px 3px rgba(0,0,0,0.23);\n    border: none;\n    transition: box-shadow 0.2s;\n\n}\n\n.submit-task-button:active{\n    box-shadow: 5px 5px 13px 0px rgba(0,0,0,0.23);\n\n    \n}\n\n\n\ninput[type=\"radio\"]{\n    appearance: none;\n    margin: 0;\n    height: 30px;\n    width: 55px;\n    border-radius: px;\n   \n  \n\n}\n\n#radio-form > input:nth-child(1){\n    height: 32px;\n    width: 32px;\n    border: solid 2px rgb(5, 163, 0);\n    color: rgb(5, 163, 0);\n    border-radius: 50%;\n    transition: background-color 0.2s;\n}\n\n#radio-form > input:nth-child(1):hover{\n   \n    background-color: rgb(5, 163, 0);\n    color: white;\n}\n#radio-form > input:nth-child(1):checked{\n   \n    background-color: rgb(5, 163, 0);\n    color: white;\n} \n\n\n#radio-form > input:nth-child(2){\n    height: 32px;\n    width: 32px;\n    border: solid 2px rgb(247, 203, 59);\n    border-radius: 50%;\n    color: rgb(247, 203, 59);\n    transition: background-color 0.2s;\n}  \n#radio-form > :nth-child(2):hover{\n   \n    background-color: rgb(247, 203, 59);\n    color: white;\n     \n }\n #radio-form > :nth-child(2):checked{\n   \n    background-color: rgb(247, 203, 59);\n    color: white;\n     \n } \n\n\n #radio-form > input:nth-child(3){\n    height: 32px;\n    width: 32px;\n    border: solid 2px rgb(199, 68, 68);\n    border-radius: 50%;\n    color: rgb(199, 68, 68);\n    transition: background-color 0.2s;\n\n}\n#radio-form > input:nth-child(3):hover{\n   \n    background-color: rgb(199, 68, 68);\n    color: white;\n     \n }\n #radio-form > input:nth-child(3):checked{\n   \n    background-color: rgb(199, 68, 68);\n    color: white;\n     \n } \n\n\n\n\n.priority-select > h1{\n    color:rgb(131, 131, 131) ;\n    font-weight: 400;\n    font-size: 24px;\n}\n\n\n\n::placeholder{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color:rgb(131, 131, 131) ;\n\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectButton: () => (/* binding */ addProjectButton),
/* harmony export */   addTaskButton: () => (/* binding */ addTaskButton),
/* harmony export */   cancelProjectButton: () => (/* binding */ cancelProjectButton),
/* harmony export */   confirmProjectButton: () => (/* binding */ confirmProjectButton),
/* harmony export */   drawNewProjectContainer: () => (/* binding */ drawNewProjectContainer),
/* harmony export */   drawTask: () => (/* binding */ drawTask),
/* harmony export */   gatherTaskInfo: () => (/* binding */ gatherTaskInfo),
/* harmony export */   getCurrentContainer: () => (/* binding */ getCurrentContainer),
/* harmony export */   getProjectName: () => (/* binding */ getProjectName),
/* harmony export */   hideProjects: () => (/* binding */ hideProjects),
/* harmony export */   modalOverlay: () => (/* binding */ modalOverlay),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   projectNameInput: () => (/* binding */ projectNameInput),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   submitButton: () => (/* binding */ submitButton),
/* harmony export */   taskContainer: () => (/* binding */ taskContainer)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const mainContainer = document.querySelector('.main-container')
const header = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')
const taskContainer = document.querySelector('.tasks')
const projects = document.querySelector('.default-projects-list')
const userProjectContainer = document.querySelector('.user-projects')

const addProjectButton = document.querySelector('.add-project-button')
const addTaskButton = document.querySelector('.add-task-button')

const modalOverlay = document.querySelector('#modal-overlay')
const submitButton = document.querySelector('.submit-task-button')

const confirmProjectButton = document.querySelector('.confirm-project') 
const cancelProjectButton = document.querySelector('.cancel-project')
const projectNameInput = document.querySelector('.project-name-input-field')


let projectNameDiv = document.body.querySelector('.project-name-input')



let projectList = [projects.children[0],projects.children[1],projects.children[2]]


function drawNewProjectContainer(name){

    let newProjectContainer = document.createElement('button')
    newProjectContainer.innerText = name
    userProjectContainer.appendChild(newProjectContainer)
    projectNameDiv.style.display = 'none'
    projectList.push(newProjectContainer)


for(let i = 0; i < projectList.length;i++){
    projectList[i].addEventListener('click', ()=>{
 

        for(let j = 0; j < projectList.length;j++){
            projectList[j].classList.remove('highlighted');
        }
  
        projectList[i].classList.add('highlighted');

        hideProjects()
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.displayProjectTasks)(projectList[i].innerText)

});
}
}    

function hideProjects(){
    let length = taskContainer.children.length
    for(let i = 0; i < length;i++){
        taskContainer.children[0].remove()
    }
}



function getProjectName(){

    projectNameDiv.style.display = 'flex'

}


cancelProjectButton.addEventListener('click',()=>{
    projectNameDiv.style.display = 'none'
})


function drawTask(toDo){

    const taskDiv = document.createElement('div')
    const taskLeft = document.createElement('div')
    const taskRight = document.createElement('div')
    const taskCenter = document.createElement('div')


    const checkbox = document.createElement('input')
    checkbox.classList.add('checkbox')
    checkbox.type = 'checkbox'
    

    const taskName = document.createElement('h1')
    taskName.innerHTML = toDo.title

    taskLeft.appendChild(checkbox)
    taskLeft.appendChild(taskName)

    const taskNotes = document.createElement('p')
    taskNotes.innerHTML = toDo.description

    taskCenter.appendChild(taskNotes)


    const viewDetails = document.createElement('i')
    viewDetails.classList.add('fa-solid')
    viewDetails.classList.add('fa-eye')
    viewDetails.style = 'color:rgb(109, 109, 109);'


    const garbageButton = document.createElement('i')
    garbageButton.classList.add('fa-solid')
    garbageButton.classList.add('fa-trash')
    garbageButton.style = 'color:rgb(109, 109, 109);'


    const date = document.createElement('h2')
    date.innerText = toDo.dueDate

    taskRight.appendChild(date)
    taskRight.appendChild(viewDetails)
    taskRight.appendChild(garbageButton)

    taskDiv.classList.add('task')
    taskLeft.classList.add('task-left')
    taskRight.classList.add('task-right')
    taskCenter.classList.add('task-center')

    taskDiv.appendChild(taskLeft)
    taskDiv.appendChild(taskCenter)
    taskDiv.appendChild(taskRight)


    taskContainer.appendChild(taskDiv)

    garbageButton.addEventListener('click',()=>{
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.removeTask)(toDo,getCurrentContainer())
        eraseTask(event.target)
    })

}


function eraseTask(clickedElement){

    clickedElement.parentNode.parentNode.remove()

}




addTaskButton.addEventListener('click', ()=>{

    modalOverlay.style.display = 'flex'



})



function gatherTaskInfo(){

    let taskName = document.querySelector('#task-name').value
    let taskDescription = document.querySelector('#task-description').value
    let taskDate = document.querySelector('#task-date').value
    let taskPrioLow = document.querySelector('#prio-low')
    let taskPrioMed = document.querySelector('#prio-med')
    let taskPrioHigh = document.querySelector('#prio-high')

    let prio

    if(taskPrioLow.checked){
        prio = 'low'
    } else if (taskPrioMed.checked){
        prio = 'med'
    } else if (taskPrioHigh.checked){
        prio = 'high'
    }

    const taskInfo = {

        taskName : taskName,
        taskDescription : taskDescription,
        taskDate : taskDate,
        taskPrio : prio

    }

    return taskInfo

}


function getCurrentContainer(){
        for(let i = 0; i < projectList.length;i++){
            if(projectList[i].classList.contains('highlighted') && i != 1 && i != 2){
                return projectList[i].innerText
            }
        }
        return 'Inbox'
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectEventListeners: () => (/* binding */ addProjectEventListeners),
/* harmony export */   displayProjectTasks: () => (/* binding */ displayProjectTasks),
/* harmony export */   removeTask: () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMstuff */ "./src/DOMstuff.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/logic.js");







_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.submitButton.addEventListener('click',()=>{

    
    let taskInfo = (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.gatherTaskInfo)()
    let task = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.createToDo)(taskInfo.taskName,taskInfo.taskDescription,taskInfo.taskDate,taskInfo.prio)
    let currentContainer = (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.getCurrentContainer)()

    
        
        currentContainer = _logic__WEBPACK_IMPORTED_MODULE_2__.projectsMap.get(currentContainer)
        if(currentContainer === " Today" || currentContainer === " This week"){
            (0,_logic__WEBPACK_IMPORTED_MODULE_2__.addToContainer)(task," Inbox")

        } else {
            (0,_logic__WEBPACK_IMPORTED_MODULE_2__.addToContainer)(task,currentContainer)
            ;(0,_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.drawTask)(task)

        }
    
    
    if((0,_logic__WEBPACK_IMPORTED_MODULE_2__.isTaskDueToday)(task)){
        (0,_logic__WEBPACK_IMPORTED_MODULE_2__.addToContainer)(task,_logic__WEBPACK_IMPORTED_MODULE_2__.projectsMap.get(" Today"))
       let x = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.getProjectsMap)()
    }

    if((0,_logic__WEBPACK_IMPORTED_MODULE_2__.isTaskDueThisWeek)(task)){

        (0,_logic__WEBPACK_IMPORTED_MODULE_2__.addToContainer)(task,_logic__WEBPACK_IMPORTED_MODULE_2__.projectsMap.get(" This week"))
        let y = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.getProjectsMap)()

    }


    _DOMstuff__WEBPACK_IMPORTED_MODULE_1__.modalOverlay.style.display = 'none'

})


function addProjectEventListeners(){

    for(let i = 0; i < _DOMstuff__WEBPACK_IMPORTED_MODULE_1__.projectList.length;i++){
        _DOMstuff__WEBPACK_IMPORTED_MODULE_1__.projectList[i].addEventListener('click', ()=>{
     
    
            for(let j = 0; j < _DOMstuff__WEBPACK_IMPORTED_MODULE_1__.projects.children.length;j++){
                _DOMstuff__WEBPACK_IMPORTED_MODULE_1__.projectList[j].classList.remove('highlighted');
            }
      
            _DOMstuff__WEBPACK_IMPORTED_MODULE_1__.projectList[i].classList.add('highlighted');
            (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.hideProjects)()

            displayProjectTasks(_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.projectList[i].innerText)
            
    });
    }
}

addProjectEventListeners()

_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.addProjectButton.addEventListener('click',()=>{

    ;(0,_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.getProjectName)()    

})

_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.confirmProjectButton.addEventListener('click', ()=>{
    let newProjectName = _DOMstuff__WEBPACK_IMPORTED_MODULE_1__.projectNameInput.value
    let newProjectObject = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.createProject)(newProjectName)
    _logic__WEBPACK_IMPORTED_MODULE_2__.projectsMap.set(newProjectName,newProjectObject)
    
    ;(0,_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.drawNewProjectContainer)(newProjectName)
})



function displayProjectTasks(containerName){

    let map = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.getProjectsMap)()


    for (const [key, value] of map) {
        if(key === containerName){
            let currentProjectArray = _logic__WEBPACK_IMPORTED_MODULE_2__.projectsMap.get(key)
            for(let i = 0; i < currentProjectArray.length;i++){
                (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.drawTask)(currentProjectArray[i])
            }
        }
      }
      




}

function removeTask(task,projectName){

    let projectsMap = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.getProjectsMap)()
    let projectArray = projectsMap.get(projectName)

    let arrayLength = projectArray.length

    for(let i = 0; i < arrayLength;i++){
        if(projectArray[i].title == task.title){
            projectArray.splice(i,1)
            return
        }
    }



}





















/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToContainer: () => (/* binding */ addToContainer),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createToDo: () => (/* binding */ createToDo),
/* harmony export */   getProjectsMap: () => (/* binding */ getProjectsMap),
/* harmony export */   inbox: () => (/* binding */ inbox),
/* harmony export */   isTaskDueThisWeek: () => (/* binding */ isTaskDueThisWeek),
/* harmony export */   isTaskDueToday: () => (/* binding */ isTaskDueToday),
/* harmony export */   projectsMap: () => (/* binding */ projectsMap)
/* harmony export */ });
let thisWeek = []
let today = []

let inbox = []

let projectsMap = new Map([
    
    [" Inbox", inbox],
    [" Today", today],
    [" This week", thisWeek]


])

function getProjectsMap(){
    return projectsMap
}


const toDoFactory = (title,description,dueDate,priority) => {

    let toDoItem = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
      };

    return {toDoItem}
}





function createToDo(title,description,dueDate,priority){
    let newToDo = toDoFactory(title,description,dueDate,priority).toDoItem
    return newToDo
}

function addToContainer(toDo,container){

    container.push(toDo)
}



function createProject(title){
    let newProject = []
    return newProject
}

    const date = new Date()
    let day = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()


function isTaskDueToday(toDo){


   let fullDate = date.toISOString().slice(0,10)
    if(toDo.dueDate == fullDate){
        return true
    }

    return false

}


function isTaskDueThisWeek(toDo){


    let fullDate = date.toISOString().slice(0,10)

    let userDate = new Date(toDo.dueDate)

    let difference = userDate - date
    var differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    var isWithinWeek = Math.abs(differenceInDays) <= 7;




    
    if(isWithinWeek ){
        return true
    }

    return false

}
    


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map