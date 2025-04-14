"use client"
import React from 'react';
import ComponentContainerCard from '../../../components/ComponentContainerCard'
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import { Grid ,_} from 'gridjs-react';
import ToggleButton from '../../../components/ToggleButton'

function BotsTable(){
  return (
    <>
    <PageBreadcrumb title="Bots" subName="Tables" />
    <ComponentContainerCard 
    id="hidden_column"
    //  title="Hidden Columns" 
     >
        <div className="">
        <Grid
   data={bots}
  columns={[
   'Bot Name',
    'Bot Type',
    'Chain',
    {
      name: "Status",
      formatter: (cell, row) => {
        return _(
          <div className='d-flex justify-content-center'>
        <ToggleButton cell={cell}/>
        </div>
        );
      }
    }
  ]}
  
  search={true}
  sort={true}
  pagination={{
    limit: 10
  }}
/>

        </div>
      </ComponentContainerCard>
    </>
  )
}

export default BotsTable

const bots = [
    {
      botName: 'AutoTraderX',
      botType: 'Trading',
      chain: 'Ethereum',
      status: 'active'
    },
    {
      botName: 'GasSaverBot',
      botType: 'Sniping',
      chain: 'BNB Smart Chain',
      status: 'inactive'
    },
    {
      botName: 'ArbiFinder',
      botType: 'Arbitrage',
      chain: 'Polygon',
      status: 'active'
    },
    {
      botName: 'QuickBuy',
      botType: 'Sniping',
      chain: 'Solana',
      status: 'banned'
    },
    {
      botName: 'StakeMaster',
      botType: 'Staking',
      chain: 'Avalanche',
      status: 'active'
    },
    {
      botName: 'DeFiGuard',
      botType: 'Security',
      chain: 'Ethereum',
      status: 'inactive'
    },
    {
      botName: 'FlashSwap',
      botType: 'Flash Loan',
      chain: 'Fantom',
      status: 'active'
    },
    {
      botName: 'YieldBot',
      botType: 'Farming',
      chain: 'Arbitrum',
      status: 'pending'
    },
    {
      botName: 'GasSniper',
      botType: 'Gas Arbitrage',
      chain: 'Optimism',
      status: 'active'
    },
    {
      botName: 'BridgeWatch',
      botType: 'Bridge Monitoring',
      chain: 'Base',
      status: 'inactive'
    }
  ];
  