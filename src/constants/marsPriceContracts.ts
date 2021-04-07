import config from 'frontend-config.json'

const priceContracts: { marsAddress: string, busdAddress: string, lpAddress:string } = {
  marsAddress: config.token['56'],
  busdAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  lpAddress: config.farms[0].lpAddresses['56']
}

export default priceContracts