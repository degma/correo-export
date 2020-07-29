import { Layout, Page, EmptyState } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';
import OrderList from '../components/order-list.component';
import Ordenes from '../components/ordenes';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
    {/* <Ordenes /> */}
    {console.log("INDEXXXXXX")}
    <p>por lo menos carga esto!</p>
  </Page>
);

export default Index;