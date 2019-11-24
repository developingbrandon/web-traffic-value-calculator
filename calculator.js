// calculator.js
// built by Twin Tiers IT, LLC
// created on 8/5/19
// Script for calculator to figure new client value
// console.log() has been preserved but disabled for debugging purposes

			let visitors = 1000;
			let webConv = 10;
			let leads = 100;
			let yourConv = 10;
			let clients = 10;
			let clientValue = 360;
			let newClientValue = 3600;

		
			// Add listeners to input values
			document.getElementById("visitors").addEventListener("change", myFunction1);
			document.getElementById("w_conv").addEventListener("change", myFunction1);
			document.getElementById("leads").addEventListener("change", myFunction2);
			document.getElementById("y_conv").addEventListener("change", myFunction2);
			document.getElementById("clients").addEventListener("change", myFunction3);
			document.getElementById("client_value").addEventListener("change", myFunction3);

			function myFunction1() {

				visitorsInput = document.getElementById('visitors').value; // Get new value of visitors
				visitors = visitorsInput.replace(/\D^\u002e|\u0025|\u0024|\s/g, ''); // Replace any non-digit character except '.' with blank string
				// console.log(`Visitors is ${visitors}.`); // Print to console

				webConvInput = document.getElementById('w_conv').value; // Get new value of webConv
				webConv = webConvInput.replace(/\D^\u002e|\u0025|\u0024|\s/g, ''); // Replace any non-digit character except '.' with blank string
				// console.log(`Web Conversions is ${webConv}.`); // Print to console
				
				// Calculations, round down to lowest integer if needed
				leads = Math.floor(visitors * (webConv / 100));
				clients = Math.floor(leads * (yourConv/100));
				newClientValue = Math.floor(clients * clientValue);

				// Update inputs with new values:
				document.getElementById('leads').value = leads;
				document.getElementById('y_conv').value = `${yourConv}%`;
				document.getElementById('clients').value = clients;
				document.getElementById('client_value').value = `$${clientValue}`;
				document.getElementById('new_client_value').value = `$${newClientValue}`;

			/*console.log(visitors);
			console.log(webConv);
			console.log(leads);
			console.log(yourConv);
			console.log(clients);
			console.log(clientValue);
			console.log(newClientValue);*/
			

			}; // End of myFunction1

			function myFunction2() {

				leadsInput = document.getElementById('leads').value; // Get new value of leads
				leads = leadsInput.replace(/\D^\u002e|\u0025|\u0024|\s/g, ''); // Replace any non-digit character except '.' with blank string
				// console.log(`Leads is ${leads}.`); // Print to console

				yourConvInput = document.getElementById('y_conv').value; // Get new value of yourConv
				yourConv = yourConvInput.replace(/\D^\u002e|\u0025|\u0024|\s/g, ''); // Replace any non-digit character except '.' with blank string
				// console.log(`Your Conversions is ${yourConv}.`); // Print to console

				// Calculations, round down to lowest integer if needed
				clients = Math.floor(leads * (yourConv / 100));
				newClientValue = Math.floor(clients * clientValue);

				// Update inputs with new values:
				document.getElementById('clients').value = clients;
				document.getElementById('client_value').value = `$${clientValue}`;
				document.getElementById('new_client_value').value = `$${newClientValue}`;

			/*console.log(leads);
			console.log(yourConv);
			console.log(clients);
			console.log(clientValue);
			console.log(newClientValue);*/


			}; // End of myFunction2

			function myFunction3() {

				clientsInput = document.getElementById('clients').value; // Get the new value of clients
				clients = clientsInput.replace(/\D^\u002e|\u0025|\u0024|\s/g, ''); // Replace any non-digit character except '.' with blank string
				// console.log(`Clients is ${clients}.`); // Print to console

				clientValueInput = document.getElementById('client_value').value; // Get the new value of client_value
				clientValue = clientValueInput.replace(/\D^\u002e|\u0025|\u0024|\s/g, ''); // Replace any non-digit character except '.' with blank string
				// console.log(`Client Value is ${clientValue}.`); // Print to console

				// Calculation, round down to lowest integer if needed
				newClientValue = Math.floor(clients * clientValue); // Round down to smallest integer

				// Update inputs with new values:
				document.getElementById('new_client_value').value = `$${newClientValue}`;

			/*console.log(clients);
			console.log(clientValue);
			console.log(newClientValue);*/


			}; // End of myFunction3