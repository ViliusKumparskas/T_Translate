

    const client = ZAFClient.init();
    client.invoke("resize", { height: `60px`, width: '150px'});
  
 
      // Code part to get what tag is added by sidebar app if not translate english
      function myFunction()
      {
      
      client.get('ticket.id').then(function(response) {
      var ticketid = response["ticket.id"];
      const options = {
        url: "/api/v2/tickets/"+ticketid+"/tags",
        type: "GET",
        contentType: 'application/json'
      };
      client.request(options).then((response)=> {
        console.log(response.tags);
        language ="EN";
        if(response.tags.find(element => element.startsWith("t_transcom:en")))
      {
        language = "EN"
      }
      if(response.tags.find(element => element.startsWith("t_transcom:de")))
      {
        language = "DE"
      }  
      if(response.tags.find(element => element.startsWith("t_transcom:fr")))
      {
        language = "FR"
      }
      if(response.tags.find(element => element.startsWith("t_transcom:nl")))
      {
        language = "NL"
      }  
      if(response.tags.find(element => element.startsWith("t_transcom:sv")))
      {
        language = "SV"
      }  
      if(response.tags.find(element => element.startsWith("t_transcom:fi")))
      {
        language = "FI"
      }   
      // New Language
      if(response.tags.find(element => element.startsWith("t_transcom:nb")))
      {
        language = "NB"
      }  
      if(response.tags.find(element => element.startsWith("t_transcom:sk")))
      {
        language = "SK"
      }  
      if(response.tags.find(element => element.startsWith("t_transcom:cs")))
      {
        language = "CS"
      }  
      if(response.tags.find(element => element.startsWith("t_transcom:ro")))
      {
        language = "RO"
      }   
      if(response.tags.find(element => element.startsWith("t_transcom:bg")))
      {
        language = "BG"
      }   
      if(response.tags.find(element => element.startsWith("t_transcom:hu")))
      {
        language = "HU"
      }   
        glossary_id ="e1a2fb17-7b32-4371-b290-cfa6dd05ba2f"




        /// Code for getting the text and pushing the translated value
      
          client.get('comment.text').then((response) => {
           var kazkas = response["comment.text"];
           console.log(kazkas);
           
        const options = {
          url: "https://api.deepl.com/v2/translate?auth_key=0637640d-759b-d841-a43b-8d2daecb43f6",
          type: "POST",
          cors: false,
          contentType: 'application/json',
          data: JSON.stringify({ 
              "text": [kazkas],
              "target_lang": language,
              "preserve_formatting": true })
      };
        
        
        client.request(options).then((response) => {
          console.log(response.translations[0].text);
          console.log(response.translations[0].detected_source_language);
          if(response.translations[0].detected_source_language=="EN"&& language =="DE")
          {
            const options1 = {
              url: "https://api.deepl.com/v2/translate?auth_key=0637640d-759b-d841-a43b-8d2daecb43f6",
              type: "POST",
              cors: false,
              contentType: 'application/json',
              data: JSON.stringify({ 
                  "text": [kazkas],
                  "target_lang": language,
                  "preserve_formatting": true,
                  "glossary_id": "e6a225db-3217-4ee7-bb6d-4dfc8c9f9e68",
                  "source_lang": "EN"})
          };
          client.request(options1).then((response) => {
          client.set('comment.text',response.translations[0].text);  
          })
          }
          else{
          client.set('comment.text',response.translations[0].text);
          }
        });
            
          })
          })
        })
      }
        

