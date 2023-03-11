var myMod = require("./tickets_reservation_module");
console.log(myMod);
let Tickets = myMod.Ticket_Reservation;
let user1 = new Tickets();
user1.addTicket(1,1,10,"Alexandria","France","1/4/2023");
user1.addTicket(2,3,20,"Cairo","Dubai","10/5/2023");
user1.addTicket(3,5,50,"Helwan","England","15/10/2023");
//user1.displayAllTickets();
user1.updateTicket(2,11,100,"Aswan","Germany","5/12/2023");
//user1.getTicket(2);
user1.displayAllTickets();







