import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xE3c6c29BaA9C4435eE9a1f45F0EE44d4237BdFA9"
);

export default instance;
