// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyBel8GMVSxRKiNTxFh74JJyxoT_U_Vql7I",
    authDomain: "formsubmission-portfolio.firebaseapp.com",
    databaseURL: "https://formsubmission-portfolio.firebaseio.com",
    projectId: "formsubmission-portfolio",
    storageBucket: "formsubmission-portfolio.appspot.com",
    messagingSenderId: "906686718887",
    appId: "1:906686718887:web:afbc6e6e60fcab8822cc82",
    measurementId: "G-RBLMLS89V7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref().child('plan');
  
  // Listen for form submit
  document.getElementById('form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var Type_Of_Project = getInputVal('Type_Of_Project');
    var Budget = getInputVal('Budget');
    var Additional_details = getInputVal('Additional_details');
  
    // Save message
    saveMessage(name, email, Type_Of_Project, Budget, Additional_details);

  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, Type_Of_Project, Budget, Additional_details){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      Type_Of_Project:Type_Of_Project,
      Budget:Budget,
      Additional_details:Additional_details
      
    });
  }