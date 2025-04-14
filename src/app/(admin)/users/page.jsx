"use client"
import React from 'react';
import ComponentContainerCard from '../../../components/ComponentContainerCard'
import PageBreadcrumb from '../../../components/PageBreadcrumb';
import { Button, Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap';
import { dataTableRecords } from '../tables/data-tables/data';
import Link from 'next/link';
import { Grid } from 'gridjs-react';

function UsersTable(){
  return (
    <>
    <PageBreadcrumb title="USER" subName="" />
    <ComponentContainerCard 
    id="hidden_column"
    //  title="Hidden Columns" 
     >
        <div className="">
          <Grid data={users} columns={[{
          id: 'id',
          hidden: true
        }, 'First Name', 'Last Name', 'Telegram Id', 'Filter']} search={true} sort={true} pagination={{
          limit: 10
        }} />
        </div>
      </ComponentContainerCard>
    </>
  )
}

export default UsersTable


const users = [
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      telegramId: '@alice123',
      filter: 'active'
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      telegramId: '@bob_the_great',
      filter: 'inactive'
    },
    {
      firstName: 'Charlie',
      lastName: 'Brown',
      telegramId: '@charlie.b',
      filter: 'pending'
    },
    {
      firstName: 'Diana',
      lastName: 'Parker',
      telegramId: '@diana_p',
      filter: 'active'
    },
    {
      firstName: 'Ethan',
      lastName: 'Wright',
      telegramId: '@ethan_wr',
      filter: 'banned'
    },
    {
      firstName: 'Fiona',
      lastName: 'Green',
      telegramId: '@fionagreen',
      filter: 'active'
    },
    {
      firstName: 'George',
      lastName: 'Hill',
      telegramId: '@georgeH',
      filter: 'inactive'
    },
    {
      firstName: 'Hannah',
      lastName: 'Lee',
      telegramId: '@hannahlee7',
      filter: 'active'
    },
    {
      firstName: 'Ivan',
      lastName: 'Martinez',
      telegramId: '@ivan_mtz',
      filter: 'pending'
    },
    {
      firstName: 'Jasmine',
      lastName: 'Khan',
      telegramId: '@jasminek',
      filter: 'banned'
    }
  ];
  