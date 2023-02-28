(async function () {
    var client = ZAFClient.init();
    client.invoke('resize', { width: '100%', height: '600px' });
    /*
   await client.get('userFields').then((response) => {
      var kazkas = response;
      console.log(kazkas);
    })
   await client.get('currentUser.identities.0.userId').then((response) =>{
      var userid = response["currentUser.identities.0.userId"];
      const options1 = {
        url: "/api/v2/users/"+userid+"/identities",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify({
          "identity":
            {
            "type" : "phone_number",
            "value" : "t_transcom:en",
            
            }
          })
      }
      client.request(options1);
       client.get('currentUser.identities').then((response) =>{
        console.log(response);
      })
    })
*/
 
    var submitOption = document.getElementById("submit-option");

    var showValue = document.getElementById("display-value");
    client.get('ticket.id').then(function(response) {
      var ticketid = response["ticket.id"];
      const options = {
        url: "/api/v2/tickets/"+ticketid+"/tags",
        type: "GET",
        contentType: 'application/json'
      };
      
      client.request(options).then((response)=> {
        
        client.get('currentUser.tags').then((responseuser)=> {
        console.log(responseuser["currentUser.tags"]);
        console.log(response.tags);
        var e = document.getElementById("languageid");
        e.value = "en";
        e.options[e.selectedIndex].text ="English";
       if(response.tags.find(element => element.startsWith("t_transcom:en")))
      {
        language = "EN"
        var e = document.getElementById("languageid");
       // console.log(e.value)
       // console.log(e.options[e.selectedIndex].text)
        e.value = "en";
        e.options[e.selectedIndex].text ="English";
      }
      else if(response.tags.find(element => element.startsWith("t_transcom:de")))
      {
        language = "DE"
        var e = document.getElementById("languageid");
      //  console.log(e.value)
      //  console.log(e.options[e.selectedIndex].text)
        e.value = "de";
        e.options[e.selectedIndex].text ="German";
      }  
      else if(response.tags.find(element => element.startsWith("t_transcom:fr")))
      {
        language = "FR"
        var e = document.getElementById("languageid");
        e.value = "fr";
        e.options[e.selectedIndex].text ="French";
      }
      else if(response.tags.find(element => element.startsWith("t_transcom:nl")))
      {
        language = "NL"
        var e = document.getElementById("languageid");
        e.value = "nl";
        e.options[e.selectedIndex].text ="Dutch";
      }  
      else if(response.tags.find(element => element.startsWith("t_transcom:sv")))
      {
        language = "SV"
        var e = document.getElementById("languageid");
        e.value = "sv";
        e.options[e.selectedIndex].text ="Swedish";
      }  
      else if(response.tags.find(element => element.startsWith("t_transcom:fi")))
      {
        language = "FI"
        var e = document.getElementById("languageid");
        e.value = "fi";
        e.options[e.selectedIndex].text ="Finish";
      }
      //new languages
      else if(response.tags.find(element => element.startsWith("t_transcom:nb")))
      {
        language = "NB"
        var e = document.getElementById("languageid");
        e.value = "nb";
        e.options[e.selectedIndex].text ="Norwegian";
      } 
      else if(response.tags.find(element => element.startsWith("t_transcom:sk")))
      {
        language = "SK"
        var e = document.getElementById("languageid");
        e.value = "sk";
        e.options[e.selectedIndex].text ="Slovak";
      }
      else if(response.tags.find(element => element.startsWith("t_transcom:cs")))
      {
        language = "CS"
        var e = document.getElementById("languageid");
        e.value = "cs";
        e.options[e.selectedIndex].text ="Czech";
      }   
      else if(response.tags.find(element => element.startsWith("t_transcom:ro")))
      {
        language = "RO"
        var e = document.getElementById("languageid");
        e.value = "ro";
        e.options[e.selectedIndex].text ="Romanian";
      }  
      else if(response.tags.find(element => element.startsWith("t_transcom:bg")))
      {
        language = "BG"
        var e = document.getElementById("languageid");
        e.value = "bg";
        e.options[e.selectedIndex].text ="Bulgarian";
      }
      else if(response.tags.find(element => element.startsWith("t_transcom:hu")))
      {
        language = "HU"
        var e = document.getElementById("languageid");
        e.value = "hu";
        e.options[e.selectedIndex].text ="Hungarian";
      } 
      else if(response.tags.find(element => element.startsWith("t_transcom:es")))
      {
        language = "ES"
        var e = document.getElementById("languageid");
        e.value = "es";
        e.options[e.selectedIndex].text ="Spanish";
      } 
      else if(response.tags.find(element => element.startsWith("t_transcom:da")))
      {
        language = "DA"
        var e = document.getElementById("languageid");
        e.value = "da";
        e.options[e.selectedIndex].text ="Danish";
      }
      //
      //   UserTags Checking
      //
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:en")))
      {
        language = "EN"
        var e = document.getElementById("languageid");
       // console.log(e.value)
       // console.log(e.options[e.selectedIndex].text)
        e.value = "en";
        e.options[e.selectedIndex].text ="English";
      }
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:de")))
      {
        language = "DE"
        var e = document.getElementById("languageid");
      //  console.log(e.value)
      //  console.log(e.options[e.selectedIndex].text)
        e.value = "de";
        e.options[e.selectedIndex].text ="German";
      }  
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:fr")))
      {
        language = "FR"
        var e = document.getElementById("languageid");
        e.value = "fr";
        e.options[e.selectedIndex].text ="French";
      }
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:nl")))
      {
        language = "NL"
        var e = document.getElementById("languageid");
        e.value = "nl";
        e.options[e.selectedIndex].text ="Dutch";
      }  
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:sv")))
      {
        language = "SV"
        var e = document.getElementById("languageid");
        e.value = "sv";
        e.options[e.selectedIndex].text ="Swedish";
      }  
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:fi")))
      {
        language = "FI"
        var e = document.getElementById("languageid");
        e.value = "fi";
        e.options[e.selectedIndex].text ="Finish";
      }
      //new languages
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:nb")))
      {
        language = "NB"
        var e = document.getElementById("languageid");
        e.value = "nb";
        e.options[e.selectedIndex].text ="Norwegian";
      } 
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:sk")))
      {
        language = "SK"
        var e = document.getElementById("languageid");
        e.value = "sk";
        e.options[e.selectedIndex].text ="Slovak";
      }
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:cs")))
      {
        language = "CS"
        var e = document.getElementById("languageid");
        e.value = "cs";
        e.options[e.selectedIndex].text ="Czech";
      }   
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:ro")))
      {
        language = "RO"
        var e = document.getElementById("languageid");
        e.value = "ro";
        e.options[e.selectedIndex].text ="Romanian";
      }  
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:bg")))
      {
        language = "BG"
        var e = document.getElementById("languageid");
        e.value = "bg";
        e.options[e.selectedIndex].text ="Bulgarian";
      }
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:hu")))
      {
        language = "HU"
        var e = document.getElementById("languageid");
        e.value = "hu";
        e.options[e.selectedIndex].text ="Hungarian";
      }
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:es")))
      {
        language = "ES"
        var e = document.getElementById("languageid");
        e.value = "es";
        e.options[e.selectedIndex].text ="Spanish";
      }
      else if(responseuser["currentUser.tags"].find(elementt => elementt.startsWith("t_transcom:da")))
      {
        language = "DA"
        var e = document.getElementById("languageid");
        e.value = "da";
        e.options[e.selectedIndex].text ="Danish";
      }
      else {
        language = "EN"
        var e = document.getElementById("languageid");
        e.value = "en";
        e.options[e.selectedIndex].text ="English";
      }       
    })
  })
  })
    // Attach function to handle button click
    submitOption.addEventListener("click", handleSubmit);
    
    // Function to display selected value on screen
    function handleSubmit(event) {
      event.preventDefault();
      var selectedOption = document.forms["user-form"].language;
    //  showValue.innerText = `You have selected: ${selectedOption.value}`;
    client.get('ticket.id').then(function(response) {
    var ticketid = response["ticket.id"];

    if(selectedOption.value == "en")
    {
        const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:en")))
            {
            
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:en"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
        }}) 
    }
    if(selectedOption.value == "de")
    {
        const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:de")))
            {
             
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:de"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
        }})   
    }
    if(selectedOption.value == "fr")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:fr")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:fr"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    if(selectedOption.value == "nl")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:nl")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:nl"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    if(selectedOption.value == "sv")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:sv")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:sv"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    if(selectedOption.value == "fi")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:fi")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:fi"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    //New languages
    if(selectedOption.value == "nb")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:nb")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:nb"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    if(selectedOption.value == "sk")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:sk")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:sk"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    if(selectedOption.value == "cs")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:cs")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:cs"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    if(selectedOption.value == "ro")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:ro")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:ro"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    if(selectedOption.value == "bg")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:bg")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:bg"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    if(selectedOption.value == "hu")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:hu")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:hu"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    if(selectedOption.value == "es")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:es")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:es"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    if(selectedOption.value == "da")
    {
          const options = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "GET",
            contentType: 'application/json'
          };
          client.request(options).then((response)=> {
            console.log(response.tags);
            if(response.tags.find(element => element.startsWith("t_transcom:da")))
            {
                console.log("nothing to be done");
            }
            else
            {
            const taginfo = response.tags.find(element => element.startsWith("t_transcom"));
            deletevalue = taginfo;
            const options4 = {
                url: "/api/v2/tickets/"+ticketid+"/tags",
                type: "DELETE",
                contentType: 'application/json',
                data: JSON.stringify({
                "tags" : [deletevalue]
                })
              };
              client.request(options4).then((response)=> {
                console.log(response);
              })
            
            
        const options3 = {
            url: "/api/v2/tickets/"+ticketid+"/tags",
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify({
            "tags" : ["t_transcom:da"]
            })
          };
          client.request(options3).then((response)=> {
            console.log(response);
          }) 
    }})
    }
    });
}

  })();
  
