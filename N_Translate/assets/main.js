

    const client = ZAFClient.init();
    client.invoke("resize", { width: "0px", height: "0px" });
    client.on('pane.activated', function() {
      // handler

          
      
          client.get('comment.text').then((response) => {
           var kazkas = response["comment.text"].replace(/<[^>]*>/gm, '');
           console.log(kazkas);
           
        const options = {
          url: "https://api.deepl.com/v2/translate?auth_key=0637640d-759b-d841-a43b-8d2daecb43f6",
          type: "POST",
          cors: false,
          contentType: 'application/json',
          data: JSON.stringify({ 
              "text": [kazkas],
              "target_lang": "EN"})
      };
        
        
        client.request(options).then((response) => {
          console.log(response.translations[0].text);
          client.set('comment.text',response.translations[0].text);
        });
            
          })
          
          
        });
