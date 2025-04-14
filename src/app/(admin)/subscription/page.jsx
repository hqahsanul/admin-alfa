"use client"
import React from 'react';
import ComponentContainerCard from '../../../components/ComponentContainerCard'
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import { Grid ,_} from 'gridjs-react';
import ToggleButton from '../../../components/ToggleButton'

function SubscriptionTable(){
  return (
    <>
    <PageBreadcrumb title="Bots" subName="Tables" />
    <ComponentContainerCard 
    id="hidden_column"
    //  title="Hidden Columns" 
     >
        <div className="">
        <Grid
   data={subscriptionDataList?.map((row)=>[
    row.userName,
    row.subscriptionType,
    row.botName,
    row.ExpireDate,
    row.subscribeDate,
    row.status
   ])}
  columns={[
   'User Name',
    'Subscription Type',
    'Bot Name',
    'Expire Date',
    'Subscribe Date',
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

export default SubscriptionTable

const subscriptionDataList = [
    {
      userName: 'JohnDoe',
      subscriptionType: 'Premium',
      botName: 'TradeBotX',
      ExpireDate: '2025-05-01',
      subscribeDate: '2025-04-01',
      status: 'active'
    },
    {
      userName: 'JaneSmith',
      subscriptionType: 'Basic',
      botName: 'InvestBot',
      ExpireDate: '2025-04-15',
      subscribeDate: '2025-03-15',
      status: 'expired'
    },
    {
      userName: 'MikeRoss',
      subscriptionType: 'Standard',
      botName: 'AutoTrader',
      ExpireDate: '2025-04-25',
      subscribeDate: '2025-03-25',
      status: 'active'
    },
    {
      userName: 'RachelZane',
      subscriptionType: 'Premium',
      botName: 'SmartBot',
      ExpireDate: '2025-05-10',
      subscribeDate: '2025-04-10',
      status: 'active'
    },
    {
      userName: 'HarveySpecter',
      subscriptionType: 'Standard',
      botName: 'LegalBot',
      ExpireDate: '2025-04-05',
      subscribeDate: '2025-03-05',
      status: 'expired'
    },
    {
      userName: 'DonnaPaulsen',
      subscriptionType: 'Basic',
      botName: 'QuickBot',
      ExpireDate: '2025-04-20',
      subscribeDate: '2025-03-20',
      status: 'active'
    },
    {
      userName: 'LouisLitt',
      subscriptionType: 'Premium',
      botName: 'LittBot',
      ExpireDate: '2025-05-12',
      subscribeDate: '2025-04-12',
      status: 'active'
    },
    {
      userName: 'SheilaSazs',
      subscriptionType: 'Standard',
      botName: 'HRBot',
      ExpireDate: '2025-04-18',
      subscribeDate: '2025-03-18',
      status: 'expired'
    },
    {
      userName: 'KatrinaBennett',
      subscriptionType: 'Basic',
      botName: 'SupportBot',
      ExpireDate: '2025-04-30',
      subscribeDate: '2025-03-30',
      status: 'active'
    },
    {
      userName: 'JessicaPearson',
      subscriptionType: 'Premium',
      botName: 'BossBot',
      ExpireDate: '2025-05-15',
      subscribeDate: '2025-04-15',
      status: 'active'
    }
  ];
  
  