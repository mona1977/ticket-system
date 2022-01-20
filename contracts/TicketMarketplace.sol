//Developer : Surendra Gupta
//Date : 18-JAN-2021
pragma solidity ^0.6.0;

import "./FestivalNFT.sol";
import "./TicketToken.sol";

contract TicketMarketplace {
    TicketToken private _token;
    FestivalNFT private _festival;

    address private _organiser;

    constructor(TicketToken token, FestivalNFT festival) public {
        _token = token;
        _festival = festival;
        _organiser = _festival.getOrganiser();
    }

    event Purchase(address indexed buyer, address seller, uint256 ticketId);

    // Purchase Ticket from event owner
    function purchaseTicket() public {
        address buyer = msg.sender;

        _token.transferFrom(buyer, _organiser, _festival.getTicketPrice());

        _festival.transferTicket(buyer);
    }

    // Ticket for the 3rd party 
    function secondaryPurchase(uint256 ticketId) public {
        address seller = _festival.ownerOf(ticketId);
        address buyer = msg.sender;
        uint256 sellingPrice = _festival.getSellingPrice(ticketId);
        uint256 commision = (sellingPrice * 10) / 100;

        _token.transferFrom(buyer, seller, sellingPrice - commision);
        _token.transferFrom(buyer, _organiser, commision);

        _festival.secondaryTransferTicket(buyer, ticketId);

        emit Purchase(buyer, seller, ticketId);
    }
}
