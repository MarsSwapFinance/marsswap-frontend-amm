import BigNumber from 'bignumber.js'
import { useEffect, useState } from 'react'
import ERC20_INTERFACE from '../constants/abis/erc20'
import priceContracts from '../constants/marsPriceContracts'
import { useMulticallContract } from './useContract'

const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (multicallContract){
          const { marsAddress, busdAddress, lpAddress } = priceContracts;
          const calls = [
            [marsAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
            [busdAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
          ];

          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          const [cakeAmount, busdAmount] = result.map(r=>ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));
          const cake = new BigNumber(cakeAmount);
          const busd = new BigNumber(busdAmount);
          const cakePrice = busd.div(cake).toNumber();
          setData(cakePrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}

export default useGetPriceData
