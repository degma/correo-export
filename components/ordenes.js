import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'
import { Card } from '@shopify/polaris';

const GET_ORDERS = gql`query getOrders{
    orders(first:10) {
      edges {
        node {
          id
          customer{
            displayName
            phone
          }
          displayFulfillmentStatus
          shippingAddress{
            province
            address1
            address2
            phone
          }
        }
      }
    }
  }
`
const Ordenes = () => {

    return (
        <div>
            <Query query={GET_ORDERS}>
                {({ data, loading, error }) => {
                    if (loading) return <div>Loading…</div>;
                    if (error) return <div>{error.message}</div>;
                    console.log(data.edges);
                    return (
                        <Card>
                            <p>stuff here</p>
                        </Card>
                    );
                }}
            </Query>
        </div>
    )
}

export default Ordenes;