// surendra gupta
import Provider from './Provider';
import { ticketMarketplaceABI } from '../constants';

const provider = new Provider();

const FestivalMarketplace = (contractAddress) => {
  const web3 = provider.web3;

  return new web3.eth.Contract(ticketMarketplaceABI, contractAddress);
};

export default TicketMarketplace;