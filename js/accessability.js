 //Highlights first letter of label with corresponding Access Key
            //we create a span around the Same letter as the accesskey so we can syle it differently
            function addKeyHint(element) {//element is the label link or button we isolated with function below filtering for access key
                //checks if label exists in html element 
                //makes an array of text with childnode property
                let textnode = Array.from(element.childNodes).find(node => node.nodeName === "#text");//makes sure that child node name is text
                console.log(textnode);

            //so if we find a child node with text in it run the following
            if(textnode) {
                let ak=element.getAttribute("accesskey");//isolates ak value
                let txt = textnode.nodeValue;//isolates text within your html element
                let pos=txt.indexOf(ak);//var searches for position of first instance of ak letter or number in the textelement child node
              
                let newspan=document.createElement("span");//this creates your span
                newspan.appendChild(document.createTextNode(ak));//this Puts your ak value in that new span
                newspan.className="accesskey";//this adds a class name of accesskey so its easy to style all elements

                //subtr(0,pos) means you a creating a node that starts at the zero position to the position of the ak character 
                let newtext1=document.createTextNode(txt.substr(0,pos));//creating a text node that will be placed at the first position of txt
                let newtext2=document.createTextNode(txt.substr(pos+1));//creates the rest of the string that is not the AK character

                if(newtext1.length>0)//if the newtext1 lenght is greater than zero run this
                    element.insertBefore(newtext1, textnode);//insert isolated ak character before textnode
                element.insertBefore(newspan, textnode);//insert a span before textnode

                if(newtext2.length>0)//if the newtext2 lenght is greater than zero run this
                    element.insertBefore(newtext2, textnode);//insert the rest of your text that does not including the ak letter before your text node
                
                    //we just created -> <span>AK</span>"rest of text" infront of the original childnode text of html element
                    //now we need to remove that childnode from the html element 
                    element.removeChild(textnode);
                }
            }
            //runs when the window loads with event listen at bottom
            function addAccessKeyHints() {
                //gets form element by id
                var theform = document.getElementById("addressform");
                //runs through all of the form's html element types in list
                var elems = Array("LABEL", "A", "BUTTON")
                //this condenses and creates array of elements:
                elems.forEach(elem => {
                    var items = Array.from(theform.getElementsByTagName(elem));
                    //this filters those elements to only the ones with acesses keys
                    items.forEach(item => {
                        if (item.hasAttribute("accesskey")) {
                            addKeyHint(item)//this runs the function above if accesskey exists
                        }
                    });

                });
            }

            window.addEventListener("load", addAccessKeyHints)