"use client"
import React from 'react';
import ComponentContainerCard from '../../../components/ComponentContainerCard'
import PageBreadcrumb from '../../../components/PageBreadcrumb';
import { Button, Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap';
import { dataTableRecords } from '../tables/data-tables/data';
import Link from 'next/link';
import { Grid } from 'gridjs-react';

function TokenTable(){
  return (
    <>
    <PageBreadcrumb title="Tokens" subName="Tables" />
    <ComponentContainerCard 
    id="hidden_column"
    //  title="Hidden Columns" 
     >
        <div className="">
          <Grid data={tokens} columns={[{
          id: 'id',
          hidden: true
        }, 'Token Name', 'Token Symbol', 'Price', 'Market Cap','Supply','Chain']} search={true} sort={true} pagination={{
          limit: 10
        }} />
        </div>
      </ComponentContainerCard>
    </>
  )
}

export default TokenTable


const tokens = [
    {
      tokenName: 'Bitcoin',
      tokenSymbol: 'BTC',
      price: '64852.20',
      marketCap: '1.27T',
      supply: '19.6M',
      chain: 'Bitcoin'
    },
    {
      tokenName: 'Ethereum',
      tokenSymbol: 'ETH',
      price: '3210.55',
      marketCap: '385B',
      supply: '120M',
      chain: 'Ethereum'
    },
    {
      tokenName: 'Solana',
      tokenSymbol: 'SOL',
      price: '178.25',
      marketCap: '77B',
      supply: '435M',
      chain: 'Solana'
    },
    {
      tokenName: 'Cardano',
      tokenSymbol: 'ADA',
      price: '0.62',
      marketCap: '22B',
      supply: '35B',
      chain: 'Cardano'
    },
    {
      tokenName: 'BNB',
      tokenSymbol: 'BNB',
      price: '532.80',
      marketCap: '81B',
      supply: '153M',
      chain: 'BNB Smart Chain'
    },
    {
      tokenName: 'Ripple',
      tokenSymbol: 'XRP',
      price: '0.57',
      marketCap: '31B',
      supply: '54B',
      chain: 'XRP Ledger'
    },
    {
      tokenName: 'Polygon',
      tokenSymbol: 'MATIC',
      price: '1.05',
      marketCap: '9.7B',
      supply: '9.2B',
      chain: 'Polygon'
    },
    {
      tokenName: 'Dogecoin',
      tokenSymbol: 'DOGE',
      price: '0.16',
      marketCap: '23B',
      supply: '141B',
      chain: 'Dogecoin'
    },
    {
      tokenName: 'Litecoin',
      tokenSymbol: 'LTC',
      price: '102.40',
      marketCap: '7.6B',
      supply: '73M',
      chain: 'Litecoin'
    },
    {
      tokenName: 'Avalanche',
      tokenSymbol: 'AVAX',
      price: '45.30',
      marketCap: '16B',
      supply: '355M',
      chain: 'Avalanche'
    }
  ];
  