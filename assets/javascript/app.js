

    
    $('.carousel').carousel({
        interval: 3000
    })
   
    var map = null, infobox, dataLayer;

    function GetMap() 
    {
     // Seting Map Options
     map = new Microsoft.Maps.Map(document.getElementById("myMap"),
        {
      credentials: "AvfsA6uEIfvX5BcL6PMNPQPwVziBK9_w9n9HCLXs9Ic1Kby82FlFCSHa-n_ovjpW",
      center: new Microsoft.Maps.Location(25.6495227,-100.4442138), // monterrey
      mapTypeId: Microsoft.Maps.MapTypeId.aerial,
      zoom: 8
     });
    
     //Create window infobox in the middle of pin (not displayed)
     infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
      visible: false
     });
     //Assign infobox on variabel map
     infobox.setMap(map);
    
     AddData();
    }
   
   function AddData() {
       //Create Pin
    var pin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(25.6494546,-100.4528467));
       //Store metadata on pushpin
    pin1.metadata = {
      title: 'Huasteca',
      description: 'Parque Ecologico'
    };
     // Add handling event click on pushpin
    Microsoft.Maps.Events.addHandler(pin1, 'click', pushpinClicked);
   //Set entity pushpin on map
  
    map.entities.push(pin1);
       
      // for Calang city
       var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(25.6086297,-100.3807202),{color: 'red'});
       pin2.metadata = {
      title: 'Chipinque',
      description: 'Parque Ecologico'
     };
       Microsoft.Maps.Events.addHandler(pin2, 'click', pushpinClicked);
    map.entities.push(pin2);
    
    //For Sabang city
    var pin3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(25.6787085,-100.2864951),{color: 'yellow'});
       pin3.metadata = {
      title: 'Fundidora',
      description: 'Parque Ecologico'
     };
       Microsoft.Maps.Events.addHandler(pin3, 'click', pushpinClicked);
    map.entities.push(pin3);
    
    //For langsa city
    var pin4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.476020, 97.952447),{color: 'blue'});
       pin4.metadata = {
      title: 'Keterangan',
      description: 'Ibukota Kotamadya Langsa'
     };
       Microsoft.Maps.Events.addHandler(pin4, 'click', pushpinClicked);
    map.entities.push(pin4);
   }
   
    function pushpinClicked(e) {       
            //To ensure whether infobox have metadata to be displayed
           if (e.target.metadata) {              
              //Add metadata pushpin on option infobox
               infobox.setOptions({                  
                   location: e.target.getLocation(),
                   title: e.target.metadata.title,
                   description: e.target.metadata.description,
                   visible: true,
                   actions: [{
                     label: 'link',
                     eventHandler: function () {
                        if (e.target.metadata.title == "Huasteca"){
                           document.location.href = "huasteca.html";
                        }
                        if (e.target.metadata.title == "Chipinque"){
                           document.location.href = "chipinque.html";
                        }
                        if (e.target.metadata.title == "Fundidora"){
                           document.location.href = "fundidora.html";
                        }
                         
                     }}]
               });
            
              
            }
   }

      































