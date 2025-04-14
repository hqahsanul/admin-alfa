"use client"
import React from 'react';
import ComponentContainerCard from '../../../components/ComponentContainerCard'
import PageBreadcrumb from '../../../components/PageBreadcrumb';
import { Button, Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap';
import { dataTableRecords } from '../tables/data-tables/data';
import Link from 'next/link';
import { Grid } from 'gridjs-react';

function AlertTable(){
  return (
    <>
    <PageBreadcrumb title="Alerts" subName="Tables" />
    <ComponentContainerCard 
    id="hidden_column"
    //  title="Hidden Columns" 
     >
        <div className="">
          <Grid data={tokenLogs} columns={[{
          id: 'id',
          hidden: true
        }, 'Type', 'Token Name', 'Date', 'Status']} search={true} sort={true} pagination={{
          limit: 10
        }} />
        </div>
      </ComponentContainerCard>
    </>
  )
}

export default AlertTable


const tokenLogs = [
    {
      type: 'deposit',
      tokenName: 'USDT',
      date: '2025-04-12T10:30:00',
      status: 'success'
    },
    {
      type: 'withdrawal',
      tokenName: 'BTC',
      date: '2025-04-11T14:45:00',
      status: 'pending'
    },
    {
      type: 'transfer',
      tokenName: 'ETH',
      date: '2025-04-10T09:15:00',
      status: 'failed'
    },
    {
      type: 'deposit',
      tokenName: 'BNB',
      date: '2025-04-09T16:20:00',
      status: 'success'
    },
    {
      type: 'withdrawal',
      tokenName: 'SOL',
      date: '2025-04-08T19:05:00',
      status: 'success'
    },
    {
      type: 'transfer',
      tokenName: 'XRP',
      date: '2025-04-07T08:00:00',
      status: 'pending'
    },
    {
      type: 'deposit',
      tokenName: 'DOGE',
      date: '2025-04-06T12:30:00',
      status: 'failed'
    },
    {
      type: 'withdrawal',
      tokenName: 'MATIC',
      date: '2025-04-05T17:45:00',
      status: 'success'
    },
    {
      type: 'transfer',
      tokenName: 'ADA',
      date: '2025-04-04T21:10:00',
      status: 'success'
    },
    {
      type: 'deposit',
      tokenName: 'LTC',
      date: '2025-04-03T11:25:00',
      status: 'pending'
    }
  ];
  