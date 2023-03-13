import Head from 'next/head';
import Navbar from './Navbar';
import Banner from './Banner';
import CompanyDescription from './CompanyDescription';
import DropDown from './DropDown';
import ContactInfo from './ContactInfo';
import PartnershipWork from './PartnershipWork';
import Quote from './Quote';

export default function Layout() {
  return <>
    <Head>
      <title>6sense-Expert Custom Software Development Company</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="https://6sensehq.com/wp-content/uploads/2022/09/cropped-Favicon-1-32x32.png"
        sizes="32x32"
      />
    </Head>
    <header>
      <Navbar></Navbar>
    </header>

    <main>
      <Banner />
      <CompanyDescription />
      <DropDown />
      <ContactInfo />
      <PartnershipWork />
      <Quote />
      <ContactInfo />

    </main>

    <footer></footer>
  </>;
}
