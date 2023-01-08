import React, { useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x741592e160C28d02dd506A7ea7F97C6ee27AD397"
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );
  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address, // owner
        form.title, // title
        form.description, // description
        form.target,
        new Date(form.deadline).getTime(), // deadline
        form.image,
      ]);
      console.log("Contract call successful", data);
    } catch (error) {
      console.log("Contract call Error", error);
    }
  };

  return (
    <StateContext.Provider value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
    }}>
         {children}
    </StateContext.Provider>
  )
};

export const useStateContext  = () => useContext(StateContext);