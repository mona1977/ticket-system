const TicketToken = artifacts.require("TicketToken");
const TicketsFactory = artifacts.require("TicketsFactory");

module.exports = function (deployer) {
  deployer.deploy(TicketToken);
  deployer.deploy(TicketsFactory);
};
